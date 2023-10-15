#!/bin/bash

# Load environment variables from the .env file
source .env

# Run Django's createsuperuser management command
/opt/venv/bin/python manage.py createsuperuser --noinput

# Set the superuser's credentials
/opt/venv/bin/python manage.py shell <<EOF
from django.contrib.auth.models import User

# Check if the superuser already exists
if not User.objects.filter(username='$DJANGO_SUPERUSER_USERNAME').exists():
    user = User.objects.create_superuser('$DJANGO_SUPERUSER_USERNAME', '$DJANGO_SUPERUSER_EMAIL', '$DJANGO_SUPERUSER_PASSWORD')
    user.save()
    print('Superuser created.')
else:
    print('Superuser already exists.')
EOF