var readline = require("readline"),
    rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt("--> ");
rl.prompt();

var toDoList = [];


var commands = {
    ls:function(){
        console.log(toDoList);
    },
    add:function(item){
        toDoList.push(item);
    },
    remove:function(item){
        
        console.log(item," đã rời đi");
    }
};

rl.on('line',function(line){
    var words = line.split(' '),
        command = words.shift();/*shift:tự động huỷ 1 kí tự trong dãy nhập */
        args5tr = words.join(' ');


    commands[command](args5tr);
    // if(command === 'ls'){
    //     console.log(toDoList);
    // }
    // if(command === 'add'){
    //     //var item = words.join(' ');
    //     toDoList.push(item);
    // }
    //console.log(words);

    // toDoList.push(line);
    // console.log(toDoList);
    rl.prompt();
});