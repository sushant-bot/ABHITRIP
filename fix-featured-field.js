#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Path to the trips data file
const tripsDataPath = path.join(__dirname, 'lib', 'trips-data.ts');

// Read the file
const content = fs.readFileSync(tripsDataPath, 'utf8');

// Add is_featured: false to all trip objects that don't already have it
const updatedContent = content.replace(
  /category: "(one-day|two-day)",(\s+)itinerary:/g,
  'category: "$1",\n    is_featured: false,$2itinerary:'
);

// Write the updated content back
fs.writeFileSync(tripsDataPath, updatedContent, 'utf8');

console.log('✅ Added is_featured: false to all trips without the field');
