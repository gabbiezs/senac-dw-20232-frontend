import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';


@NgModule({
  declarations: [
    ProdutoListagemComponent,
    ProdutoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
