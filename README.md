# grocery-website
grocery website 
download the zip file and extract it in any folder
open the cmd or terminal in extracted folder and run this command

npm install --save

//do not close these terminals for reference this is terminal 1

next you should install the mongoDB in your computer, after installing mongoDB go the installed folder usually in C:\Program Files\MongoDB\Server\4.4\bin   then open two cmd or two terminal in the bin folder and run these commands
in the first cmd or terminal run this command

mongod

//do not close these terminals this is terminal 2

in the second cmd or terminal run this command

mongo

//do not close these terminals this is terminal 3

after go to the extracted folder and go to seed folder and open the terminal and run this command 

node product-seeder.js  //this will upload the products into your data base

now open the terminal 1 and run this command

npm start

// do not close this terminal

after running the terminal the website will be opened in

localhost:3000
