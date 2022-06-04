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

const remove = async (req, res) => {
  const { id } = req.params;
  console.log('entramos na parte de deletar')
  const removeFile = await service.remove(id);

  res.status(200).json(removeFile);
};

module.exports = {
  fetchFiles,
  upload,
  remove,
}