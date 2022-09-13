import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../core/model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[] = [
    {id: 1, nomecategoria: 'Produto de Limpeza'},
    {id: 2, nomecategoria: 'Perecíveis'},
    {id: 3, nomecategoria: 'Carnes'},
    {id: 4, nomecategoria: 'Bebidas'},
    {id: 5, nomecategoria: 'Não Perecíveis'},
    {id: 6, nomecategoria: 'Laticínios'}
  ];
  displayedColumns = ['id','nomecategoria'];

  constructor() { }

  ngOnInit() {
  }

}
