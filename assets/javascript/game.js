$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    
    $('#randomNumber').text("Random Number: " + Random);
    // Appending random number to the randomNumber id in the html doc
    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
  $('#numberWins').text("Wins: " + wins);
  $('#numberLosses').text("Losses: " + losses);

  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text("Random Number: " + Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text("Your score: " + userTotal);
        } 

  //adds the wins to the userTotal
  function yay(){
    $('.message').text("You won!");
    wins++; 
    $('#numberWins').text("Wins: " + wins);
    reset();
  }

  //addes the losses to the userTotal
  function loser(){
    $('.message').text("You lost!");
    losses++;
    $('#numberLosses').text("Losses: " + losses);
    reset()
  }

  //sets up click for jewels
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text("Your score: " + userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            yay();
            reset();
          }
          else if ( userTotal > Random){
            loser();
            reset();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text("Your score: " + userTotal); 
          if (userTotal == Random){
            yay();
            reset();
          }
          else if ( userTotal > Random){
            loser();
            reset();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text("Your score: " + userTotal);
      
  //sets win/lose conditions
            if (userTotal == Random){
            yay();
            reset();
          }
          else if ( userTotal > Random){
            loser();
            reset();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text("Your score: " + userTotal); 
        
            if (userTotal == Random){
            yay();
            reset();
          }
          else if ( userTotal > Random){
            loser();
            reset();
          }
    });   
  }); 