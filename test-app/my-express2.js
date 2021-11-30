const app = require('express')();

var birds = require('./my-express')

// ...

app.use('/birds', birds)

app.listen(5000, () => {
  console.log('listening port 5000');
})