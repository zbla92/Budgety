///////////////////////////////////////////////////////////////
/////////////// Module 1: BUDGET CONTROLLER ///////////////////
///////////////////////////////////////////////////////////////
var budgetController = (function(){
    

})();















///////////////////////////////////////////////////////////////
////////////////Module 2: UI CONTROLLER ///////////////////////
///////////////////////////////////////////////////////////////
var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
        
    }
    
    return {
        getInput: function(){
           
            return{
                 
            type: document.querySelector(DOMstrings.inputType).value, // will be ether Inc or Exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            };
          
               
           },
            
       getDOMstrings: function(){
                return DOMstrings;
    }
        }
    })();

















///////////////////////////////////////////////////////////////
////////////Module 3: GLOBAL APP CONTROLLER  //////////////////
///////////////////////////////////////////////////////////////
var controller = (function(budgetCtrl, UICtrl){
    // Trazim modulu 2 varijable, koje  predstavljaju dva modula odozgo, jer app controller ce sve kontrolisati
    var DOM = UICtrl.getDOMstrings();
    console.log()
    
    // Funkcija koju pozivamo NA KLIK ili na ENTER PRESS
    var ctrlAddItem = function (){
        
        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget in the UI
       
        
    };
    
    
    // Event Listener,  za CLICK NA zelenu kvacicu BTN
    document.querySelector(DOM.inputBtn).addEventListener('click', function(){
        //Pozicam funkciju jer sam klikno kvacicu
        ctrlAddItem();
        
        
    });
    //Event Listener kad neko stisne enter bilo gdje
    document.addEventListener('keypress', function(event){
        if (13 === event.keyCode || event.which === 13){
            // Pozivam funkciju jer sam stisno enter
           ctrlAddItem();
        }
    })
    
 
})(budgetController, UIController);

