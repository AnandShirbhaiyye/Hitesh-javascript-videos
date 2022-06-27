var name = "Hitesh";

console.log("Line number 3", name);

function sayName(){
  //var name = "My H";
    console.log("Line number 6", name);
    sayNameTwo();

    function sayNameTwo(){
        //var name = "Mr. Hc";
        console.log("Line number 12", name);
    }
}

sayName()