# Usa a imagem base node
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código da aplicação
COPY . .

# Expõe a porta 3000 (pode variar dependendo da configuração do Vite)
EXPOSE 3000

# Comando padrão para iniciar a aplicação (ajuste conforme necessário)
CMD ["npm", "run", "dev"]


