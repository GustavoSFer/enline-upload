const model = require('../ConnectionMongo');

const fetchFiles = async () => {
  const readFile = await model.find();

  return readFile;
}

const upload = async (file) => {
  const uploadFile = await model.create({ file: file.path });

  return uploadFile;
}

module.exports = {
  fetchFiles,
  upload,
}