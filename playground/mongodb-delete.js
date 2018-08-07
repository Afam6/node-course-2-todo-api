// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Go out'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todos', err);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Visit friend'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todos', err);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todos', err);
  // });

  // db.collection('Users').deleteMany({name: 'Afam'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b681a4908194759d9041d4e')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });



  // client.close();
});
