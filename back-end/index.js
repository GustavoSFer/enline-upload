const express = require('express');
const multer = require('multer');
const cors = require('cors');

app = express();
PORT = 3001
app.use(cors());
const upload = multer({dest: "uploads/"})

app.get('/', (req, res) => {
  res.send('Bem vindo')
})

app.post('/upload', upload.single("file"), async (req, res) => {
  res.send('Arquivo recebido!')
})

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))