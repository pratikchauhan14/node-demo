const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connent Mongodb Darabase');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').find({ 'completed': true }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    })

    db.close();
})