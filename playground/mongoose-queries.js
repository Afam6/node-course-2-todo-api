const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b6b1490220774404563ba4511';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');;
//   }
//   console.log('Todo By Id', todo);
// }).catch((error) => {
//   console.log(error);
// });

User.findById('5b6ae7033e18902d8b9f27b1').then((user) => {
  if (!user) {
    return console.log('User not found.');;
  }
  console.log('User By Id', JSON.stringify(user, undefined, 2));
}).catch((error) => {
  console.log(error);
});
