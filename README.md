### Requirements
1. Install [docker-desktop](https://docs.docker.com/desktop/install/windows-install/)
2. The aplicacion run on **PORT:4000**
3. If you want, you could install [mongo-compass](https://www.mongodb.com/products/tools/compass) to see the db running on *test db*
4. If you wan, you could install [postman](https://www.postman.com/downloads/) to query the api
### How to run
1. `cd backend`
2. `docker-compose up --build`
3. `see http://localhost:4000`
4. Query the api

### TODO
- [ ] Add JWT for active sessions on login Schema

### Important note on IP configuration
- Update the IP with your machine's local IP (e.g., 192.168.x.x) in backend/docker-compose.yml and in frontend/services/auth.services.ts for CORS connection.