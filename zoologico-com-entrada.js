import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recintos = [
  { numero: 1, bioma: 'savana', tamanho: 10, animais: ['macaco', 'macaco', 'macaco'] },
  { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
  { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: ['gazela'] },
  { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
  { numero: 5, bioma: 'savana', tamanho: 9, animais: ['leao'] }
];

const animais = {
  'leao': { tamanho: 3, biomas: ['savana'], carnivoro: true },
  'leopardo': { tamanho: 2, biomas: ['savana'], carnivoro: true },
  'crocodilo': { tamanho: 3, biomas: ['rio'], carnivoro: true },
  'macaco': { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
  'gazela': { tamanho: 2, biomas: ['savana'], carnivoro: false },
  'hipopotamo': { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
};

function encontrarRecintosViaveis(tipoAnimal, quantidade) {
  if (!animais[tipoAnimal]) {
    return "Animal inválido";
  }

  if (quantidade <= 0) {
    return "Quantidade inválida";
  }

  const animalInfo = animais[tipoAnimal];
  const espacoNecessario = animalInfo.tamanho * quantidade;

  const recintosViaveis = recintos.filter(recinto => {
    
    const biomasRecinto = recinto.bioma.split(' e ');
    const biomaCompativel = biomasRecinto.some(bioma => animalInfo.biomas.includes(bioma));

    if (!biomaCompativel) {
      return false;
    }

    if (recinto.animais.length > 0) {
      const primeiroAnimal = recinto.animais[0];
      const infoPrimeiroAnimal = animais[primeiroAnimal];

      if (infoPrimeiroAnimal.carnivoro || animalInfo.carnivoro) {
        if (primeiroAnimal !== tipoAnimal) {
          return false;
        }
      }
    }

    const espacoOcupado = recinto.animais.reduce((total, animal) => total + animais[animal].tamanho, 0);
    const espacoDisponivel = recinto.tamanho - espacoOcupado;

    return espacoDisponivel >= espacoNecessario;
  });

  if (recintosViaveis.length === 0) {
    return "Não há recinto viável";
  }

  return recintosViaveis.map(recinto => {
    const espacoOcupado = recinto.animais.reduce((total, animal) => total + animais[animal].tamanho, 0);
    const espacoDisponivel = recinto.tamanho - espacoOcupado - espacoNecessario;

    return `Recinto número ${recinto.numero} (espaço livre: ${espacoDisponivel} total: ${recinto.tamanho})`;
  }).join('\n');
}

rl.question("Digite o tipo de animal: ", (tipoAnimal) => {
  rl.question("Digite a quantidade de animais: ", (quantidade) => {
    const resultado = encontrarRecintosViaveis(tipoAnimal.toLowerCase(), parseInt(quantidade));
    console.log(resultado);
    rl.close();
  });
});

