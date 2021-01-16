# Tabloid - Fullstack

## We have two sprints to implement a production ready Tabloid application.

### Getting Started

1. Pull down this repo

1. Run the two scripts that are in the SQL folder. These will create the Tabloid database and add some test data. The database it creates is identitical to the prototype from the last MVC sprint, except now we're capturing the `FirebaseUserId` in the UserProfile table

1. Everyone on the team should create their own Firebase project. **Each team member** should do the follow steps in the firebase console:

   - Go to [Firebase](https://console.firebase.google.com/u/0/) and add a new project. You can name it whatever you want (Tabloid is a good name)
   - Go to the Authentication tab, click "Set up sign in method", and enable the Username and Password option.
   - Add at least two new users in firebase. Use email addresses that you find in the UserProfile table of your SQL Server database
   - Once firebase creates a UID for these users, copy the UID from firebase and update the `FirebaseUserId` column for the same users in your SQL Server database.
   - Click the Gear icon in the sidebar to go to Project Settings. You'll need the information on this page for the next few steps

1. `cd` into Tabloid-Fullstack/Tabloid-Fullstack and enter `touch appsettings.Local.json`
1. Paste the following into the appsettings.Local.json file:
   `{ "FirebaseProjectId": "YOUR_FIREBASE_PROJECT_ID" }`
1. Replace the placeholder with your firebase project id

1. Open your `client` directory in VsCode. Create a file in the same directory as `.env.local.example` and name it `.env.local`. Paste in this and replace the placeholder with your actual Firebase API key

```
REACT_APP_API_KEY=YOUR_FIREBASE_API_KEY_HERE
```

1. Install your dependencies by running `npm install` from the same directory as your `package.json` file
