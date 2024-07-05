import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Item {
  image: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsSubject = new BehaviorSubject<Item[]>([
    { image: 'https://via.placeholder.com/50', title: 'Título 1', description: 'Descripción 1' },
    { image: 'https://via.placeholder.com/50', title: 'Título 2', description: 'Descripción 2' },
    { image: 'https://via.placeholder.com/50', title: 'Título 3', description: 'Descripción 3' }
  ]);

  getItems(): Observable<Item[]> {
    return this.itemsSubject.asObservable();
  }
}