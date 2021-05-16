import { updateDeviceIps } from "./updateDeviceIps";
import { updateDeviceStatus } from "./updateDeviceStatus";

export default async () => {
  const updateIps = await updateDeviceIps();
  console.log(updateIps);
  // const updateStatus = await updateDeviceStatus();
  // console.log(updateStatus);
};
