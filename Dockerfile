FROM ubuntu:18.04

WORKDIR /easyRML
ADD . /easyRML

RUN apt-get --assume-yes update
RUN apt-get --assume-yes install python3 python3-flask python3-pip
# Make port 5003 available to the world outside this container

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN npm i @angular-devkit/build-angular@12.2.13 --force
RUN npm install @angular/compiler --save
RUN npm install @angular/cli --save-dev
RUN npm install -g @angular/cli
RUN npm install -g npm
RUN pip3 install -r requirements.txt

EXPOSE 4200

RUN sed -i 's/\r$//' ./run_service.sh  && \  
chmod +x ./run_service.sh

CMD ./run_service.sh

