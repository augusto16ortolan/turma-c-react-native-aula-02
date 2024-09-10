const axios = require("axios");

async function buscarCep(cep) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  console.log(response.data);
}

async function main() {
  console.log("Inicio da função");
  await buscarCep("99440000");
  console.log("Fim da função");
}

main();
