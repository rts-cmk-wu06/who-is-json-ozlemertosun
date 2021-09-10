
//øvelse 1:
const jsonObjects = 
{ "classMates" : [ 
    {
    "firstname" : "Pamela", 
    "lastname" : "Anderson", 
    "age" : 54, 
    "haircolor" : "Blond", 
    "shoesize": 39
    }, 

    {
    "firstname" : "David", 
    "lastname" : "Hasselhof", 
    "age" : 69, 
    "haircolor" : "Brown", 
    "shoesize": 44
    }, 

    {
    "firstname" : "Jeremy", 
    "lastname" : "Jackson", 
    "age" : 40, 
    "haircolor" : "Brown", 
    "shoesize" : 43
    }, 

    {
    "firstname" : "Yasmine", 
    "lastname" : "Bleeth", 
    "age" : 53, 
    "haircolor" : "Brown", 
    "shoesize" : 38
    }
]
}

//øvelse 2:
//jsonObjects.classMates.forEach(e => console.log(e.firstname));

//øvelse 3:
//jsonObjects.classMates.forEach(e => console.log(e.firstname,e.lastname));

/* jsonObjects.classMates.forEach(e => {
console.log(`${e.firstname} ${e.lastname}`);
}); */


//øvelse 4:
/* let ul = document.querySelector("#list");

jsonObjects.classMates.forEach(e => {
    let listitem = document.createElement("li");
    listitem.textContent = `${e.firstname} ${e.lastname} ${e.age} ${e.haircolor} ${e.shoesize}`;
    ul.appendChild(listitem);
    listitem.style.backgroundColor = "rgb(120,120,120)"
});  */

//øvelse 5: 
//se fil: team.json






