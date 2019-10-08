let info = [{"name":"Spain",
"topLevelDomain":[".es"],

"alpha2Code":"ES",
"alpha3Code":"ESP",

"callingCodes":["34"],

"capital":"Madrid",

"altSpellings":["ES","Kingdom of Spain","Reinode España"],

"region":"Europe",
"subregion":"SouthernEurope",
"population":46438422,
"latlng":[40.0,-4.0],
"demonym":"Spanish",
"area":505992.0,
"gini":34.7,

"timezones":["UTC","UTC+01:00"],
"borders":["AND","FRA","GIB","PRT","MAR"],

"nativeName":"España",
"numericCode":"724",

"currencies":[{"code":"EUR",
"name":"Euro",
"symbol":"€"}],

"languages":[{"iso639_1":"es",
"iso639_2":"spa",
"name":"Spanish",
"nativeName":"Español"}],

"translations": {
    "de":"Spanien",
    "es":"España",
    "fr":"Espagne",
    "ja":"スペイン",
    "it":"Spagna",
    "br":"Espanha",
    "pt":"Espanha",
    "nl":"Spanje",
    "hr":"Španjolska",
    "fa":"اسپانیا"
},

"flag":"https://restcountries.eu/data/esp.svg",
"regionalBlocs":[{"acronym":"EU",
"name":"European Union",
"otherAcronyms":[],
"otherNames":[]}],
"cioc":"ESP"}]

let pais = prompt("¿Where are you from... Spain? -Write Spain");
let resultadoPais;

if (pais == "Spain") { //imprimir info de Spain, callingcodes, region, population
   resultadoPais = (info[0].name + " " + info[0].callingCodes[0] + " " + info[0].region + " " + info[0].population);

}
 
document.write(`${resultadoPais}`);