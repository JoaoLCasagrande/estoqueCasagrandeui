import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns = ['id','nomeproduto'];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.list();
  }

}
