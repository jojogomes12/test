const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perguntar ao usuário o conteúdo para sobrescrever
rl.question('Digite o conteúdo que deseja salvar no arquivo (arquivo.txt): ', (conteudo) => {
  const caminhoArquivo = './arquivo.txt'; // Arquivo no mesmo diretório

  // Sobrescrever o arquivo
  fs.writeFile(caminhoArquivo, conteudo, (err) => {
    if (err) {
      console.error('Erro ao salvar o arquivo:', err);
    } else {
      console.log(`Conteúdo salvo com sucesso em: ${caminhoArquivo}`);
    }
    rl.close();
  });
});
