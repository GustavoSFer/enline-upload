const service = require('../service');

const fetchFiles = async (req, res) => {
  const readFile = await service.fetchFiles();
  if (readFile.code) return next(readFile);

  res.status(200).json(readFile);
}

const upload = async (req, res, next) => {
  console.log(req.file)
  console.log('===>>', req.file.originalname)
  const uploadFile = await service.upload(req.file);
  if (uploadFile.code) return next(uploadFile);

  res.status(201).json(uploadFile);
}

module.exports = {
  fetchFiles,
  upload,
}