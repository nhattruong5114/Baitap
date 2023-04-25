console.log("hello")
// for
/*const car = ["bv","toyta","fod"];
let text="";
let i=8;
for (let i=0;i < 10;i++ ){
    text += i +  "<br>";
}

document.getElementById("text-demo").innerHTML = text
console.log(text)
*/

/*

var man ={
    name : "john",
    age : 18,
    address : "hanoi"

}
/!*
let text = man.name;

let ageAttr = "age"
let text = man["ageAttr"]
*!/
    var cars = ["asd","casda","bcvbc"]
    var text =""
    for (x in cars) {
     text += cars[x] + "<br>"
    }


        document.getElementById("text-demo").innerHTML = text*/

function tinh(){
    var so = Number(document.getElementById("nam").value)
    console.log("nam sinh " + so)
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("namht").innerHTML = y
    console.log("nam hien tai " + y)
    var h
    h = y - so;
    console.log("so tuoi " + h)
    document.getElementById("sonam").innerHTML = h


}
