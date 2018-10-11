
// \ovo jr PRVI MODULE
var budgetController = (function(){
 
    // somecode
    
})();



// Drugi Module
var UIController = (function() {
    
    //some code
    
})();



var ctrlAddItem = function() {
      // 1. Get the field input data
     
     // 2. Add the Item to the budget controller
     
     // 3. Add the item to the UI
     
     // 4. Calculate the budget on the UI
    console.log('pusikurac')
};

// Treci module/ Jonas je lud ako konta da cu ovo naucit ovako na prvu
var controller = (function(budgetCtrl, UICtrl){
   
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
    }

    });
    
    
})(budgetController, UIController);































































































//