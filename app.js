///////////////////////////////////////////////////////////////
/////////////// Module 1: BUDGET CONTROLLER ///////////////////
///////////////////////////////////////////////////////////////
var budgetController = (function(){
    
    var x = 23;
    
    var add = function(a){
        return x + a;
    }
    // Ovaj return vraca Motodu praznog objekta i na taj nacin omogucujem komunikaciju sa  ostalim modulima
    return {
        publicTest: function(b){
            
            console.log(add(b));
        }
    }
})();


///////////////////////////////////////////////////////////////
////////////////Module 2: UI CONTROLLER ///////////////////////
///////////////////////////////////////////////////////////////
var UIController = (function(){
    
    
})();





///////////////////////////////////////////////////////////////
////////////Module 3: APP CONTROLLER  /////////////////////////
///////////////////////////////////////////////////////////////
var controller = (function(budgetCtrl, UICtrl){
    // Trazim modulu 2 varijable, koje  predstavljaju dva modula odozgo, jer app controller ce sve kontrolisati
    
   var z = budgetCtrl.publicTest(1) // Ovdje sam iskoristio Metodu Budget Controller Modula sto je bas cool.
   
   return{
       bacajVani: function(){
           console.log(z);
       }
   }
   
})(budgetController, UIController);

controller.bacajVani();