import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items = [
    {
      image: 'https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/441049/441049.jpg',
      title: 'Titulo 1',
      description: 'Descripción 1'
    },
    {
      image: 'https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/441049/441049.jpg',
      title: 'Titulo 2',
      description: 'Descripción 2'
    },
    {
      image: 'https://cl2.buscafs.com/www.tomatazos.com/public/uploads/images/441049/441049.jpg',
      title: 'Titulo 3',
      description: 'Descripción 3'
    }
  ]
}
