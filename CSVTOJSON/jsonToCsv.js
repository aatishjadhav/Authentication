const fs = require("fs");
const path = require("path");
const { Parser } = require("json2csv");

//path to JSON file
const jsonFilePath = path.join(__dirname, "data.json");

//read the JSON file
try {
  const jsonData = fs.readFileSync(jsonFilePath, "utf8");
  const data = JSON.parse(jsonData);

  // create a new csv parser
  const jsv2CsvParser = new Parser();
  const csv = jsv2CsvParser.parse(data);

  //write a csv data to file
  const csvFilePath = path.join(__dirname, "convertedDta.csv");
  fs.writeFileSync(csvFilePath, csv);
  console.log("Conversion Successfull.");
} catch (error) {
  console.error("Error reading or converting to csv", error);
}
