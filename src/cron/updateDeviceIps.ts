const findAllDevices = require("../scripts/findAllDevices");
import { context } from "../context";
import { Phone } from "../Phone";
import _ from "lodash";

export const updateDeviceIps = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Running Update Device Ips");
      const devices = await findAllDevices();
      console.log(
        `Scanned all devices on the network, found total of ${devices.length} devices`
      );
      const databaseDevices = await context.prisma.phone.findMany();
      console.log(
        `Looked up all devices in database, found total of ${databaseDevices.length} devices`
      );
      for (const device of databaseDevices) {
        const scannedDevice = _.find(devices, ["mac", device.mac_address]);
        if (scannedDevice === undefined) {
          console.log(`Cannot find ${device.mac_address} on the network`);
          if (device.status !== "DISCONNECTED") {
            try {
              const updatedPhone = await context.prisma.phone.update({
                where: { id: device.id },
                data: { status: "DISCONNECTED" },
              });
              console.log(
                `Updated ${updatedPhone.mac_address} status to disconnected`
              );
            } catch (error) {
              console.log(error);
            }
          } else {
            console.log(
              `Device ${device.mac_address} already has status disconnected`
            );
          }
        } else if (device.ip !== scannedDevice.ip) {
          try {
            const updatedPhone = await context.prisma.phone.update({
              where: { id: device.id },
              data: { ip: scannedDevice.ip },
            });
            console.log(
              `Updated ${updatedPhone.mac_address} ip to ${updatedPhone.ip}`
            );
          } catch (error) {
            console.log(error);
          }
        }
      }
      return resolve("Done");
    } catch (error) {
      console.log(error);
    }
  });
};
