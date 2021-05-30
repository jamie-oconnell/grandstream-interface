import { context } from "../context";
import fs from "fs";
import { generateDeployFile } from "./generateDeployFile";

export const generateDeployFiles = () => {
  return new Promise(async (resolve, reject) => {
    const xmlDir = "./src/xml";

    await fs.promises.rmdir(xmlDir, { recursive: true });
    await fs.promises.mkdir(xmlDir, { recursive: true });

    const databaseDevices = await context.prisma.phone.findMany({
      include: { room: true },
    });
    for (const device of databaseDevices) {
      await generateDeployFile(device);
    }

    return resolve("Done");
  });
};
