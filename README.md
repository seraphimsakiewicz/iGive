# iGive
Blood donor application where you register with your blood type and get notifications whenever donations are needed.

For this application to work properly, please enter the root, front, and back directory and use the npm i command to download all the dependencies found in the package.json. In addition, please ensure you have Redis installed on your local machine in order to properly store your sessions. Then, in the back directory, please add a .env file and add the PORT the server will be running on, your custom Postgresql databse name, the username that will own the database, and the password for your database. Below is an example: 

PORT=3001
DB_USER=user_name
DB_PASS=password
DB_NAME=db_name
DB_HOST=localhost
SECRET=asdfghjk
