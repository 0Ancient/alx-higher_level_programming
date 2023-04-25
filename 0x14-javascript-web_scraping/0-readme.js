#!/usr/bin/node

'use strict';

// Import any required modules here
const fs = require('fs');

// Define your functions here, if necessary
function readAndPrintFile(file_path) {
  try {
    const file_content = fs.readFileSync(file_path, 'utf-8');
    console.log(file_content);
  } catch (error) {
    console.error(error);
  }
}

// Call your functions here, as necessary
const file_path = process.argv[2];
readAndPrintFile(file_path);
