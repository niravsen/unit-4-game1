
$(document).ready(function() {

    // set variables
    
    var xred = 0;
    var xblue = 0; 
    var xyellow = 0; 
    var xgreen = 0;
    
    var wins = 0; 
    var losses = 0;
    var totalPoints = 0;
    var totalScore = 0;
    
    var startGame = {
     
    randomNumber: function(minimum,maximum) {
    var mixedNumber = Math.floor(Math.random() * (maximum - minimum + 1) + minimum); 
    return mixedNumber ;
    } ,
    
    play: function() {
        totalScore	= 0;
        totalPoints = startGame.randomNumber(19, 120) ;
        $("#totalnumber").html("0 " + totalScore);
        $("#totalpoints").html("Points: " + totalPoints);
        console.log("reset - totalScore=", totalScore, "totalPoints=", totalPoints  );
    
    xred = startGame.randomNumber(1, 12) ;
    xblue = startGame.randomNumber(1, 12) ;
    xyellow = startGame.randomNumber(1, 12) ;
    xgreen = startGame.randomNumber(1, 12) ;
    
    } ,
    
    checkScore: function() {
        $("#totalnumber").html("0 " + totalScore);
    

    if (totalScore > totalPoints) {
        console.log("loss - totalScore=", totalScore, "totalPoints=", totalPoints  );
        losses += 1 ;
        $("#losses").html("Losses: " + losses);
        startGame.play();

    }
    
    if (totalScore == totalPoints) {
        console.log("win - totalScore=", totalScore, "totalPoints=", totalPoints  );
        wins += 1 ;
        $("#wins").html("Wins: " + wins);
        startGame.play();
    }
}
    }
    
        startGame.play();
        
        $("#btnRed").on("click", function() {
           totalScore += xred ;
           console.log("Total=", totalScore, "Number=", totalPoints, "Red=", xred, "Blue=", xblue,"Yellow=", xyellow, "Green=", xgreen );
           startGame.checkScore() ; 
        }); 
    
        $("#btnBlue").on("click", function() {
           totalScore += xblue ;
           console.log("Total=", totalScore, "Number=", totalPoints, "Red=", xred, "Blue=", xblue,"Yellow=", xyellow, "Green=", xgreen );
           startGame.checkScore() ;
        }); 
        
        $("#btnYellow").on("click", function() {
           totalScore += xyellow ;
           console.log("Total=", totalScore, "Number=", totalPoints, "Red=", xred, "Blue=", xblue,"Yellow=", xyellow, "Green=", xgreen );
           startGame.checkScore() ;
        });  
        
        $("#btnGreen").on("click", function() {
          totalScore += xgreen ;
           console.log("Total=", totalScore, "Number=", totalPoints, "Red=", xred, "Blue=", xblue,"Yellow=", xyellow, "Green=", xgreen );
           startGame.checkScore() ;
        }); 
    });