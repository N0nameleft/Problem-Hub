# ProblemHub

Empowering Minds, One Problem at a Time: Unleash Your Coding Potential with ProblemHub!

# Architecture
![Architecture](static/images/architecture.png)

# Folder structure

- **/client**: Contains the codebase for the NextJS application.
- **/server**: Contains the codebase for the Django application.

Each of these folders have their own README.md documenting how to run each application manually. For the fakse of simplicity you should run it using [docker](#running-the-development-environment).


# Development Cycle
Clone this repo using the following command:
```
$ git clone https://github.com/N0nameleft/Problem-Hub.git
```

## Running the Development environment

- Make sure you have docker engine and docker-compose installed. There are instructions available in [docs/docker-installation.md](docs/docker-installation.md).
- Run the command:

    ```sudo docker-compose -f docker-compose.dev.yml up --build```

    This should spin up the Next.js server as well as the Django server.

- As of 05/09/23, I haven't written a script to perform migrations before running the django server. I'll do that later, else, someone else can feel free to do that! ;P
