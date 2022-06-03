const model = require('../ConnectionMongo');

const upload = async (file) => {
  const uploadFile = await model.create(file);

  return uploadFile;
}

module.exports = {
  upload,
}