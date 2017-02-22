define(['model'], function (model) {
  function renderPessoas() {
    var html = '';
    if (model.pessoas.length === 0) {
      html = '<h3>Não há pessoas cadastradas</h3>';
    } else {
      html = '<table class="table table-striped">' + 
               '<thead>' + 
                 '<tr>' + 
                   '<th>Nome</th><th>Idade</th><th>Email</th>' + 
                 '</tr>' + 
               '</thead>' + 
               '<tbody>';
      for(var i = 0; i < model.pessoas.length; i++) {
        var p = model.pessoas[i];
        html += '<tr><td>' + p.nome + 
                '</td><td>' + p.idade + 
                '</td><td>' + p.email + 
                '</td></tr>';
      }
      html += '</tbody></table>';
    }

    document.getElementById('tabela').innerHTML = html;
  }

  return {
    renderPessoas: renderPessoas
  }
});
