## Home Assistant Tray Application

This is a really basic example to use Electron https://www.electronjs.org/ to create a simple native OS system tray application. 

### Requirements
- Windows/MacOS/Linux
- Node 20+

### Getting Started
1. Copy the project by cloning or downloading the repositories contents
2. Run `npm install` in a terminal inside of the project
3. Run `cp .env.example .env` in the terminal
4. Open the `.env` file and populate `HOME_ASSISTANT_BASE_URL` and `HOME_ASSISTANT_TOKEN` with a long-lived token (created in the security section of your user account)
5. Run `npm run start` to start the tray application in development mode
6. Run `npm run make` to build the tray application to a final executable which you can run on startup.
