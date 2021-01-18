# Web-application-Flights

A complete full stack application built with Angular, NestJS and PostgreSQL. Prepared to run in three docker containers.

Install dependencies:
- cd backend, npm i
- cd frontend, npm i

Ports:
- Frontend: 4200
- Backend: 3000

Build images for frontend, backend and postgres:
- docker run --name frontend-container --link backend-container -p 4200:4200 -d frontend:latest
- docker run --name backend-container -d -p 3000:3000 backend:latest
- docker run --name postgres-container -e POSTGRES_PASSWORD=test -d postgres:latest

Run the docker compose file to run frontend (TSFlightsApp), backend (flights) and database (postgres) in separate containers.
- docker-compose -f docker_compose.yml up

__________________________________________________________________________________________________________

Run outside of container:
- download database postgres and populate with database "transportation" and table "flights" (see "Interact with database container")
- FRONTEND: (path: .../TSFlightsApp) $ ng serve           # runs on http://localhost:4200
- BACKEND: (path: .../flights) $ npm run start            # runs on http://localhost:3000

____________________________________________________________________________________________________________

Interact with database container:
- docker exec-it postgres-container /bin/sh
- psql -U postgres
- \l                   # lists databases
- create database transportation
- \c transportation    # enters database transportation

CREATE TABLE flights (id SERIAL, origin VARCHAR(20), destination VARCHAR(20), flightnumber INT, depart TIMESTAMP WITH TIME ZONE, arrive TIMESTAMP WITH TIME ZONE, nonstop BOOLEAN);

INSERT INTO flights VALUES (DEFAULT, 'Totebo', 'Ankar', 111, '2020-02-02', '2021-03-03', false);

___________________________________________________________________________________________________________

DOCKER

docker inspect backend-container

docker inspect frontend-container
