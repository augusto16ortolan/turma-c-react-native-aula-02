const axios = require("axios");

/*async function buscarCep(cep) {
  console.log("inicio");
  axios
    .get(`https://viacepp.com.br/ws/${cep}/json/`)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
  console.log("fim");
}*/

async function buscarCep(cep) {
  try {
    console.log("inicio");
    const response = await axios.get(`https://viacepp.com.br/ws/${cep}/json/`);
  } catch (error) {
    console.log("Ocorreu um erro", error.message);
  } finally {
    console.log("fim");
  }
}

buscarCep("99440000");
