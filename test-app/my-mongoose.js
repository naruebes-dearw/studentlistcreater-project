const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  const kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }
  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name);

  const fluffy = new Kitten({ name: 'Fluffy' });
  fluffy.speak();

  // fluffy.save((err, fluffy) => {
  //   if (err) return console.error(err);
  //   fluffy.speak();
  // });

  // silence.save((err, silence) => {
  //   if (err) return console.error(err);
  //   silence.speak();
  // });

  Kitten.find({ name: /len/i }, (err, cat) => {
    if (err) return console.error(err);
    console.log(cat);
  });

  // Kitten.create({ children: [{ name: 'my create' }] }, (error, doc) => {
  //   if (error) return console.error(error);
  //   console.log(doc);
  // })

  const cat = Kitten.create({ name: 'big cat' });
  console.log(cat instanceof Kitten, 'true or false'); // true
  console.log(cat.name, 'nameeeee'); // 'bill@microsoft.com'
});