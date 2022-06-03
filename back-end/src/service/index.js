const model = require('../model');

const fetchFiles = async () => {
  const readFile = await model.fetchFiles();
  if (!readFile) return { code: 404, message: 'Sem dados!'}

  return readFile;
}

const upload = async (file) => {
  if (!file) return { code: 400, message: 'Sem Arquivo para fazer o upload' }

  const uploadFile = await model.upload(file);

  return uploadFile;
}

module.exports = {
  fetchFiles,
  upload,
}