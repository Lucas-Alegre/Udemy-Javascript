/**Vamos
 * A crear
 * Un objeto
 */

let objetoLucas= {
    nombre: "Lucas",
    edad: 23,
    ciudad: "Concordia",
    apellido: "Alegre",
}
console.log(objetoLucas);
objetoLucas.nombre ="Lucas Ezequiel";
objetoLucas["apellido"]="Vega";
console.log(objetoLucas);

delete objetoLucas.ciudad;
console.log(objetoLucas);
