/* ¿Alguna vez te has preguntado cómo sería tu nombre de superhéroe? ¡Descubrámoslo!

Te voy a dar un array con títulos de héroe masculino:
const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"]

También te voy a dar un array con títulos de héroes femeninas:
const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"]

También te voy a dar un array con adjetivos molones:
const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]

Y finalmente un array con sustantivos:
const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]

Tu misión va a ser crear una función que elija al azar:
Un título
Un sustantivo
Un adjetivo

Y que retorne un string concatenándolos todos. Por ejemplo: “GENERAL GIANT MOLE” */ 


function getRandom(numMax) {
    return Math.round(Math.random() * (numMax-1) + 0)
}

function generarSuperHeroe() {
    const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor" , "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"];
    const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
    const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
    const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];

    let hombreMujer = prompt("Escoge si quieres que tu nombre sea femenino o masculino");
    let resultado = "";

    if (hombreMujer === "femenino") {
        resultado += titulos_femenino[getRandom(titulos_femenino.length)] + " " +  sustantivos[getRandom(sustantivos.length)] + " " + adjetivos[getRandom(adjetivos.length)]

    } else if (hombreMujer === "masculino") {
        resultado += titulos_masculino[getRandom(titulos_femenino.length)] + " " +  sustantivos[getRandom(sustantivos.length)] + " " + adjetivos[getRandom(adjetivos.length)]
   
       }
    
    
    return resultado;


}


let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", function () { 
    document.write(generarSuperHeroe());
})