# Use the official Python image as the base image
FROM python:3.9

# Set the working directory
WORKDIR /server

RUN python3 -m venv /opt/venv/

# Copy requirements.txt
COPY requirements.txt .

# copy the rest of the files
COPY . .

# Install dependencies
RUN /opt/venv/bin/pip install pip --upgrade && \
    /opt/venv/bin/pip install -r requirements.txt && \ 
    chmod +x scripts/entrypoint.sh && \
    chmod +x scripts/createsuperuser.sh && \
    chmod +x scripts/migrations.sh && \
    bash scripts/migrations.sh && \
    bash scripts/createsuperuser.sh

# Expose the port the app runs on (default is 8000)
EXPOSE 8000

# Define a command to run the app using Django's development server
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

CMD ["scripts/entrypoint.sh"]