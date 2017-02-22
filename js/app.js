requirejs(['controller', 'view'], function(controller, view) {
  view.renderPessoas();
  window.cadastrar = controller.cadastrar;
});