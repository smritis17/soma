# GitHub Integration Setup for Email Signups

This guide will help you set up the GitHub integration to automatically add email signups to a Google Sheet.

## Prerequisites

1. A GitHub repository
2. A Google Cloud Project with Google Sheets API enabled
3. A Google Service Account

## Setup Steps

### 1. Create Google Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API
4. Go to "APIs & Services" > "Credentials"
5. Click "Create Credentials" > "Service Account"
6. Download the JSON key file

### 2. Create Google Sheet

1. Create a new Google Sheet
2. Share it with your service account email (found in the JSON file)
3. Note the Spreadsheet ID from the URL

### 3. Set up GitHub Secrets

In your GitHub repository, go to Settings > Secrets and variables > Actions, and add:

- `GOOGLE_SHEETS_CREDENTIALS`: The entire content of your service account JSON file
- `SPREADSHEET_ID`: Your Google Sheet ID
- `REACT_APP_GITHUB_TOKEN`: A GitHub Personal Access Token with `repo` permissions

### 4. Update the Email Form

In `src/components/PreOrderSection.jsx`, update the fetch URL:

```javascript
const response = await fetch('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/dispatches', {
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual GitHub username and repository name.

### 5. Environment Variables

Create a `.env` file in your project root:

```
REACT_APP_GITHUB_TOKEN=your_github_token_here
```

## How It Works

1. User submits email on the website
2. Frontend sends a repository dispatch event to GitHub
3. GitHub Actions workflow triggers
4. Python script adds the email to Google Sheets
5. User sees success/error message

## Testing

1. Deploy your changes
2. Submit a test email
3. Check your Google Sheet for the new entry
4. Check GitHub Actions tab for workflow execution

## Troubleshooting

- Ensure all secrets are properly set
- Check GitHub Actions logs for errors
- Verify Google Sheets API is enabled
- Confirm service account has proper permissions 