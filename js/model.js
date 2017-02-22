var pessoas = [];

function Pessoa(nome, idade, email) {
  this.nome = nome;
  this.idade = idade;
  this.email = email;
}

define([], function() {
	return {
		pessoas: pessoas,
		Pessoa: Pessoa
	};
});