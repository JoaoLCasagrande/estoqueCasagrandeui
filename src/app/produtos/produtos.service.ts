import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private http: HttpClient) {}

  list(): Produto[] {
    return [
      { id: 1, nomeproduto: 'Cerveja Brahma Latão'},
      { id: 2, nomeproduto: 'Macarrão'},
      { id: 3, nomeproduto: 'Suco Del Vale' },
      { id: 4, nomeproduto: 'Toddynho'},
      { id: 5, nomeproduto: 'Carne Bovina'},
      { id: 6, nomeproduto: 'Pão'},
    ];
  }
}
