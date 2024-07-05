import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).to.exist;
  });

  it('should return items', (done) => {
    service.getItems().subscribe(items => {
      expect(items.length).to.equal(3);
      expect(items[0].title).to.equal('Título 1');
      done();
    });
  });

});
