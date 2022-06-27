/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete coureses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name,role)
*/
// var getUserRole =  (name, role)=>{
 var getUserRole = function (name, role){   
    switch(role){
        case "admin":
            return `${name} is admin with all access`
            break; // this is not necessary
        case "subadmin":
            return `${name} is subadmin with access to create/delete coureses`
            break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`
            break;
        case "user":
            return `${name} is a user to consume all content`
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Anand", "testprep"));

var getRole = getUserRole("sammy", "user");

console.log(getRole)