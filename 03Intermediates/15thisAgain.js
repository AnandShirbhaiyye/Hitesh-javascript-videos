console.log(this);

var user ={
    firstName: "Hitesh",
    courseCount: 4,
    getCourseCount: function(){
        console.log("LINe 1", this);
        function sayHello(){
            console.log("Hello Anand");
            console.log("Line 2", this);
        }
        sayHello();
    },
};

user.getCourseCount();

// for all regular function calls, this points to window object