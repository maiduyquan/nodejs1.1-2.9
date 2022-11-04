/*
jquery style
$("#someElement").click(function(){...});
*/ 

var wakeUp = function(callback){
    console.log("I'm walking up!");
    if(callback)
        if(typeof callback === 'function')
            callback();
};
var checkPhone = function(callback){
    console.log("checking phone...");
    if(callback)
        if(typeof callback === 'function')
            callback();
};
var eatBreakfast = function(callback){
    console.log("I'm eating breakfast...");
    if(callback)
        if(typeof callback === 'function')
            callback();

};

//bad! synchrenous way
// wakeUp();
// checkPhone();
// eatBreakfast();

wakeUp(function(){
    checkPhone(function(){
        eatBreakfast();
    });
});