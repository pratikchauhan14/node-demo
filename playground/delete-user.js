const MongodbClient = require('mongodb').MongoClient;

MongodbClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
        return console.log('Unable to connect MongoDB Server');
    }
    console.log('Connected MongoDb server port at 27017');

    db.collection('User').deleteOne({'name':"Pratik"}).then(res=>{
        console.log(JSON.stringify(res , undefined , 2));
    })
    db.close();
});