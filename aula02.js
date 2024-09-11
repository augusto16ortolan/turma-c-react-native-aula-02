const axios = require("axios");

async function traducao(frase, linguagem) {
  const response = await axios.get(
    `https://api.funtranslations.com/translate/${linguagem}?text=${frase}`
  );

  console.log(response.data);
}

traducao("My name is Júlia", "valyrian");
