$(document).ready(function(){

    //DROPDOWN
    var dropDown = $('.drop-down');
    var link = dropDown.children('li');
    var tendina = dropDown.children('.drop-down-menu');

    link.click(function(e){
      //$(this).next('.drop-down-menu').toggle();

      var menuCliccato = $('this').next('.drop-down-menu');

      tendina.not(menuCliccato).hide();

      menuCliccato.toggle();
      
    });


 


    //FINE READY
});