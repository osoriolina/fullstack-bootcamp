/* Haz una función que acepte dos arrays como inputs. La función devolverá 
un array con todos los datos de los otros 2 arrays.

Ejemplo:
miFuncion([1,2,3], [4,5,6]) → devolverá [1,2,3,4,5,6]
miFuncion([“hola”, “mundo”], [4,5,6]) → devolverá [“hola”, “mundo”,4,5,6] */ 


function arrMerge() {
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    let arrResult = [];

    for (let i = 0; i < arr1.length; i++) {
        arrResult.push(arr1[i])
    } 
    
    for (let j = 0; j < arr2.length; j++) {
        arrResult.push(arr2[j])
    }

    document.write(arrResult);

    
    return true;
}

let miBoton = document.querySelectorAll("body > button")[0]
miBoton.addEventListener("click", arrMerge)