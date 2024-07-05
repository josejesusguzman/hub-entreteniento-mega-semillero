import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.item = {
      image: 'https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/441049/441049.jpg',
      title: 'Titulo 1',
      description: 'Descripción 1'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).to.contain('Titulo 1');
  });

  it('should toggle visibility', () => {
    expect(component.visibility).to.be.true;
    component.toggleVisibility();
    expect(component.visibility).to.be.false;
    component.toggleVisibility();
    expect(component.visibility).to.be.true;
  });

  it('should return 0', () => {
    const numberTest = 5;
    expect(component.saveFavs(numberTest)).to.equal(numberTest);
  });

});
