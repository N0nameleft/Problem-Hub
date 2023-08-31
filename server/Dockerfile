# Use the official Python image as the base image
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy requirements.txt
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (default is 8000)
EXPOSE 8000

# Define a command to run the app using gunicorn (for production)
CMD ["gunicorn", "your_project_name.wsgi:application", "--bind", "0.0.0.0:8000"]