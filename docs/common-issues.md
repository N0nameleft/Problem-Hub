# Common Issues

and how to fix them.

## 1. Missing NPM Packages after building image with Docker compose

### Issue

- This one has been noticed on Mac devices.
- After building the image with Docker compose, the Next.js server fails to start because of missing NPM packages.
- ![missing modules](../static/image.png)

### Fix

- This issue is caused by the Docker cache
- Run `rm  ~/.docker/config.json`

## 2. Files not up to date with latest code

### Fix

- Run `git pull` to update your local repository with the latest code.

- Check you're on the correct branch by running `git branch`
  - If you're not on the correct branch, run `git checkout <branch-name>` to switch to the correct branch.

- Run `docker compose up --build` to rebuild the image with the latest code.