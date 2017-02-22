
define(['model', 'view'], function(model, view) {
  function cadastrar() {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var email = document.getElementById('email').value;

    var pessoa = new model.Pessoa(nome, idade, email);

    model.pessoas.push(pessoa);

    document.getElementById('form').reset();
    document.getElementById('nome').focus();

    view.renderPessoas();
  }

  return {
    cadastrar: cadastrar
  };
});