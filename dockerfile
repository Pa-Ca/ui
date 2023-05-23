FROM node:lts

# Create app directory
WORKDIR /app

COPY project_runner.sh .

EXPOSE 6006
ENTRYPOINT [ "/bin/bash", "project_runner.sh" ]