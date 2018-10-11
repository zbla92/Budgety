
// \ovo jr PRVI MODULE
var budgetController = (function(){
    var x = 23;
    // ovo radi budgetController a dole cemo vidjet zasto tako 
    var add = function (a){
        return x + a;
    }
    return{
        publicTest: function(b){
            return add(b);
        }
    }
    
})();



// Drugi Module
var UIController = (function() {
    
    //some code
    
})();



// Treci module/ Jonas je lud ako konta da cu ovo naucit ovako na prvu
var controller = (function(budgetCtrl, UICtrl){
    var z = budgetCtrl.publicTest(5);
    
    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
    
    
})(budgetController, UIController);































































































//