import { context } from "../context";
import { Phone } from "../Phone";
import fetch from "node-fetch";

export const updateDeviceStatus = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Running Status update on Devices");
      const databaseDevices = await context.prisma.phone.findMany();
      console.log(
        `Looked up all devices in database, found total of ${databaseDevices.length} devices`
      );
      for (const device of databaseDevices) {
        fetch(
          `http://${device.ip}/cgi-bin/api-get_phone_status?passcode=${process.env.PHONE_PASSCODE}`
        )
          .then((res) => res.json())
          .then((json) => console.log(json));
        //   const scannedDevice = devices.find(
        //     (x: Phone) => x.mac_address === device.mac
        //   );
        //   if (device.ip !== scannedDevice.ip) {
        //     try {
        //       const updatedPhone = await context.prisma.phone.update({
        //         where: { id: device.id },
        //         data: { ip: scannedDevice.ip },
        //       });
        //       console.log(
        //         `Updated ${updatedPhone.mac_address} ip to ${updatedPhone.ip}`
        //       );
        //     } catch (error) {
        //       console.log(error);
        //     }
        //   }
      }
      return resolve("Done");
    } catch (error) {
      console.log(error);
    }
  });
};
