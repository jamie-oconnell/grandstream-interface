const find = require("local-devices");
fs = require("fs");

(function () {
  var ConvertBase = function (num) {
    return {
      from: function (baseFrom) {
        return {
          to: function (baseTo) {
            return parseInt(num, baseFrom).toString(baseTo);
          },
        };
      },
    };
  };

  // binary to decimal
  ConvertBase.bin2dec = function (num) {
    return ConvertBase(num).from(2).to(10);
  };

  // binary to hexadecimal
  ConvertBase.bin2hex = function (num) {
    return ConvertBase(num).from(2).to(16);
  };

  // decimal to binary
  ConvertBase.dec2bin = function (num) {
    return ConvertBase(num).from(10).to(2);
  };

  // decimal to hexadecimal
  ConvertBase.dec2hex = function (num) {
    return ConvertBase(num).from(10).to(16);
  };

  // hexadecimal to binary
  ConvertBase.hex2bin = function (num) {
    return ConvertBase(num).from(16).to(2);
  };

  // hexadecimal to decimal
  ConvertBase.hex2dec = function (num) {
    return ConvertBase(num).from(16).to(10);
  };

  this.ConvertBase = ConvertBase;
})(this);

module.exports = () => {
  return new Promise((resolve, reject) => {
    find().then((devices) => {
      const newDevices = devices.map((device) => {
        const removedColon = device.mac.replace(/:/g, "");
        const last2mac = removedColon.substring(removedColon.length - 2);
        const deviceLast2Mac = ConvertBase.hex2dec(last2mac) - 1;
        const newDeviceLast2Mac = ConvertBase.dec2hex(deviceLast2Mac);
        const newDevice = removedColon.slice(0, -2) + newDeviceLast2Mac;
        return { ip: device.ip, original_mac: device.mac, mac: newDevice };
      });
      return resolve(newDevices);
    });
  });
};
