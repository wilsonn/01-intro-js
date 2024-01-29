const users = [
  'pepe', 'ana', 'maria', 'juan', 'sebastian', 'carlos', 'josefa'
];

//const [pepe, ana, maria, , , carlos] = users;

const [pepe, ana, maria, ...rest] = users;
console.log(pepe, ana, maria, ...rest);
console.log(pepe, ana, maria, rest);