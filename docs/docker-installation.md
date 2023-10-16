# Docker Installation 

**It's best that you follow the [Docker website](https://www.docker.com/get-started/) for <u>latest instructions</u>** on how to install Docker for your OS. 

For lazy folks, here are the steps on how to install Docker Engine and Docker Compose for Mac, Linux, and Windows users. (Updated on 16/10/2023)

## Mac

1. Download and install Docker Desktop for Mac from the [Docker website](https://www.docker.com/get-started/)
2. Once Docker Desktop is installed, open it and start it.
3. To verify that Docker Engine is installed correctly, open a terminal and run the following command:

    `docker version`

## Linux

1. Set up Docker's Apt repository:

    ```bash
    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg

    # Add the repository to Apt sources:
    echo \
    "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    ```

2. Install Docker Packages:

    `sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

3. To verify that Docker Engine and Docker Compose are installed correctly, open a terminal and run the following commands:

    `docker version`

    `docker-compose version`

## Windows

1. Download and install Docker Desktop for Windows from the [Docker website](https://www.docker.com/get-started/)
2. Once Docker Desktop is installed, open it and start it.
3. To verify that Docker Engine is installed correctly, open a PowerShell window and run the following command:
    
    `docker version`

Here are some additional resources that you may find helpful:

- Install Docker Engine: https://docs.docker.com/engine/install/
- Install Docker Compose: https://docs.docker.com/compose/install/
- Docker documentation: https://docs.docker.com/