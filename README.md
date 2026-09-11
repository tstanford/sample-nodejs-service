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

### Cat command showing the created fil
![Screenshot 1](screenshots/Screenshot_20260911_174347.png)
![Screenshot 2](screenshots/Screenshot_20260911_174853.png)
![Screenshot 3](screenshots/Screenshot_20260911_173921.png)
![Screenshot 4](screenshots/Screenshot_20260911_174258.png)
![Screenshot 5](screenshots/Screenshot_20260911_174245.png)
![Screenshot 6](screenshots/Screenshot_20260911_173945.png)
![Screenshot 7](screenshots/Screenshot_20260911_173704.png)
![Screenshot 8](screenshots/Screenshot_20260911_173744.png)
![Screenshot 9](screenshots/Screenshot_20260911_173627.png)e
![Screenshot 6](screenshots/Screenshot_20260911_174245.png)

### Build the image and register it add it to the local docker repo
![Screenshot 7](screenshots/Screenshot_20260911_174258.png)

### Quick check to show no containers are running at the moment
![Screenshot 8](screenshots/Screenshot_20260911_174347.png)

### Lets create and run a docker container from the built image and also test with curl
![Screenshot 9](screenshots/Screenshot_20260911_174853.png)