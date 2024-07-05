import { Component, Input } from '@angular/core';

export interface Item {
  image: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item: any;

  visibility: boolean = true;

  toggleVisibility() {
    this.visibility = !this.visibility;
  }

  saveFavs(id: number) {
    return id;
  }
}
