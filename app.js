
// BUDGET CONTROLLER   module1 
var budgetController = (function(){
 
    // somecode
    
})();



// UI CONTROLLER   module2
var UIController = (function() {
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }
    
    return{
        getInput: function(){
            return{
                
            type: document.querySelector(DOMStrings.inputType).value, // Will be ither Inc or exp  (income or expense)
            description: document.querySelector(DOMStrings.inputDescription).value,
            value: document.querySelector(DOMStrings.inputValue).value
                
            }
            
        },
        getDomStrings: function(){
            return DOMStrings;
        }
    }
    
})();







// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    var DOM = UICtrl.getDomStrings();


    var ctrlAddItem = function() {
          // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);

         // 2. Add the Item to the budget controller

         // 3. Add the item to the UI

         // 4. Calculate the budget

        // 5. Display the  budget on the UI

}


// Treci module/ Jonas je lud ako konta da cu ovo naucit ovako na prvu
   
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
    }

    });
    
    
})(budgetController, UIController);































































































//