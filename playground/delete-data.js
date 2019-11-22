const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connent Mongodb Darabase');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndDelete({ 'completed': false }).then((response) => {
    //     console.log(response)
    // })

    db.collection('Todos').deleteMany({ 'completed': true }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
    })

    db.close();
})