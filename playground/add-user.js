const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
        return console.log('Unable to connect MongoDB server.');
    }
    console.log('Connected to MongoDB server port at 27017');

    db.collection('User').insertOne({
        name:"Pratik",
        surname:"Chauhan",
        study:"BA",
        isStudyCompleted:false
    },(err,response)=>{
        if (err){
            return('Unable to add data in User ' , err);
        }
        console.log(JSON.stringify(response,undefined,2))
    });

    db.close();
})