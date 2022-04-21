// var a="aditya";
function comp(){
    return function adit(a){
        console.log(a);
    };
}
const aditya =comp();
aditya("hello");