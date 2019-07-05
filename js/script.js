$(document).ready(function(){
    alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    for (i = 0; i < alfabet.length; i++){
        letter = alfabet[i]
        $( "#pagenation" ).append( '<li class="tab col"><a href="#'+letter+'">'+letter+'</a></li>' );
        $( "#words" ).append( '<div id="'+letter+'" class="col offset-s1 s10"><ul class="collapsible"></ul></div>' );

        $.getJSON("http://localhost:8080/dictonary/"+alfabet[i]+".json", function(result){
            console.log(result)
            sessionStorage.setItem('A', result);
          });
        
          console.log(sessionStorage.getItem('A'))
        //$.each(result[letter], function(index,value){
          //  console.log("test")
          //  console.log(value)
            
        //});
    }

    $('.tabs').tabs();
    $('.collapsible').collapsible();
  });