/* EXTRA: Crear un programa que lista un array de objetos de clientes, construido con las siguientes funciones:

   function listaClientes (función principal del programa que llama a las otras) --> FUNCION PRINCIPAL

   function getClientes --> ESTO SE PUEDE GUARDAR DENTRO DE UNA VARIABLE
           devuelve un array de objetos de clientes :
[   {name:”Edward Norton”,amountPurchased: 28.14, age: 65, city:”Barcelona”},
{name:”Charles Darwin”,amountPurchased: 324.34, age: 42, city:”Madrid”},
{name:”Steven Tyler”,amountPurchased: 124.94, age: 77, city:”Barcelona”},
{name:”Michael J”,amountPurchased: 624.74, age: 59, city:”Madrid”},
{name:”Satoshi”,amountPurchased: 734.14, age: 33, city:”Barcelona”},
{name:”Bruce Dickinson”,amountPurchased: 424.24, age: 66, city:”Valencia”}
]

    function getInfoCliente --> RECIBO UN OBJETO - VOY PEGANDO EN UNA VARIABLE
           recibe un objeto de cliente y devuelve una string formateada con los datos del 
           cliente que quieres enseñar del cliente. Si el amountPurchased de cada cliente es 
           menor que 200, no se debe incluir en el resultado

       function imprimeCliente --> RECIBE UNA STRING FORMATEADA
           recibe una string formateada y escribe en la pantalla, si el cliente tiene más de 35 años,
            debe aparecer en azul, sino, en rojo. Si el cliente es de Barcelona, siempre tiene que aparecer en verde. */

            // FOR DE MIS CLIENTES Y BUSCO LA INFO DEL CLIENTE - info cliente recibo la info del cliente


            function listaClientes() {
                let clientes = getClientes()
                for (let i = 0; i < clientes.length; i++) {
                   document.write(getInfoCliente(clientes[i]));
                }
            }

            function getClientes() {
                let clientes = [   {name:"Edward Norton", amountPurchased: 28.14, age: 65, city:"Barcelona"},
                    {name:"Charles Darwin", amountPurchased: 324.34, age: 42, city:"Madrid"},
                    {name:"Steven Tyler", amountPurchased: 124.94, age: 77, city:"Barcelona"},
                    {name:"Michael J", amountPurchased: 624.74, age: 59, city:"Madrid"},
                    {name:"Satoshi",amountPurchased: 734.14, age: 33, city:"Barcelona"},
                    {name:"Bruce Dickinson",amountPurchased: 424.24, age: 66, city:"Valencia"}
                    ]
            } return clientes; 


            function getInfoCliente(objCliente) {
                let cadaCliente = "";
                
                cadaCliente = objCliente["name"] + objCliente["amountPurchased"] + objCliente["age"] + objCliente["city"]

                return cadaCliente;

            }

