const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const uploadController = require('./controller');

app = express();
PORT = 3001

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({storage})
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json('Okkk')
})

app.post('/upload', upload.single("file"), uploadController.upload);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))