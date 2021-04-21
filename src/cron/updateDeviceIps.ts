const findAllDevices = require("../scripts/findAllDevices");
import { context } from "../context";
import { Phone } from "../Phone";

export const updateDeviceIps = async () => {
  try {
    console.log("Running Update Device Ips");
    const devices = await findAllDevices();
    console.log(`Scanned all devices on the network, found total of ${devices.length} devices`);
    const databaseDevices = await context.prisma.phone.findMany();
    console.log(`Looked up all devices in database, found total of ${databaseDevices.length} devices`);
    for (const device of databaseDevices) {
      const scannedDevice = devices.find(
        (x: Phone) => x.mac_address === device.mac
      );
      if (device.ip !== scannedDevice.ip) {
        try {
          const updatedPhone = await context.prisma.phone.update({  
            where: { id: device.id },
            data: { ip: scannedDevice.ip }
          });
          console.log(`Updated ${updatedPhone.mac_address} ip to ${updatedPhone.ip}`)
        } catch (error) {
          console.log(error)
        }
      }
      console.log("Done updating ips")
    }
  } catch (error) {
    console.log(error);
  }
};
