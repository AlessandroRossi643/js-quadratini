//Funzione generale che si attiva al click di ogni singola colonna
$('.col').click(function(){

  //Controllo se la colonna cliccata ha la classe red e in caso positivo il background diventa rosso
  if ($(this).hasClass('red')) {
    $(this).css('background','red');
  }
  // In caso contrario aggiungo una classe green fatta in css con cui coloro il background di verde
  else{
    $(this).addClass('green')
  }
});
