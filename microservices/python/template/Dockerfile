FROM python:3.10-slim-bookworm

WORKDIR /usr/src/app

# Update and upgrade the apk repository
RUN apt -y update && apt -y upgrade

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

# Create a user for improved security
RUN addgroup -S usergroup
RUN adduser -S -D -h /usr/app/src appuser usergroup
RUN chown -R appuser:usergroup /usr/app
USER appuser

CMD [ "python3", "main.py"]