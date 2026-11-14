# CS208 Full Stack Project - Task Manager
- Name: Leonardo Gonzalez
- GitHub: [My GitHub Repository](https://github.com/LeonardoGonzalez1/cs208-12.03-fullstack-leonardogonzalez1)
- Term: Fall 2026

## Project Description
This is my full-stack project for CS208, built using Node.js, Express, and MariaDB (MySQL). I created a Task Manager web application that allows users to manage their daily tasks.

Users can:

- View all existing tasks.
- Create new tasks.
- Edit existing task descriptions.
- Mark tasks as completed.
- Delete tasks.
- The application also prevents users from submitting blank tasks. I used Pug for the webpage templates and CSS to improve the appearance of the application.

# Viewing the Website
To view the website please try to go to the link under forwarded address in Port 3000. If there is no address linked to the Port then do the following:

## Database Setup

## Install the Database
To set up the database, run the install_db.sh script in the setup_scripts directory. This script will install MariaDB and start the server running. You only need to run this script once per Codespace.

```bash
./setup_scripts/install_db.sh
```

## Create the Database Tables
Create the initial database and tables by running the following command:

```bash
sudo mysql -u root -p < ./setup_scripts/create_demo_table.sql
```

This creates the cs208demo database and the todos table, which stores the task descriptions and completion status.

## Install Dependencies
Install the required dependencies using npm:

```bash
npm install
```

## Run the Application
Start the application using the following command:

```bash
npm start
```