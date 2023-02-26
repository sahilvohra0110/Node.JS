// Firstly i init the npm in same folder
// to initilize the node package manager= npm init -y


//then i installed express
// to install any package= npm install express or npm i express

//then i am working on server.js file

const express = require("express"); // we are importing the express services in our server

const app = express(); //we are making an app which contains facilities of express
const port = 3001; // we are making our own local port
const exp= require("./linktoserver1") // we require file which contains data from other ffile

app.get("/home", (req, res) => {
//   res.json({
//     message: "get request running for our server",
//     login: true,
//     data:exp,
//   });
// }); // we can also send the same in above way

res.status(201).json({exp:exp})})
// other way to do it is below

//res.send("server running")}) // it is only showing server running with no customized data

app.listen(port, () => {
  console.log("Server has been started on port 3000");
});

//if we send multiple request then it'll show the error that can't send multiple request in terminal..

//to set status code.. we need to firstly set the status code to either 200 or 201, then we need to add .json and whatever msg we need to send.. then we need to run and check in postman.
