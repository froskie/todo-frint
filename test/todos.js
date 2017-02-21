import { expect } from 'chai';
import httpMocks from 'node-mocks-http';

// import task resources
import model from '../server/modules/tasks/model';
import * as controller from '../server/modules/tasks/controller';

// base seed for testing
const seed = { title: 'Lorem Ipsum', description: 'Dolor sit' };

describe('Testing model', function() {
  it('should create a goal', done => {
    const task = model.insert({...seed});
    
    expect(task.title).to.be.equal(seed.title);
    expect(task.description).to.be.equal(seed.description);
    
    done();
  });
  
  it('should list goals', done => {
    const list = model.find();
    expect(list.length).to.be.greaterThan(0);
    done();
  });

  it('should fetch goal', done =>  {
    const task = model.findOne({'title': seed.title});

    expect(task.title).to.be.equal(seed.title);
    expect(task.description).to.be.equal(seed.description);
    
    done();
  });
  
  it('should update goal', done => {
    const NEW_TITLE = 'Some new title';
    
    const before = model.findOne({'title': seed.title});
    before.title = NEW_TITLE;

    model.update(before);

    const after = model.findOne({'title': NEW_TITLE});
    expect(after).to.not.be.null;
    
    done();
  });

  it('should delete goal', done => {    
    const before = model.get(1);
    model.remove(before);
    
    const after = model.get(1);
    expect(after).to.be.null;
    
    done();
  });
});

describe('Testing controllers', function () {

  let req, res;
  
  beforeEach(function() {
    req = httpMocks.createRequest({ headers: { Accept: 'application/json' } });
    res = httpMocks.createResponse();
  });

  it('should create a goal', done => {
    req.body = {...seed};

    controller.save(req, res);
    expect(res.statusCode).to.equal(201);

    const data = JSON.parse(res._getData());
    expect(data.title).to.equals(seed.title);

    done();
  });

  it('should list goals', done => {
    controller.list(req, res);
    expect(res.statusCode).to.equal(200);
    
    const data = res._getData();
    expect(data.length).to.greaterThan(0);

    done();
  });

  it('should fetch goal', done => {
    req.params.id = 2;
    controller.load(req, res);
    expect(res.statusCode).to.equal(200);
    
    const data = res._getData();
    expect(data).to.not.null;

    done();
  });

  it('should throw 404 on invalid ID', done => {
    const d = new Date();
    req.params.id = d.getTime();
    controller.load(req, res);
    
    expect(res.statusCode).to.equal(404);
    
    const data = JSON.parse(res._getData());
    expect(data.error).to.be.true;

    done();
  });

  it('should update goal', done => {
    const NEW_TITLE = 'Consectetur adipisicing'
    req.body = {...seed, title: NEW_TITLE};
    req.params.id = 2;
    controller.update(req, res);
    expect(res.statusCode).to.equal(201);

    const data = JSON.parse(res._getData());
    expect(data.title).to.equals(NEW_TITLE);

    done();
  });

  it('should delete goal', done => {
    req.params.id = 2;
    controller.remove(req, res);
    expect(res.statusCode).to.equal(200);

    controller.load(req, res);
    expect(res.statusCode).to.equal(404);

    done();
  });
});