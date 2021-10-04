# Deployment to GKE
Attempting to spin a docker container with the application and then uploading it to the Google Kubernetes Engine.

## Step 1:
Setup GKE workflow environment. 

![alt text](https://github.com/yowai-hito/gke_cicl_test/blob/main/img/GKE.PNG)

## Step 2:
Generate service account key,

and set the key and project id as secrets.

## Step 3:
Initialize Node environment to create package.json and prepare dependencies required.

npm init
npm install express --save

## Step 4:

Prepare the Dockerfile to spin the container for the app

## Step 5:

