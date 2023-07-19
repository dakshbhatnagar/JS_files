const fs = require('fs');
const csv = require('fast-csv');

async function ScrapeData() {
  // Define headers for the CSV file
  var headers = ['Job Title', 'Job Location', 'Rec ID', 'Function', 'Department', 'Posted'];
  var data = [];
  data.push(headers);

  console.log('Starting Scraping...')

  // Iterate through the pages
  for (var i = 0; i <= 2; i++) {
    var url = "https://jobs.natwestgroup.com/search/technology/jobs/in/country/india?page=" + i + "#";

    // Fetch the URL content
    var response = await fetch(url);

    // Check the response status
    if (response.status === 200) {
      var content = await response.text();

      // Extract data using regular expressions
      var titles = extractValues(content, '<div class="job__title">([^<]+)</div>');
      var referenceids = extractValues(content, '<div class="job__reference">([^<]+)</div>');
      var locations = extractValues(content, '<div class="job__location">([^<]+)</div>');
      var job_families = extractValues(content, '<span class="job__family">([^<]+)</span>');
      var departments = 'Technology';
      var posted = extractValues(content, '<div class="job__posted">([^<]+)</div>');

      // Store data in an array
      for (var j = 0; j < titles.length; j++) {
        var rowData = [titles[j], locations[j], referenceids[j], job_families[j], departments, posted[j]];
        data.push(rowData);
      }

      console.log("Page " + (i + 1) + " Scraped");
    } else {
      console.log("Invalid Response for Page " + (i + 1));
    }
  }

  // Save data to CSV file
  saveToCSV(data, 'data.csv');
}

// Helper Function to fetch the text values from the response content using regular expressions
function extractValues(content, regexPattern) {
  var regex = new RegExp(regexPattern, "g");
  var matches = [];
  var match;

  while (match = regex.exec(content)) {
    matches.push(match[1]);
  }

  return matches;
}

// Helper Function to save the CSV file in the working directory/folder
function saveToCSV(data, filename) {
  // Write data to CSV file
  csv.writeToPath(filename, data)
    .on('error', (error) => {
      console.error('Error writing CSV:', error);
    })
    .on('finish', () => {
      console.log('CSV file saved:', filename);
    });
}

// Start the scraping process
ScrapeData();
