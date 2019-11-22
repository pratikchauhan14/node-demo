const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
        return console.log('Unable to Connect User ', err)
    }
    db.collection('User').find({"name":"Pratik"}).toArray().then(res=>{
        console.log(res)
    });

    db.close();
})