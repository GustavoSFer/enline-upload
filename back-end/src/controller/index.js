const upload = (req, res) => {
  console.log(req.file)
  res.send('Arquivo recebido!')
}

module.exports = {
  upload,
}