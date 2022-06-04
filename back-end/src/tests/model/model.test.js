const { expect } = require('chai');
const Sinon = require('sinon');
const model = require('../../ConnectionMongo');
const fileModel = require('../../model');
const { filesDb } = require('../Mock/mockFile');

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
});