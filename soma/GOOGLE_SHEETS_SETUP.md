# Google Sheets Email Signup Setup

This guide will help you set up Google Sheets integration for your email signup forms.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "SOMA Email Signups" (or any name you prefer)
4. In the first row, add headers:
   - Column A: "Email"
   - Column B: "Timestamp"

## Step 2: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete the default code and paste the code from `google-apps-script.js` in this repository
3. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
   - You can find the spreadsheet ID in the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
4. Save the script (Ctrl+S or Cmd+S)
5. Give it a name like "Email Signup Handler"

## Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Type" and select **Web app**
3. Set the following:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Copy the web app URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 4: Configure Your React App

1. Create a `.env` file in your project root
2. Add your Google Apps Script URL:
   ```
   REACT_APP_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Restart your development server

## Step 5: Test the Integration

1. Start your React app: `npm run dev`
2. Try submitting an email through either signup form
3. Check your Google Sheet to see if the email was added
4. Try submitting the same email again to test duplicate prevention

## Troubleshooting

### Common Issues:

1. **"Script not found" error**: Make sure you deployed the web app correctly and copied the right URL
2. **"Permission denied" error**: Make sure you set "Who has access" to "Anyone"
3. **Emails not appearing in sheet**: Check the spreadsheet ID in your Apps Script code
4. **CORS errors**: This shouldn't happen with Google Apps Script, but if it does, make sure your script is deployed as a web app

### Testing the Script:

You can test your Google Apps Script directly:
1. In the Apps Script editor, select the `testEmailSignup` function
2. Click the "Run" button
3. Check the execution log for any errors

## Security Notes

- The Google Apps Script web app is set to "Anyone" access, which means anyone with the URL can add emails
- This is fine for a public signup form, but be aware of potential spam
- The script includes duplicate email prevention
- Consider adding rate limiting if you expect high traffic

## Next Steps

Once everything is working:
1. Remove the `google-apps-script.js` file from your repository (it's only needed for setup)
2. Remove the `env-example.txt` file
3. Add `.env` to your `.gitignore` file to keep your URL private
4. Deploy your updated React app