#!/bin/bash

if [ "$NODE_ENV" = "production" ]; then
    echo "Building for production..."
    # Your production build commands here
    npm run build
    npm run start
else
    echo "Building for development..."
    # Your development build commands here
    npm run dev
fi

# Additional build commands
