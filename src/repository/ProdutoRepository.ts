import { Produto } from "../model/Produto";

export interface ProdutoRepository {

	// CRUD
	procurarPorId(id: number): void;
	listarTodos(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(id: number): void;
	
	// Métodos
	vender(id: number, quantidade: number): void;
	adicionarEstoque(id: number, quantidade: number): void;
	
}