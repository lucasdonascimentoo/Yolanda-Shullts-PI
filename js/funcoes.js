//Função para a melhor visualização do site com rolamento
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems)
  });


  //Função para o carousel
  document.addEventListener('DOMContentLoaded', function() {
    var cars=document.querySelectorAll('.carousel')
    M.Carousel.init(cars,{ 
        fullWidth: true,
        indicators: true
    })
})