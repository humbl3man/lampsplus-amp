const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9999;

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`lamps plus AMP running server on ${PORT}`);
});
