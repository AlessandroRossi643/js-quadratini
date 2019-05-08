// Funzione generale del gioco
function coloraQuadrati(){

  // Creo due variabili per salvare quanti quadratini rossi o verdi scopriamo:
  var i=0;
  var j=0;

  // Si va a costruire una funzione anonima che al click mi permetta di eseguire il controllo
  $('.col').click(function(){

    // Se il col cliccato ha la classe red mi applicherà una modifica inline al css
    if ($(this).hasClass('red')) {
      $(this).css('background','red');
      i++;
    }

    // In caso contrario aggiungo una classe green fatta in css con cui coloro il background di verde
    else{
      $(this).addClass('green');
      j++;
    }
    
  });
};

coloraQuadrati();
