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

To set up the database, run the `install_db.sh` script. This script will install
MariaDB and start the server running. You only need to run this script once per
Codespace.


```bash
./setup_scripts/install_db.sh
```

Use the following for questions that the script asks:

- Switch to unix_socket authentication [Y/n] n
- Change the root password? [Y/n] Y
  - Set the password to 12345
- Remove anonymous users? [Y/n] Y
- Disallow root login remotely? [Y/n] Y
- Remove test database and access to it? [Y/n] Y
- Reload privilege tables now? [Y/n] Y

Test to make sure the db is running:

```bash
sudo service mariadb status
```

You should see something similar to what is shown below.
```
* /usr/bin/mariadb-admin  Ver 10.0 Distrib 10.11.13-MariaDB, for debian-linux-gnu on x86_64
Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Server version          10.11.13-MariaDB-0ubuntu0.24.04.1
Protocol version        10
Connection              Localhost via UNIX socket
UNIX socket             /run/mysqld/mysqld.sock
Uptime:                 10 min 23 sec

Threads: 1  Questions: 90  Slow queries: 0  Opens: 33  Open tables: 26  Queries per second avg: 0.144
```

Create the initial tables:

```bash
sudo mysql -u root -p < ./setup_scripts/create_demo_table.sql
```

Refer to the create_demo_table.sql file for details about the table and its fields.


Check to make sure the tables were created correctly
```bash
mysql -u root -p -e 'show databases;'
```

```
Enter password: 12345
+--------------------+
| Database           |
+--------------------+
| cs208demo          |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```


# Node.js Setup

To get debugging, run the command below in a [debug terminal](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal) instead of a regular terminal.

Run the following commands to set up the project:

```bash
npm install
npm start
```