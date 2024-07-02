const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3001;

app.use('/file', require('./apis/file'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});