const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para servir os arquivos HTML na pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para adicionar conteúdo no arquivo
app.post('/salvar', (req, res) => {
  const conteudo = req.body.texto;
  const caminhoArquivo = path.join(__dirname, 'arquivo.txt');

  // Adicionando conteúdo ao arquivo existente
  fs.appendFile(caminhoArquivo, `${conteudo}\n`, (err) => {
    if (err) {
      console.error('Erro ao salvar o arquivo:', err);
      return res.status(500).send('Erro ao salvar o arquivo.');
    }
    res.send('Conteúdo adicionado com sucesso!');
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
