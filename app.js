
// BUDGET CONTROLLER   module1 
var budgetController = (function(){
 
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var totalExpenses = 0;
    
    var data = {
        allItems: {
            exp: [0],
            inc: [0]
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
    return{
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //Create New ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            };
            
            //Create new item based on exp or Inc Type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);  
            }else if(type == 'inc'){
                newItem = new Income(ID, des, val);
            }
            
            
            //Return the new element
            data.allItems[type].push(newItem);
            return newItem;
        },
            
            //testing
            testing: function(){
                console.log(data);
            }
        
    }
    
})();


    
    

// UI CONTROLLER   module2
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }
    
    return{
        getInput: function(){
            return{                
                type: document.querySelector(DOMstrings.inputType).value, // Will be ither Inc or exp  (income or expense)
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value

            }
            
        },
        
        addListItem: function(obj, type){
            var html, newHtml, element;
          
            //Create HTML string with placeholder text

          
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                 html= '  <div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                
                        
            }else if(type === 'exp') {
                element = DOMstrings.expensesContainer;
                html =   '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value"%value%</div><div ">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //Replace the placeholder text with some actual data
                newHtml = html.replace('%id%', obj.id);
                newHtml =  newHtml.replace('%description%', obj.description);
                newHtml =  newHtml.replace('%value%', obj.value);
            
            //Insert the HTML into the DOM
                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        
        
        getDOMstrings: function(){
            return DOMstrings;
        }
    }
    
})();







// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem();
                }
            });
    };
    
    
        
    var ctrlAddItem = function() {
        var input, newItem;
         
        // 1. Get the field input data
           input = UICtrl.getInput();

         // 2. Add the Item to the budget controller
           newItem = budgetCtrl.addItem(input.type, input.description, input.value);

         // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

         // 4. Calculate the budget

        // 5. Display the  budget on the UI

};
    
    return{
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);


controller.init();




























































































//