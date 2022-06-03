const model = require('../model');

const upload = async (file) => {
  if (!file) return { error: 400, message: 'Sem Arquivo para fazer o upload' }

  const uploadFile = await model.upload(file);

  return uploadFile;
}

module.exports = {
  upload,
}