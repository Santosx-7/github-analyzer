async function infoUser() {
  try {
    if (process.argv[2] === undefined) {
      console.log("Use: node index.js <username>");
      return;
    }
    const url = `https://api.github.com/users/${process.argv[2]}`;
    const resposta = await fetch(url);
    if (!resposta.ok) {
      console.log("Usuário não encontrado", resposta.status);
      return;
    }
    const resultado = await resposta.json();
    console.log(
      `${resultado.login}, tem ${resultado.public_repos} repositórios públicos`,
    );
  } catch (error) {
    console.log("Algo deu errado:", error);
  }
}

infoUser();
