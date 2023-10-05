import { ProdutoSeletor } from './../../shared/model/seletor/produto.seletor';
import { ProdutoService } from './../../shared/service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss']
})
export class ProdutoListagemComponent implements OnInit {

  //Lista de produtos que fará o binding com a tabela na view (html)
  public produtos: Array<Produto> = new Array();
  public seletor: ProdutoSeletor = new ProdutoSeletor();

  constructor(private produtoService: ProdutoService){
  }

  ngOnInit(): void {
    //Similar ao método main() do Java
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.produtoService.listarTodos().subscribe(
      resultado => {
        this.produtos = resultado;
      },
      erro => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

  editar(id: number){
    //TODO: Implementar a edição do produto
    console.log('Editando o produto de id: ', id);
  }
}
