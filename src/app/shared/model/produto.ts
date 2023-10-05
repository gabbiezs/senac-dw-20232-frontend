import { Fabricante } from './fabricante';

export class Produto {
  id: number;
  nome: string;
  fabricanteDoProduto: Fabricante;
  peso: number;
  valor?: number; // o simbolo ? indica que o atributo é opcional.
  dataCadastro: Date;
}
