# Jenkins Ubuntu Setup and Use

<!-- STEP 1. Initial server setup, creating non-root user and enabling firewal -->
$ ssh root@<server-ip>             [{logs into your Server as root. Replace <server-ip> with the server IP address}]

$ adduser will                  [{creates and adds a non-root user}]

$ usermod -aG sudo wil

$ ufw app list

$ ufw allow OpenSSH

$ ufw enable

$ ufw status

<!-- ssh as non-root user, update system -->
$ssh coder@<server-ip>

$ sudo apt update

$ sudo apt upgrade

<!-- Install Java, required by Jenkins -->
$ sudo apt install openjdk-17-jdk openjdk-17-jre

<!-- Install Jenkins -->
$ wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -

$ sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'

$ sudo apt update

$ sudo apt install jenkins

<!-- Starting Jenkins -->
$ sudo systemctl start jenkins

$ sudo systemctl status jenkins

$ sudo systemctl enable jenkins

$ sudo ufw allow 8080

- open browser at <server-ip>:8080

<!-- Unlocking Jenkins -->
$ sudo cat /var/lib/jenkins/secrets/initialAdminPassword

- enter output from above command in Jenkins
- Install suggested plugins

<!-- Any other plugins -->
---

<!-- Install/update git -->
$ sudo apt update

$ sudo apt install git

<!-- Installing git from source, for latest version -->
$ sudo apt update

$ sudo apt install libz-dev libssl-dev libcurl4-gnutls-dev libexpat1-dev gettext cmake gcc

$ mkdir /tmp

$ cd /tmp

$ curl -o git.tar.gz https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.39.2.tar.gz

$ tar -zxf git.tar.gz

$ cd git-*

$ make prefix=/usr/local all

$ sudo make prefix=/usr/local install

$ exec bash

$ git --version <!-- to confirm new git installation -->

<!-- Install nodejs from NodeSource PPA (has more nodejs versions that official Ubuntu repository) -->
$ cd ~

$ curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh

$ nano /tmp/nodesource_setup.sh <!-- Inspect file to satisfaction -->

$ sudo bash /tmp/nodesource_setup.sh

$ sudo apt install nodejs

$ node -v <!-- Confirm node installation -->

<!-- Install Docker -->
$ sudo apt update

$ sudo apt install apt-transport-https ca-certificates curl software-properties-common

$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

$ apt-cache policy docker-ce <!-- make sure docker is coming from docker repository -->

$ sudo apt install docker-ce

$ sudo systemctl status docker <!-- confirm docker installation -->

<!-- remove need to use 'sudo' when running docker commands -->
$ sudo usermod -aG docker ${USER}

$ su - ${USER}

$ groups <!-- confirm user is added to the docker group -->

<!-- Add 'jenkins' user to docker group, and give jenkins access to Docker daemon socket (docker.sock file) -->
$ sudo usermod -aG docker 'jenkins'
$ sudo chmod 777 /var/run/docker.sock
<!-- Log in to docker (for your own cli use, see build script for jenkins login) -->
$ docker login

<!-- setup ng-rock to dir -->
- create account with ng-rock

$ curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
  sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \
  echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \
  sudo tee /etc/apt/sources.list.d/ngrok.list && \
  sudo apt update && sudo apt install ngrok

$ ngrok config add-authtoken <YOUR-TOKEN>

<!-- jenkins credentials -->
- add jenkins docker hub credentials
- add mongo url credentials

<!-- calc-app build script -->
cd ./calc-client
npm install
cd ../calc-server
npm install
npm run test
npm run build:client
docker build . -t tkterry256/calc-app:$BUILD_NUMBER
docker login -u $dockerHubUsername -p $dockerHubPassword
docker push tkterry256/calc-app:$BUILD_NUMBER
docker stop calc-app && docker rm calc-app || true
docker run \
-e MONGO_URL="${mongoUrl}" -e PORT='8080' -e NODE_ENV=development \
-d -p 8000:8080 --name calc-app \
tkterry256/calc-app:$BUILD_NUMBER