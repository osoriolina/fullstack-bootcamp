/* Tengo una lista de productos y de precios de la tienda de la esquina:

naranjas - 2€
leche - 1,2 €
cereales - 4€
deportivo Ferrari - 1.000.000 €
sangre de unicornio - 0,5 €

Elegid un producto cualquiera, guardadlo en una variable llamada “producto” como un string. 
Con un switch/case, haced que se imprima en la consola el precio del producto. 

Ejemplo: 

const producto = “cereales”;
//tu codigo aquí
//resultado: en la terminal debería aparecer 4€ */

let producto = "naranjas";

switch (producto) {
    case "naranjas":
        document.write("2€");
        break;
    case "leche":
        document.write("1,2€")  
        break;
    case "cereales":
        document.write("4€");
        break;
    case "deportivo Ferrari":
        document.write("1.000.000€");
        break;
    case "sangre de unicornio":
        document.write("0,5€");
        break;
    default:
                // code block
}

    