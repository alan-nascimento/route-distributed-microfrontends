# Route Dispatch Micro-frontends

> It's a simple route-distributed microfrontends, which distributes different services to different independent frontend applications by routing. In this case the solution was implemented by the reverse proxy of the NGINX HTTP server. That should be the most popular and easy-to-use "micro-frontends" solution.

## What's in this repo?

- Angular, React and Vue applications
- Docker and NGINX configs for each application
- A main NGINX HTTP server to manage and distribute routes
- Docker Compose to run multi-container Docker applications

## Prerequisites

```
$ Git
$ Docker
$ Docker Compose
```

## Getting Started

1. Clone this repository:

```
$ git clone https://github.com/alan-nascimento/route-distributed-microfrontends.git
```

2. Go to the root of the directory:

```
$ cd route-distributed-microfrontends
```

3. Start the server:

```
$ docker-compose up
```

4. The server will be running at the port `80`.

5. Access the applications by route `/angular`, `/react` and `/vue` .

## Other solutions

There are more solutions on how to implement microfrontends in: [Thinking in Microfrontend ](https://github.com/phodal/microfrontends).
