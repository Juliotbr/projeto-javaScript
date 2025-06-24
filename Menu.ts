import * as readlineSync from 'readline-sync';
import { Calca } from './src/model/Calca';
import { Camiseta } from './src/model/Camiseta';
import { colors } from './src/util/colors';
import { ProdutoController } from './src/controller/ProdutoController';

export function main() {
    
    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, tipo, preco, estoque, quantidade: number;
    let nome, estampa, material: string;
    const tiposProduto = ['Camiseta', 'Calça'];

    while (true) {

        console.log(colors.fg.greenstrong, colors.bg.black,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                LOJA DE ROUPAS                       ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Vender Produto (Baixa no Estoque)    ");
        console.log("            7 - Adicionar ao Estoque                 ");
        console.log("            8 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);
            
        
        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 8) {
            console.log(colors.fg.greenstrong, 
                "\nLoja de Roupas - Volte Sempre!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.magentastrong, "\n\nCadastrar Novo Produto\n\n", colors.reset);

                console.log("Digite o Nome do Produto: ");
                nome = readlineSync.question("");

                console.log("Digite o tipo do Produto: ");
                tipo = readlineSync.keyInSelect(tiposProduto, "", {cancel: false}) + 1; // +1 porque o keyInSelect retorna 0 para o primeiro item

                console.log("Digite o preço do Produto (R$): ");
                preco = readlineSync.questionFloat("");
                
                console.log("Digite a quantidade em estoque: ");
                estoque = readlineSync.questionInt("");

                switch (tipo) {
                    case 1:
                        console.log("Digite a estampa da Camiseta: ");
                        estampa = readlineSync.question("");
                        produtos.cadastrar(new Camiseta(produtos.gerarId(), nome, tipo, preco, estoque, estampa));
                        break;
                    case 2:
                        console.log("Digite o material da Calça: ");
                        material = readlineSync.question("");
                        produtos.cadastrar(new Calca(produtos.gerarId(), nome, tipo, preco, estoque, material));
                        break;
                }
                keyPress();
                break;
            case 2:
                console.log(colors.fg.magentastrong, "\n\nListar todos os Produtos\n\n", colors.reset);
                produtos.listarTodos();
                keyPress();
                break;
            case 3:
                console.log(colors.fg.magentastrong, "\n\nConsultar Produto por ID\n\n", colors.reset);
                console.log("Digite o ID do Produto: ");
                id = readlineSync.questionInt("");
                produtos.procurarPorId(id);
                keyPress();
                break;
            case 4:
                console.log(colors.fg.magentastrong, "\n\nAtualizar dados do Produto\n\n", colors.reset);
                
                console.log("Digite o ID do Produto: ");
                id = readlineSync.questionInt("");

                let produto = produtos.buscarNoArray(id);

                if (produto != null) {
                    console.log("Digite o Nome do Produto: ");
                    nome = readlineSync.question("");
                    
                    tipo = produto.tipo;

                    console.log("Digite o preço do Produto (R$): ");
                    preco = readlineSync.questionFloat("");
                    
                    console.log("Digite a quantidade em estoque: ");
                    estoque = readlineSync.questionInt("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite a estampa da Camiseta: ");
                            estampa = readlineSync.question("");
                            produtos.atualizar(new Camiseta(id, nome, tipo, preco, estoque, estampa));
                            break;
                        case 2:
                            console.log("Digite o material da Calça: ");
                            material = readlineSync.question("");
                            produtos.atualizar(new Calca(id, nome, tipo, preco, estoque, material));
                            break;
                    }
                } else {
                    console.log(colors.fg.red, `\nO produto com ID ${id} não foi encontrado!`, colors.reset);
                }
                keyPress();
                break;
            case 5:
                console.log(colors.fg.magentastrong, "\n\nApagar um Produto\n\n", colors.reset);
                
                console.log("Digite o ID do Produto: ");
                id = readlineSync.questionInt("");
                produtos.deletar(id);
                keyPress();
                break;
            case 6:
                console.log(colors.fg.magentastrong, "\n\nVender Produto\n\n", colors.reset);
                
                console.log("Digite o ID do Produto: ");
                id = readlineSync.questionInt("");

                console.log("Digite a quantidade a ser vendida: ");
                quantidade = readlineSync.questionInt("");

                produtos.vender(id, quantidade);
                keyPress();
                break;
            case 7:
                console.log(colors.fg.magentastrong, "\n\nAdicionar ao Estoque\n\n", colors.reset);
                
                console.log("Digite o ID do Produto: ");
                id = readlineSync.questionInt("");

                console.log("Digite a quantidade a ser adicionada: ");
                quantidade = readlineSync.questionInt("");

                produtos.adicionarEstoque(id, quantidade);
                keyPress();
                break;
            default:
                console.log(colors.fg.magentastrong, "\nOpção Inválida!\n", colors.reset);
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Julio T");
    console.log("github.com/juliotbr");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione qualquer tecla para continuar...");
    readlineSync.prompt();
}

main();