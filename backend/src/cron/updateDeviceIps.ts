const findAllDevices = require("../scripts/findAllDevices");
import { context } from "../context";
import { Phone } from "../Phone";
import _ from "lodash";

export const updateDeviceIps = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Running Update Device Ips...");
      const devices = await findAllDevices();
      const foundDevices = devices;
      console.log(
        `Scanned all devices on the network, found total of ${devices.length} devices`
      );
      const databaseDevices = await context.prisma.phone.findMany();
      console.log(
        `Looked up all devices in database, found total of ${databaseDevices.length} devices`
      );
      console.log("Updating known devices...");
      for (const device of databaseDevices) {
        const scannedDevice = _.find(devices, ["mac", device.mac_address]);
        const scannedDeviceIndex = _.findIndex(devices, [
          "mac",
          device.mac_address,
        ]);
        if (scannedDevice === undefined) {
          console.log(`Cannot find ${device.mac_address} on the network`);
          try {
            const updatedPhone = await context.prisma.phone.update({
              where: { id: device.id },
              data: {
                status: "DISCONNECTED",
                lastCheckedAt: new Date().toISOString(),
              },
            });
            console.log(
              `Updated ${updatedPhone.mac_address} status to disconnected`
            );
          } catch (error) {
            console.log(error);
          }
        } else if (device.ip !== scannedDevice.ip) {
          try {
            const updatedPhone = await context.prisma.phone.update({
              where: { id: device.id },
              data: {
                ip: scannedDevice.ip,
                lastCheckedAt: new Date().toISOString(),
              },
            });
            console.log(
              `Updated ${updatedPhone.mac_address} ip to ${updatedPhone.ip}`
            );
          } catch (error) {
            console.log(error);
          }
        }
        if (scannedDeviceIndex !== -1) {
          foundDevices.splice(scannedDeviceIndex, 1);
          try {
            const updatedPhone = await context.prisma.phone.update({
              where: { id: device.id },
              data: {
                status: "ONLINE",
                lastCheckedAt: new Date().toISOString(),
              },
            });
            console.log(
              `Updated ${updatedPhone.mac_address} status to ${updatedPhone.status}`
            );
          } catch (error) {
            console.log(error);
          }
        }
      }
      console.log(`Found ${foundDevices.length} devices not in database`);
      for (const newDevice of foundDevices) {
        try {
          const discoveredDevice = await context.prisma.phone.create({
            data: {
              mac_address: newDevice.mac,
              ip: newDevice.ip,
              status: "DISCOVERED",
              lastCheckedAt: new Date().toISOString(),
            },
          });
          console.log(
            `Added discovered device ${discoveredDevice.mac_address}`
          );
        } catch (error) {
          console.log(error);
        }
      }

      return resolve("Done");
    } catch (error) {
      console.log(error);
    }
  });
};
