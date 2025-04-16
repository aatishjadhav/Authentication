const fs = require("fs");

try {
  fs.appendFileSync("log.txt", `\n\n [TAG: INFO] New log entry: Data appended at 2:00PM. [PRIORITY: INFO]`);
  console.log("data appended successfuly");
} catch (error) {
  console.error("Error:", error);
}
