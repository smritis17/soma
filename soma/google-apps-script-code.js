// Google Apps Script code for handling email signups
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const timestamp = data.timestamp || new Date().toISOString();
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Invalid email' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the active spreadsheet (replace with your actual spreadsheet ID)
    const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your actual spreadsheet ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Check if email already exists
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    
    for (let i = 1; i < values.length; i++) { // Skip header row
      if (values[i][0] === email) {
        return ContentService
          .createTextOutput(JSON.stringify({ success: false, error: 'Email already exists' }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Add new email to the sheet (Column A: email, Column B: timestamp)
    sheet.appendRow([email, timestamp]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Email added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Email signup service is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Test function to verify the script works
function testEmailSignup() {
  const testData = {
    email: 'test@example.com',
    timestamp: new Date().toISOString()
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log(result.getContent());
}