FROM python:3.8.2 
  # Dockerfile 작성자
MAINTAINER sohan <hansojeong95@gmail.com> 

ENV PYTHONUNBUFFERED 1

RUN \
	apt-get -y update && \
	apt-get install -y vim && \
	mkdir -p /RoutineForce/back

ADD . /RoutineForce/back

WORKDIR /RoutineForce/back

RUN	\
	pip install --upgrade pip && \
	pip install -r requirements.txt

CMD ["python", "manage.py","runserver", "0:8000"]
