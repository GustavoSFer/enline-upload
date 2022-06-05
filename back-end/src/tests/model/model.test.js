const { expect } = require('chai');
const Sinon = require('sinon');
const model = require('../../ConnectionMongo');
const fileModel = require('../../model');
const { filesDb, addFile } = require('../Mock/mockFile');

describe('Model', () => {
  describe('#fetchFiles', () => {
    afterEach(Sinon.restore);
    it('Quando existe dados no DB deve retornar um array com as informações', async () => {
      Sinon.stub(model, 'find').resolves(filesDb);
      const files = await fileModel.fetchFiles();
      expect(files).to.deep.eq(filesDb);
    });
    it('Quando não tem dados no DB deve retornar um array vazio', async () => {
      Sinon.stub(model, 'find').resolves([]);
      const files = await fileModel.fetchFiles();
      expect(files).to.be.empty;
    });
  });

  describe('#Upload', () => {
    afterEach(Sinon.restore);
    it('Cadastrando um arquivo no banco', async () => {
      Sinon.stub(model, 'create').resolves('Cadastrado com sucesso!');
      const files = await fileModel.upload(addFile);
      expect(files).to.deep.eq('Cadastrado com sucesso!');
    });
  });
  describe('#Deletando', () => {
    afterEach(Sinon.restore);
    it('Deletando um arquivo no banco', async () => {
      Sinon.stub(model, 'deleteOne').resolves('Removido com sucesso!');
      const file = await fileModel.remove('629b73e4a33062a2c67e80dc');
      expect(file).to.deep.eq('Removido com sucesso!');
    });
  });
});