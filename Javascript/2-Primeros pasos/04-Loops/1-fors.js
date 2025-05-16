let animales = ['dog', 'cat', 'rabbit', 'hamster'];

for (let anim of animales) {
  console.log(anim);
}

let persona = {
    nombre: "Pedro",
    edad: 30,
    ciudad: "Madrid"
}
for (let pro in persona) {
    console.log(persona[pro]);
}

switch (persona.nombre) {
    case "Juan":
        console.log("se imprime Juan");
        break;
    case "Pedro":
        console.log("se imprime Pedro");
        break;
    default:
        console.log("se imprime default");
        break;
}