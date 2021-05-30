import fs from "fs";
import parser from "xml2json";
import formatXml from "xml-formatter";

export const generateDeployFile = (device: any) => {
  return new Promise(async (resolve, reject) => {
    const templateFile = fs.readFileSync("./src/template/template.xml");
    const template = JSON.parse(
      parser.toJson(templateFile, { reversible: true })
    );
    // Load template to new variable
    let newXML: any = template;
    newXML["gs_provision"]["mac"] = { $t: device.mac_address };
    newXML["gs_provision"]["config"]["P148"] = {
      $t: "GS-" + device.room?.number,
    };
    newXML["gs_provision"]["config"]["P35"] = {
      $t: "71" + device.room?.number,
    };
    newXML["gs_provision"]["config"]["P36"] = {
      $t: "71" + device.room?.number,
    };
    const stringified = JSON.stringify(newXML);
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

    return resolve("Done");
  });
};
