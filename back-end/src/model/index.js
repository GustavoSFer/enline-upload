const model = require('../ConnectionMongo');

const fetchFiles = async () => {
  const readFile = await model.find();

  return readFile;
}

const upload = async (file) => {
  await model.create({ name: file.originalname, file: file.path });
  
  return 'Cadastrado com sucesso!';
}

const remove = async (id) => {
  await model.deleteOne({ _id: id });

  return 'Removido com sucesso!';
};

module.exports = {
  fetchFiles,
  upload,
  remove,
}