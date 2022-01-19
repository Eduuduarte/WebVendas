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

	validarDados(){
		for(let i in this){
			if(this[i] == undefined || this[i] == '' || this[i] == null){
				return false
			}
		}

		return true
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

function multiplicarValores(){
	let quantidade = document.getElementById('quantidade')
	let valorUni = document.getElementById('valorUni')
	let valorTotal = document.getElementById('valorTotal')

	valorTotal.innerHTML= "R$ " + (quantidade.value * valorUni.value)
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

	//console.log(venda)

	if(venda.validarDados()){
		
		bd.gravar(venda)

		//Configurar o modal
		document.getElementById('modal_titulo').innerHTML = 'Venda registrada com sucesso'
		document.getElementById('modal_titulo_div').className = "modal-header text-success"
		document.getElementById('modal_conteudo').innerHTML = "Venda cadastrada com sucesso"
		document.getElementById('modal_btn').innerHTML = "Voltar"
		document.getElementById('modal_btn').className = "btn btn-success"
		$('#modalRegistraVenda').modal('show')

		codigoCliente.value = ''
		cliente.value = ''
		codigoProduto.value = ''
		produto.value = ''
		quantidade.value = ''
		valorUni.value = ''
		valorTotal.innerHTML = '' 


	} else{
		
		document.getElementById('modal_titulo').innerHTML = 'Erro no registro da venda'
		document.getElementById('modal_titulo_div').ClassName = "modal-header text-danger"
		document.getElementById('modal_conteudo').innerHTML = "Erro no cadastro da venda, verifique se todos os campos foram preenchidos!"
		document.getElementById('modal_btn').innerHTML = "Voltar e Corrigir"
		document.getElementById('modal_btn').ClassName = "btn btn-danger"
		$('#modalRegistraVenda').modal('show') 

	}
}
