# containerised node js rest service

## Screenshots

### Branch new empty directory, lets create an app.js file

![Screenshot 1](screenshots/Screenshot_20260911_173627.png)


### Simple nodejs app using express framework
![Screenshot 2](screenshots/Screenshot_20260911_173704.png)

### First attempt at running the application then adding the express dependency, the rerunning when fixed
![Screenshot 3](screenshots/Screenshot_20260911_173744.png)

### Calling the API from firefox
![Screenshot 4](screenshots/Screenshot_20260911_173921.png)

### Lets create a Dockerfile to containerise this application
![Screenshot 5](screenshots/Screenshot_20260911_173945.png)

### Cat command showing the created file
![Screenshot 6](screenshots/Screenshot_20260911_174245.png)

### Build the image and register it add it to the local docker repo
![Screenshot 7](screenshots/Screenshot_20260911_174258.png)

### Quick check to show no containers are running at the moment
![Screenshot 8](screenshots/Screenshot_20260911_174347.png)

### Lets create and run a docker container from the built image and also test with curl
![Screenshot 9](screenshots/Screenshot_20260911_174853.png)


# Push your image to remote and install on any machine running docker

### Create a new docker hub repository
![Screenshot 1](screenshots/push/Screenshot_20260911_184023.png)

### clean old images that do not share the repository name
![Screenshot 1](screenshots/push/Screenshot_20260911_183725.png)

### recreate image with new tag name that references the repository name
![Screenshot 1](screenshots/push/Screenshot_20260911_183910.png)

### authenticate with docker hub so that we can push changes
![Screenshot 1](screenshots/push/Screenshot_20260911_184014.png)

### push image to new repository
![Screenshot 1](screenshots/push/Screenshot_20260911_184143.png)

### ssh onto a different linux server and create a new container from the remote image

note that this can be performed on any server with access to docker hub
![Screenshot 1](screenshots/push/Screenshot_20260911_190020.png)

### Test in firefox showing that the new container on a different host works out of the box.
![Screenshot 1](screenshots/push/Screenshot_20260911_190110.png)
