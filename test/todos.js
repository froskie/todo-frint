import { expect } from 'chai';
// import models
import model from '../server/modules/tasks/model';

describe('Testing model', function() {
  const seed = { title: 'Lorem Ipsum', description: 'Dolor sit' };
  it('should create a goal', (done) => {
    const task = model.insert(seed);
    
    expect(task.title).to.be.equal(seed.title);
    expect(task.description).to.be.equal(seed.description);
    
    done();
  });
  
  it('should list goals', (done) => {
    const list = model.find();
    expect(list.length).to.be.greaterThan(0);
    done();
  });

  it('should fetch goal', (done) =>  {
    const task = model.findOne({'title': seed.title});

    expect(task.title).to.be.equal(seed.title);
    expect(task.description).to.be.equal(seed.description);
    
    done();
  });
  
  it('update goal', (done) => {
    const NEW_TITLE = 'Some new title';
    
    const before = model.findOne({'title': seed.title});
    before.title = NEW_TITLE;

    model.update(before);

    const after = model.findOne({'title': NEW_TITLE});
    expect(after).to.not.be.null;
    
    done();
  });
});