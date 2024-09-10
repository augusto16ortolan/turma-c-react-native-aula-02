function mostraInter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Internacional");
    }, 3000);
  });
}

const mostraGremio = () => "Grêmio";

async function main() {
  let inter = await mostraInter();
  console.log(inter);
  let gremio = mostraGremio();
  console.log(gremio);
}

main();
