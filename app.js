///////////////////////////////////////////////////////////////
/////////////// Module 1: BUDGET CONTROLLER ///////////////////
///////////////////////////////////////////////////////////////
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



var data = {
    allItems: {
        exp: [],
        inc: []
    },
    totals: {
        exp: 0,
        inc: 0
    }
};
    //Ovaj return ce vratit jedan item kao objekat, znaci citav jedan income ili expense
    return {
        addItem: function(type, des, val){
            var newItem, ID;
            
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                
                // Create new ID for new ITEM to store
                    ID = 0;
            };
            
            //Create new item based on 'inc' or 'exp' value
            if (type === 'exp'){
                
                newItem = new Expense(ID, des, val);
            }else if(type == 'inc'){
                newItem = new Income(ID, des, val);
            }
            // Push it into our data structure   
            data.allItems[type].push(newItem);
            
            //Return new Item
            return newItem;
        },
        testing: function(){
            console.log(data);
        }
    }

})();








///////////////////////////////////////////////////////////////
////////////////Module 2: UI CONTROLLER ///////////////////////
///////////////////////////////////////////////////////////////
var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
        
    }
    
    return {
        getInput: function(){
           
            return{
                 
            type: document.querySelector(DOMstrings.inputType).value, // will be ether Inc or Exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
          
               
           },
        addListItem: function(obj, type){
            var html, newHtml, element;
            // Create HTML String with Paceholder text
            
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                 html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            }else if(type === 'exp'){
                element = DOMstrings.expensesContainer;
                
                  html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>  </div></div> </div>'
            }
            
            
            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            
            //Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
            
        },
        
        clearFields: function(){
            var fields, fieldsArr;
            
           fields =  document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            
           fieldsArr = Array.prototype.slice.call(fields);
            
            
            fieldsArr.forEach(function(current, index, array){
                current.value = "";
            })
            
            fieldsArr[0].focus();
        },
        
        
            
       getDOMstrings: function(){
                return DOMstrings;
            }
        };
    })();

















///////////////////////////////////////////////////////////////
////////////Module 3: GLOBAL APP CONTROLLER  //////////////////
///////////////////////////////////////////////////////////////
var controller = (function(budgetCtrl, UICtrl){
    // Trazim modulu 2 varijable, koje  predstavljaju dva modula odozgo, jer app controller ce sve kontrolisati
    
  
    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();
        
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
    };
    
    var updateBudget = function(){
        
        // 1. Calculate the  budget
        
        // 2. Return budget 
        
    }
    
    
    // Funkcija koju pozivamo NA KLIK ili na ENTER PRESS
    var ctrlAddItem = function (){
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtrl.getInput();
       
        if (input.description !== "" && !isNaN(input.value) && input.value > 0){

            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields;
            UICtrl.clearFields();

            // 5. Display the budget in the UI
           updateBudget();
            
        }
    };
    
    
    return{
        init: function() {
            console.log('Application has Started');
            setupEventListeners();
        }
    }
    
 
})(budgetController, UIController);

controller.init(); 