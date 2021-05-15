import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const rooms = [
  {
    number: "501",
  },
  {
    number: "502",
  },
  {
    number: "503",
  },
  {
    number: "504",
  },
  {
    number: "505",
  },
  {
    number: "506",
  },
  {
    number: "507",
  },
  {
    number: "508",
  },
  {
    number: "509",
  },
  {
    number: "510",
  },
  {
    number: "511",
  },
  {
    number: "512",
  },
  {
    number: "513",
  },
  {
    number: "601",
  },
  {
    number: "602",
  },
  {
    number: "603",
  },
  {
    number: "604",
  },
  {
    number: "605",
  },
  {
    number: "606",
  },
  {
    number: "607",
  },
  {
    number: "608",
  },
  {
    number: "609",
  },
  {
    number: "610",
  },
  {
    number: "611",
  },
  {
    number: "612",
  },
  {
    number: "613",
  },
  {
    number: "701",
  },
  {
    number: "702",
  },
  {
    number: "703",
  },
  {
    number: "704",
  },
  {
    number: "705",
  },
  {
    number: "706",
  },
  {
    number: "707",
  },
  {
    number: "708",
  },
  {
    number: "709",
  },
  {
    number: "710",
  },
  {
    number: "711",
  },
  {
    number: "712",
  },
  {
    number: "713",
  },
  {
    number: "801",
  },
  {
    number: "802",
  },
  {
    number: "803",
  },
  {
    number: "804",
  },
  {
    number: "805",
  },
  {
    number: "806",
  },
  {
    number: "807",
  },
  {
    number: "808",
  },
  {
    number: "809",
  },
  {
    number: "810",
  },
  {
    number: "811",
  },
  {
    number: "812",
  },
  {
    number: "813",
  },
  {
    number: "901",
  },
  {
    number: "902",
  },
  {
    number: "903",
  },
  {
    number: "904",
  },
  {
    number: "905",
  },
  {
    number: "906",
  },
  {
    number: "907",
  },
  {
    number: "908",
  },
  {
    number: "909",
  },
  {
    number: "910",
  },
  {
    number: "911",
  },
  {
    number: "912",
  },
  {
    number: "913",
  },
  {
    number: "1001",
  },
  {
    number: "1002",
  },
  {
    number: "1003",
  },
  {
    number: "1004",
  },
  {
    number: "1005",
  },
  {
    number: "1006",
  },
  {
    number: "1007",
  },
  {
    number: "1008",
  },
  {
    number: "1009",
  },
  {
    number: "1010",
  },
  {
    number: "1011",
  },
  {
    number: "1012",
  },
  {
    number: "1013",
  },
  {
    number: "1101",
  },
  {
    number: "1102",
  },
  {
    number: "1103",
  },
  {
    number: "1104",
  },
  {
    number: "1105",
  },
  {
    number: "1106",
  },
  {
    number: "1107",
  },
  {
    number: "1108",
  },
  {
    number: "1109",
  },
  {
    number: "1110",
  },
  {
    number: "1111",
  },
  {
    number: "1112",
  },
  {
    number: "1113",
  },
  {
    number: "1201",
  },
  {
    number: "1202",
  },
  {
    number: "1203",
  },
  {
    number: "1204",
  },
  {
    number: "1205",
  },
  {
    number: "1206",
  },
  {
    number: "1207",
  },
  {
    number: "1208",
  },
  {
    number: "1209",
  },
  {
    number: "1210",
  },
  {
    number: "1211",
  },
  {
    number: "1212",
  },
  {
    number: "1213",
  },
  {
    number: "1301",
  },
  {
    number: "1302",
  },
  {
    number: "1303",
  },
  {
    number: "1304",
  },
  {
    number: "1305",
  },
  {
    number: "1306",
  },
  {
    number: "1307",
  },
  {
    number: "1308",
  },
  {
    number: "1309",
  },
  {
    number: "1310",
  },
  {
    number: "1311",
  },
  {
    number: "1312",
  },
  {
    number: "1313",
  },
  {
    number: "1401",
  },
  {
    number: "1402",
  },
  {
    number: "1403",
  },
  {
    number: "1404",
  },
  {
    number: "1405",
  },
  {
    number: "1406",
  },
  {
    number: "1407",
  },
  {
    number: "1408",
  },
  {
    number: "1409",
  },
  {
    number: "1410",
  },
  {
    number: "1411",
  },
  {
    number: "1412",
  },
  {
    number: "1413",
  },
  {
    number: "1501",
  },
  {
    number: "1502",
  },
  {
    number: "1503",
  },
  {
    number: "1504",
  },
  {
    number: "1505",
  },
  {
    number: "1506",
  },
  {
    number: "1507",
  },
  {
    number: "1508",
  },
  {
    number: "1509",
  },
  {
    number: "1510",
  },
  {
    number: "1511",
  },
  {
    number: "1512",
  },
  {
    number: "1513",
  },
  {
    number: "1601",
  },
  {
    number: "1602",
  },
  {
    number: "1603",
  },
  {
    number: "1604",
  },
  {
    number: "1605",
  },
  {
    number: "1606",
  },
  {
    number: "1607",
  },
  {
    number: "1608",
  },
  {
    number: "1609",
  },
  {
    number: "1610",
  },
  {
    number: "1611",
  },
  {
    number: "1612",
  },
  {
    number: "1613",
  },
  {
    number: "1701",
  },
  {
    number: "1702",
  },
  {
    number: "1703",
  },
  {
    number: "1704",
  },
  {
    number: "1705",
  },
  {
    number: "1706",
  },
  {
    number: "1707",
  },
  {
    number: "1708",
  },
  {
    number: "1709",
  },
  {
    number: "1710",
  },
  {
    number: "1711",
  },
  {
    number: "1712",
  },
  {
    number: "1713",
  },
  {
    number: "1714",
  },
  {
    number: "1801",
  },
  {
    number: "1802",
  },
  {
    number: "1803",
  },
  {
    number: "1804",
  },
  {
    number: "1805",
  },
  {
    number: "1806",
  },
  {
    number: "1807",
  },
  {
    number: "1808",
  },
  {
    number: "1809",
  },
  {
    number: "1810",
  },
  {
    number: "1811",
  },
  {
    number: "1812",
  },
  {
    number: "1813",
  },
  {
    number: "1814",
  },
  {
    number: "1901",
  },
  {
    number: "1902",
  },
  {
    number: "1903",
  },
  {
    number: "1904",
  },
  {
    number: "1905",
  },
  {
    number: "1906",
  },
  {
    number: "1907",
  },
  {
    number: "1908",
  },
  {
    number: "1909",
  },
  {
    number: "1910",
  },
  {
    number: "1911",
  },
  {
    number: "1912",
  },
  {
    number: "1913",
  },
  {
    number: "1914",
  },
  {
    number: "1915",
  },
  {
    number: "2001",
  },
  {
    number: "2002",
  },
  {
    number: "2003",
  },
  {
    number: "2004",
  },
  {
    number: "2005",
  },
  {
    number: "2006",
  },
  {
    number: "2007",
  },
  {
    number: "2008",
  },
  {
    number: "2009",
  },
  {
    number: "2010",
  },
  {
    number: "2011",
  },
  {
    number: "2012",
  },
  {
    number: "2013",
  },
  {
    number: "2014",
  },
  {
    number: "2015",
  },
  {
    number: "2101",
  },
  {
    number: "2102",
  },
  {
    number: "2103",
  },
  {
    number: "2104",
  },
  {
    number: "2105",
  },
  {
    number: "2106",
  },
  {
    number: "2107",
  },
  {
    number: "2108",
  },
  {
    number: "2109",
  },
  {
    number: "2110",
  },
  {
    number: "2111",
  },
  {
    number: "2112",
  },
  {
    number: "2113",
  },
  {
    number: "2114",
  },
  {
    number: "2115",
  },
  {
    number: "2201",
  },
  {
    number: "2202",
  },
  {
    number: "2203",
  },
  {
    number: "2204",
  },
  {
    number: "2205",
  },
  {
    number: "2206",
  },
  {
    number: "2207",
  },
  {
    number: "2208",
  },
  {
    number: "2209",
  },
  {
    number: "2210",
  },
  {
    number: "2211",
  },
  {
    number: "2212",
  },
  {
    number: "2213",
  },
  {
    number: "2214",
  },
  {
    number: "2215",
  },
  {
    number: "2301",
  },
  {
    number: "2302",
  },
  {
    number: "2303",
  },
  {
    number: "2304",
  },
  {
    number: "2305",
  },
  {
    number: "2306",
  },
  {
    number: "2307",
  },
  {
    number: "2308",
  },
  {
    number: "2309",
  },
  {
    number: "2310",
  },
  {
    number: "2311",
  },
  {
    number: "2312",
  },
  {
    number: "2313",
  },
  {
    number: "2314",
  },
  {
    number: "2315",
  },
  {
    number: "2401",
  },
  {
    number: "2402",
  },
  {
    number: "2403",
  },
  {
    number: "2404",
  },
  {
    number: "2405",
  },
  {
    number: "2406",
  },
  {
    number: "2407",
  },
  {
    number: "2408",
  },
  {
    number: "2409",
  },
  {
    number: "2410",
  },
  {
    number: "2411",
  },
  {
    number: "2412",
  },
  {
    number: "2413",
  },
  {
    number: "2414",
  },
  {
    number: "2415",
  },
  {
    number: "2501",
  },
  {
    number: "2502",
  },
  {
    number: "2503",
  },
  {
    number: "2504",
  },
  {
    number: "2505",
  },
  {
    number: "2506",
  },
  {
    number: "2507",
  },
  {
    number: "2508",
  },
  {
    number: "2509",
  },
  {
    number: "2510",
  },
  {
    number: "2511",
  },
  {
    number: "2512",
  },
  {
    number: "2513",
  },
  {
    number: "2514",
  },
  {
    number: "2515",
  },
  {
    number: "2601",
  },
  {
    number: "2602",
  },
  {
    number: "2603",
  },
  {
    number: "2604",
  },
  {
    number: "2605",
  },
  {
    number: "2606",
  },
  {
    number: "2607",
  },
  {
    number: "2608",
  },
  {
    number: "2609",
  },
  {
    number: "2610",
  },
  {
    number: "2611",
  },
  {
    number: "2612",
  },
  {
    number: "2613",
  },
  {
    number: "2614",
  },
  {
    number: "2615",
  },
];

async function main() {
  for (const r of rooms) {
    const room = await prisma.room.create({
      data: r,
    });
    console.log(`Created room with id: ${room.id}`);
  }

  console.log({ rooms });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
