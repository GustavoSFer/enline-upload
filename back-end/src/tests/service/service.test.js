const { expect } = require('chai');
const Sinon = require('sinon');
const model = require('../../model');
const service = require('../../service');
const { filesDb, addFile } = require('../Mock/mockFile');

describe('Service', function () {
  describe('#FetchFiles', () => {
    afterEach(Sinon.restore);
    it('Deve retornar uma lista quando tem dados no banco', async () => {
      Sinon.stub(model, 'fetchFiles').resolves(filesDb);
      const fileList = await service.fetchFiles();
      expect(fileList).to.deep.eq(filesDb);
    });
    it('Sem informação no banco, deve retornar uma mensagem e o status 404', async () => {
      Sinon.stub(model, 'fetchFiles').resolves(undefined);
      const fileList = await service.fetchFiles();
      expect(fileList.message).to.deep.eq('Sem dados!');
      expect(fileList.code).to.deep.eq(404);
    });
  });

  describe('#Upload', () => {
    afterEach(Sinon.restore);
    it('Cadastrando um novo arquivo', async () => {
      Sinon.stub(model, 'upload').resolves('Cadastrado com sucesso!');
      const fileList = await service.upload(addFile);
      expect(fileList).to.deep.eq('Cadastrado com sucesso!');
    });
  });
  describe('#Deletar', () => {
    afterEach(Sinon.restore);
    it('Removendo um novo arquivo', async () => {
      Sinon.stub(model, 'remove').resolves('Removido com sucesso!');
      const fileList = await service.remove('629b73e4a33062a2c67e80dc');
      expect(fileList).to.deep.eq('Removido com sucesso!');
    });
  });

});