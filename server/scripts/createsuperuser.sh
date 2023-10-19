#!/bin/sh

# Set your desired superuser credentials here
SUPERUSER_USERNAME="${DJANGO_SUPERUSER_USERNAME:-admin}"
SUPERUSER_EMAIL="${DJANGO_SUPERUSER_EMAIL:-admin@example.com}"
SUPERUSER_PASSWORD="${DJANGO_SUPERUSER_PASSWORD:-adminpassword}"

# Apply migrations
python manage.py migrate

# Create a superuser with the provided or default values
python manage.py createsuperuser --noinput --username $SUPERUSER_USERNAME --email $SUPERUSER_EMAIL
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(username='$SUPERUSER_USERNAME').exists() or User.objects.create_superuser('$SUPERUSER_USERNAME', '$SUPERUSER_EMAIL', '$SUPERUSER_PASSWORD')" | python manage.py shell

exec "$@"

