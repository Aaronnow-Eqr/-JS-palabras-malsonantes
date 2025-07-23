/*
  1. Crea una función que reciba un texto o parrafo y verifique si contiene alguna las siguientes malas palabras:
  - "tonto"
  - "chispas"
  - "recorcholis"
  - "rayos"
  - "caracoles"
  - "cielos"
  Si el texto contiene alguna de estas palabras, sustituye por "****" y retorna el texto modificado.
  Si no contiene ninguna, retorna el texto original.
*/

function censurarPalabrotas(texto){
  let palabrotas = ["tonto", "chispas", "recorcholis", "rayos", "caracoles", "cielos"];
  texto=texto.toLowerCase();
  palabrotas.forEach(palabra => {
    texto = texto.replace(palabra, "****");
  });
  return texto;
}

console.log(
  censurarPalabrotas(
    "rayos, jhonny es un tonto. Cielos, esto me desespera."
  )
);
  console.log(
  censurarPalabrotas(
    "rayos, me gusta el helado de vainilla. Cielos, mejor que el de chocolate."
  )
);

/*
  2. Según el siguiente array de objetos
  let personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
  ];

  Crea un código que me haga un filtro del array creando un nuevo array que contenga solo
  las personas que sean mayores de 25 años.

  Luego haz un código que me cree un nuevo array con las personas sean de españa y sean hombres

  Fecha de entrega: 11/07/25
*/

let personas = [
  { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
  { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
  { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
  { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
  { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
];

let mayor_edad = personas.filter((persona) => persona.edad > 25);
console.log(mayor_edad);

let españoles = personas.filter((persona) => persona.pais === "España" && persona.sexo === "masculino");
console.log(españoles);