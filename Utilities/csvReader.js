const fs = require('fs');
const csv = require('csv-parser');

/**
 * Read all rows from a CSV file.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<Array<Object>>} - An array of objects representing the rows in the CSV file.
 */
async function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

module.exports = { readCSV };