import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListagemComponent } from './produtos/produto-listagem/produto-listagem.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  {path:'lista', component: ProdutoListagemComponent},
  {path: 'detalhe', component: ProdutoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
