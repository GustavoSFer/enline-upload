const service = require('../service');

const upload = async (req, res) => {
  console.log(req.file)
  const uploadFile = await service.upload(req.file);

  res.status(201).json(uploadFile);
}

module.exports = {
  upload,
}