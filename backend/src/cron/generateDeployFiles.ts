import { context } from "../context";
import { Phone } from "../Phone";
import fs from "fs";
import parser from "xml2json";
import formatXml from "xml-formatter";

export const generateDeployFiles = () => {
  return new Promise(async (resolve, reject) => {
    const xmlDir = "./src/xml";

    await fs.promises.rmdir(xmlDir, { recursive: true });
    await fs.promises.mkdir(xmlDir, { recursive: true });
    const templateFile = fs.readFileSync("./src/template/template.xml");
    const template = JSON.parse(
      parser.toJson(templateFile, { reversible: true })
    );
    console.log(template);
    const databaseDevices = await context.prisma.phone.findMany();
    for (const device of databaseDevices) {
      // Load template to new variable
      let newXML: any = template;
      console.log(device);
      newXML["gs_provision"]["mac"] = { $t: device.mac_address };
      // newXML["gs_provision"]["P35"] = { $t: device. };
      // newXML["gs_provision"]["mac"] = { $t: device.mac_address };
      const stringified = JSON.stringify(newXML);
      // console.log(newXML);
      const xml = parser.toXml(stringified);

      fs.writeFile(
        `./src/xml/${device.mac_address}.xml`,
        formatXml(xml, { collapseContent: true }),
        function (err) {
          if (err) {
            return console.error(err);
          }
          console.log(`File ${device.mac_address}.xml created!`);
        }
      );
    }

    return resolve("Done");
  });
};
