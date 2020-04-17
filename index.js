const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
let users = [{name: "загрози інформаційної безпеки",  time: '15.04.2020'} , {name: 'Архитектура безопасности', time: '16.04.2020'}];
 
mongoClient.connect(function(err, client){
      
    const db = client.db("usersdb");
    const collection = db.collection("users");
     
    collection.insertMany(users, function(err, results){
              
        console.log(results);
        client.close();
    });
});
 
   
