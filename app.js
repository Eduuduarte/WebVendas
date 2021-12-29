//Constructor do banco de dados

class Vendas{
	constructor(codigoCliente, cliente, codigoProduto, produto, quantidade, valorUni, valorTotal){

		this.codigoCliente = codigoCliente
		this.cliente = cliente
		this.codigoProduto = codigoProduto
		this.produto = produto
		this.quantidade = quantidade
		this.valorUni = valorUni
		this.valorTotal = valorTotal
	}

}

class Bd{

	constructor(){
		let id = localStorage.getItem('id')

		if (id === null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId(){
		//Recuperando id do localStorage
		let proximoId = localStorage.getItem('id')

		return parseInt(proximoId) + 1
	}

	gravar(v){
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(v))

		localStorage.setItem('id', id)
	}

	//Método para recuperar os registros feitos no localStorage

	recuperarRegistros(){

		let vendas = Array()

		let id = localStorage.getItem('id')

		//recuperando todas as despesas
		for (let i = 1; i <= id; i++) {
			
			let venda = JSON.parse(localStorage.getItem(i))

			
		}
	}
}

//Instância da classe bando de dados - Bd
let bd = new Bd();

function cadastrarVendas(){
	let codigoCliente = document.getElementById('codigoCliente')
	let cliente = document.getElementById('cliente')
	let codigoProduto = document.getElementById('codigoProduto')
	let produto = document.getElementById('produto')
	let quantidade = document.getElementById('quantidade')
	let valorUni = document.getElementById('valorUni')
	let valorTotal = document.getElementById('valorTotal')

	let venda = new Vendas(
		codigoCliente.value,
		cliente.value,
		codigoProduto.value,
		produto.value,
		quantidade.value,
		valorUni.value,
		valorTotal.innerHTML

		)

	console.log(venda)

	bd.gravar(venda)
}

function multiplicarValores(){
	let quantidade = document.getElementById('quantidade')
	let valorUni = document.getElementById('valorUni')
	let valorTotal = document.getElementById('valorTotal')

	valorTotal.innerHTML= "R$ " + (quantidade.value * valorUni.value)
}