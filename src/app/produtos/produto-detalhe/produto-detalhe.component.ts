import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/service/produto.service';
import { Fabricante } from './../../shared/model/fabricante';
import { FabricanteService } from './../../shared/service/fabricante.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  public idProduto: number;
  public produto: Produto = new Produto();
  public fabricantes: Fabricante[] = [];
  public dataMinima: string;
  public dataMaxima: string;

  constructor(private produtoService: ProdutoService,
              private fabricanteService: FabricanteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataMinima = "2023-10-02";
    this.dataMaxima = "2023-10-25";

    this.route.params.subscribe(params => {
      this.idProduto = params['id'];
      if(this.idProduto){
        this.buscarProduto();
      }
    });

    this.fabricanteService.listarTodos().subscribe(
      resultado => {
        this.fabricantes = resultado;
      },
      erro => {
        Swal.fire("Erro", "Erro ao buscar os fabricantes: " + erro, 'error');
      }
    );
  }

  buscarProduto(){
    this.produtoService.pesquisarPorId(this.idProduto).subscribe(
      resultado => {
        this.produto = resultado;
      },
      erro => {
        Swal.fire("Erro", "Erro ao buscar o produto com o id ("
        + this.idProduto + ") : " + erro, 'error')
      }
    )
  }


  salvar(){
    if(this.idProduto){
      //EDIÇÃO!!!!!!!!!!!!!!!
      this.produtoService.atualizar(this.produto).subscribe(
        sucesso => {
          Swal.fire("Sucesso", "Produto atualizado!", 'success');
          this.produto = new Produto();
        },
        erro => {
          Swal.fire("Erro", "Erro ao atualizar o produto: " + erro, 'error');
        }
      );
    }else{
      //CADASTRO!!!!!!!!!!!!!!!!
      this.produtoService.salvar(this.produto).subscribe(
        sucesso => {
          //usar um componente de alertas (importar no app.module.ts)
          //https://github.com/sweetalert2/ngx-sweetalert2
          //Swal.fire(titulo, texto, 'warning');
          Swal.fire("Sucesso", "Produto cadastrado!", 'success');
          this.produto = new Produto();
        },
        erro => {
          Swal.fire("Erro", "Erro ao cadastrar o produto: " + erro, 'error');
        }
      );
    }
  }

  voltar(){
    this.router.navigate(['app/produtos/listagem/']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
