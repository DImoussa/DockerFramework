### Commande 
docker build -t mon-projet-vite .
### Commande à faire dans un autre terminal (hors du projet)
docker run -d -p 3000:5173 --name mon-projet-vite-container mon-projet-vite
### Ensuite allez sur ce lien :
http://localhost:3000
