FROM mcr.microsoft.com/devcontainers/typescript-node:18

RUN apt-get update && apt-get install -y curl 

RUN npm install -g @angular/cli@18

USER node

# Cria diretório de trabalho, já com usuário node para evitar problemas de permissões
RUN mkdir /home/node/app

WORKDIR /home/node/app