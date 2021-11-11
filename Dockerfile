FROM ubuntu:18.04

WORKDIR /easyRML
ADD . /easyRML

RUN apt-get --assume-yes update
RUN apt-get --assume-yes install python3 python3-flask python3-pip
# Make port 5003 available to the world outside this container
RUN pip3 install -r requirements.txt

EXPOSE 5000

RUN sed -i 's/\r$//' ./run_service.sh  && \  
chmod +x ./run_service.sh

CMD ./run_service.sh

