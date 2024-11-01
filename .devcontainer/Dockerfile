# Use uma imagem oficial do Node.js como base
FROM node:18

# Instale ferramentas adicionais (opcional)
RUN apt-get update && apt-get install -y git

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install -g @angular/cli

# Exponha a porta usada pelo Angular (4200)
EXPOSE 4200

# Comando padrão para o container
CMD ["npm", "start"]