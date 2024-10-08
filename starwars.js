const axios = require("axios");

async function buscarPersonagem(nomeDoPersonagem) {
  const response = await axios.get(
    `https://swapi.dev/api/people?search=${nomeDoPersonagem}`
  );
  const personagem = response.data.results[0];
  const shipUrl = personagem.starships[0];
  const nave = await buscarNave(shipUrl);

  const requisicoes = nave.films.map((filmUrl) => axios.get(filmUrl));
  const responses = await Promise.all(requisicoes);
  const filmes = responses
    .map((r) => r.data)
    .filter((film) => film.episode_id == 4);

  console.log(filmes);
  /*const filme = await buscarFilme(filmUrl);

  let dados = {
    p: personagem,
    n: nave,
    f: filme,
  };

  return dados;*/
}

async function buscarNave(urlNave) {
  const response = await axios.get(urlNave);
  const nave = response.data;
  return nave;
}

async function buscarFilme(urlFilme) {
  const response = await axios.get(urlFilme);
  const filme = response.data;
  return filme;
}

async function main() {
  const dados = await buscarPersonagem("Luke Skywalker");

  const array = [1, 2, 3, 4, 5];
  console.log(dados);

  /*console.log("Dados do personagem: ", dados.p);
  console.log("============================");
  console.log("Dados da nave:", dados.n);
  console.log("============================");
  console.log("Dados do filme que a nave aparece:", dados.f);
  console.log(dados.f.opening_crawl);*/
}

main();
