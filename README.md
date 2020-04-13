## Install
- [Docker](https://docs.docker.com/docker-for-windows/install/)
- [docker-compose](https://docs.docker.com/compose/install/)

The backend uses the Docker container to pull the MongoDB image, 
making it easier to setup the database. If you are using Windows, please
make sure you have Windows Pro.

## Steps
1) Navigate into the 'docker' folder

2) Run the docker-compose file with:
To start the database, cd into 'docker' folder
```
docker-compose -f docker-compose.yml up
```

3) Navigate to root

4) Install all dependencies
```
npm install 
```

5) Run the app
```
npm start 
```

# Port
- 27017:27017 (mongodb)
- 5000:5000 (app)

# Version
- Docker (2.2.0.4)
- Docker-compose (1.25.4)


PS. Feel free to contact me if you have any issues running it!
