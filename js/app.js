//Øvelse 6: 
//fetch promises based 

let ul = document.querySelector("#list");

fetch("js/team.json")
    //.then(response => console.log(response.json()))
    .then(response => response.json())
    .then( data => {
        data.classMates.forEach(e => {
            let listitem = document.createElement("li");
            listitem.textContent = `${e.firstname} ${e.lastname} ${e.age} ${e.haircolor} ${e.shoesize}`;
            ul.appendChild(listitem);
    });
});


        
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


