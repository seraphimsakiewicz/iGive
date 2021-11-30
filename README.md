# iGive
Blood donor application where you register with your blood type and get notifications whenever donations are needed.

For this application to work properly, please enter the root, front, and back directory and use the npm i command to download all the dependencies found in the package.json. Then, in the back directory, please add a .env file and add your custom Postgresql databse name, username that will own the database, and the password for your database. Below is an example: In addition, please ensure you have Redis installed on your local machine.

PORT=3001
DB_USER=user_name
DB_PASS=password
DB_NAME=db_name
DB_HOST=localhost
SECRET=asdfghjk
