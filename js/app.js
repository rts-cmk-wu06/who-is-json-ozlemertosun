
const jsonObjects = 
{ "classMates" : [ 
    {
    "firstname" : "Pamela", 
    "lastname" : "Anderson", 
    "age" : 54, 
    "haircolor" : "Blond"
    }, 

    {
    "firstname" : "David", 
    "lastname" : "Hasselhof", 
    "age" : 69, 
    "haircolor" : "Brown"
    }, 

    {
    "firstname" : "Jeremy", 
    "lastname" : "Jackson", 
    "age" : 40, 
    "haircolor" : "Brown"
    }, 

    {
    "firstname" : "Yasmine", 
    "lastname" : "Bleeth", 
    "age" : 53, 
    "haircolor" : "Brown"
    }
]
}
jsonObjects.classMates.forEach(e => console.log(e.firstname));

jsonObjects.classMates.forEach(e => console.log(e.firstname,e.lastname));


