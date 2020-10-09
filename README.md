# My portfolio site

To build out my personal portfolio site www.jamiebarrett.co.uk I have utilised the MERN stack. This
includes authentication and a blog section, allowing me to create blog posts in a convenient manner.
This repository include both the frontend and backend elements, you will also need to assign a number
of environment variables to use this app.

## Requirements
You will need to have Node.js installed to run this project, please visit the node site for install
instructions: https://nodejs.org/en/download/

## Installation
Once you have NPM installed you can run the following shell commands to install this project, two
npm:
```
git clone https://github.com/jb-0/site-react.git
cd site-react
npm install
cd frontend
npm install
```

## Environment variables
For assigning environment variables in dev I opted to use https://www.npmjs.com/package/dotenv,
however you can use your preferred approach to assigning environment variables.
**DEV_DB_PATH** - The path to your development mongo instance, for example mongodb://127.0.0.1:27017/blogs
**JWT_TOKEN** - A secret used for JWT generation (https://www.npmjs.com/package/jsonwebtoken)

I've opted to use https://mailtrap.io/ as a safe way of capturing contact form input. The following
enviornment variables must be set for this to work.
**MAILTRAP_USER** - SMTP Mailtrap Username
**MAILTRAP_PASS** - SMTP Mailtrap Password
**MAILTRAP_TARGET** - The intended email address of the recipient of the mail

## Running the application
To run the app you can execute the following commands in the project root directory:
```
node app.js
cd frontend
npm start

```

Using your preferred web browser you can navigate to localhost:3000 to view and use the app.
