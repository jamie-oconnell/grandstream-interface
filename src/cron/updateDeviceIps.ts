const findAllDevices = require("../scripts/findAllDevices");
import { context } from "../context";

(async () => {
  const devices = await findAllDevices();
  context.prisma.phone.findMany();
  console.log(devices);
})();
