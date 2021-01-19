# theScore "the Rush" Interview Challenge
At theScore, we are always looking for intelligent, resourceful, full-stack developers to join our growing team. To help us evaluate new talent, we have created this take-home interview question. This question should take you no more than a few hours.

**All candidates must complete this before the possibility of an in-person interview. During the in-person interview, your submitted project will be used as the base for further extensions.**

### Why a take-home challenge?
In-person coding interviews can be stressful and can hide some people's full potential. A take-home gives you a chance work in a less stressful environment and showcase your talent.

We want you to be at your best and most comfortable.

### A bit about our tech stack
As outlined in our job description, you will come across technologies which include a server-side web framework (like Elixir/Phoenix, Ruby on Rails or a modern Javascript framework) and a front-end Javascript framework (like ReactJS)

### Challenge Background
We have sets of records representing football players' rushing statistics. All records have the following attributes:
* `Player` (Player's name)
* `Team` (Player's team abbreviation)
* `Pos` (Player's postion)
* `Att/G` (Rushing Attempts Per Game Average)
* `Att` (Rushing Attempts)
* `Yds` (Total Rushing Yards)
* `Avg` (Rushing Average Yards Per Attempt)
* `Yds/G` (Rushing Yards Per Game)
* `TD` (Total Rushing Touchdowns)
* `Lng` (Longest Rush -- a `T` represents a touchdown occurred)
* `1st` (Rushing First Downs)
* `1st%` (Rushing First Down Percentage)
* `20+` (Rushing 20+ Yards Each)
* `40+` (Rushing 40+ Yards Each)
* `FUM` (Rushing Fumbles)

In this repo is a sample data file [`rushing.json`](/api/rushing.json).

##### Challenge Requirements
1. Create a web app. This must be able to do the following steps
    1. Create a webpage which displays a table with the contents of [`rushing.json`](/api/rushing.json)
    2. The user should be able to sort the players by _Total Rushing Yards_, _Longest Rush_ and _Total Rushing Touchdowns_
    3. The user should be able to filter by the player's name
    4. The user should be able to download the sorted data as a CSV, as well as a filtered subset
    
2. The system should be able to potentially support larger sets of data on the order of 10k records.

3. Update the section `Installation and running this solution` in the README file explaining how to run your code

### Submitting a solution
1. Download this repo
2. Complete the problem outlined in the `Requirements` section
3. In your personal public GitHub repo, create a new public repo with this implementation
4. Provide this link to your contact at theScore

We will evaluate you on your ability to solve the problem defined in the requirements section as well as your choice of frameworks, and general coding style.

### Help
If you have any questions regarding requirements, do not hesitate to email your contact at theScore for clarification.

### Installation and running this solution
So I'll start with a brief overview of what is in my solution. The front end is very simple because that is a weakness of mine. The backend is node express with a mongoDB database. For the installation you will need have [`node.js`](https://nodejs.org/en/download/) and [`mongodb`](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/). I would also recommend a GUI for MongoDB as you will need to create a database. I prefer [`Robo3T`](https://robomongo.org/download) personally but any GUI should work. 

#### Step 1: Setting up the backend
1. Go to the [`nodejs`](https://nodejs.org/en/download), download and install node. 
2. `cd` into the api folder
3. run `npm install`

After that the backend should be set up. Wait to run the app until after the DB is set up

#### Step 2: Setting up the DB
You need to install mongodb locally for the current version of the development environment. Here are the steps:
1. In your terminal, run the command `brew tap mongodb/brew`.
2. Run the command `brew install mongodb-community@4.2`
3. You can then run MongoDB in 2 ways:
⋅⋅* as a service with the command `brew services start mongodb-community@4.2`
⋅⋅* or as a background process with the command `mongod --config /usr/local/etc/mongod.conf --fork`
4. Next you need download Robo 3T. This is a GUI for mongodb that will make everything easy to visualize. To do this, 
go to [this](https://robomongo.org/download) link. You should just download Robo 3T, not Studio 3T.
5. In Robo 3T, Create a new connetion. The address is 'localhost' and the port is '27017'. If you already have a connection for another service like the 
alert service, skip this step.
6. In this connection, create and new database named 'rushers'.

#### Step 3: Running the App
1. Take the contents of the [`.env.example`](/api/.env.example) and copy it to a `.env` file (you will hav to create this file). Make sure that the value for `RUSHER_DB` matches the location of your local DB.
2. in the api folder, run the command `npm start`. This will start the app.
3. In a program like Postman or any way you are comfortable, hit the api endpoint `localhost:9000/setup/`. This route takes the contents of the `rushing.json` and adds everything to the database. 
4. Open the `mainPage.html` file in any browser. From their you should be able to check the functionality of the app. 
