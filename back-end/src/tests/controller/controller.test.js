const { expect } = require('chai');
const Sinon = require('sinon');
const { filesDb, addFile } = require('../Mock/mockFile');
const service = require('../../service');
const controller = require('../../controller');

describe('Controller', function () {
  const response = {};
  const request = {};
  before(function () {
    request.body = { };
    response.status = Sinon.stub().returns(response);
    response.json = Sinon.stub().returns();
  });

  describe('#fetchFiles', function () {
    it('Quando existe dados - Deve retornar o status 200', async () => {
      Sinon.stub(service, 'fetchFiles').resolves(filesDb);
      await controller.fetchFiles(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      Sinon.restore();
    });
    // it('Quando não existe dados deve retornar o status 404', async () => {
    //   Sinon.stub(service, 'fetchFiles').resolves({ code: 404, message: 'Sem dados!'});
    //   await controller.fetchFiles(request, response);
    //   expect(response).to.be.equal(404);
    // });  
  });

  describe('#Upload', function () {
    it('Cadastrando novo arquivo - Deve retornar o status 201', async () => {
      Sinon.stub(service, 'upload').resolves('Cadastrado com sucesso!');
      await controller.upload(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
      Sinon.restore();
    }); 
  });

  describe('#Deletando', function () {
    it('Removendo um arquivo - Deve retornar o status 200', async () => {
      Sinon.stub(service, 'remove').resolves('Removido com sucesso!');
      request.params = '629b73e4a33062a2c67e80dc';
      await controller.remove(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      Sinon.restore();
    }); 
  });

});