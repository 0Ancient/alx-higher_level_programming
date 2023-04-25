#!/usr/bin/node

'use strict';

// Import any required modules here
const fs = require('fs');

// Define your functions here, if necessary
function writeStringToFile(file_path, string_to_write) {
  try {
    fs.writeFileSync(file_path, string_to_write, 'utf-8');
  } catch (error) {
    console.error(error);
  }
}

// Call your functions here, as necessary
const file_path = process.argv[2];
const string_to_write = process.argv[3];
writeStringToFile(file_path, string_to_write);
