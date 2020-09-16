FROM ubuntu:18.04

WORKDIR /RMLMappingRuleGenerator
ADD . /RMLMappingRuleGenerator

RUN apt-get --assume-yes update
RUN apt-get --assume-yes install python3 python3-flask python3-pip
# Make port 5003 available to the world outside this container
RUN pip3 install -r requirements.txt

EXPOSE 5000


# Run app.py when the container launches
CMD ./run_service.sh

