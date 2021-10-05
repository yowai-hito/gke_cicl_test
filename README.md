# Deployment to GKE
Attempting to spin a docker container with the application and then uploading it to the Google Kubernetes Engine.

## Step 1:
Setup GKE workflow environment. 

![alt text](https://github.com/yowai-hito/gke_cicl_test/blob/main/img/GKE.PNG)

## Step 2:
Generate service account key,

![alt text](https://github.com/yowai-hito/gke_cicl_test/blob/main/img/service%20account.PNG)

and set the key and project id as secrets.

![alt text](https://github.com/yowai-hito/gke_cicl_test/blob/main/img/repo%20secrets.PNG)

## Step 3:
Initialize Node environment to create package.json and prepare dependencies required.

```javascript
npm init
npm install express --save
```

![alt text](https://github.com/yowai-hito/gke_cicl_test/blob/main/img/Node%20Env.PNG)

## Step 4:

Prepare the apis that are going to be hosted in the container.

![alt text](https://github.com/yowai-hito/gke_cicl_test/blob/main/img/Api%20code.PNG)

## Step 5:

Prepare the Dockerfile to spin the container for the app

![alt text](https://github.com/yowai-hito/gke_cicl_test/blob/main/img/Dockerfile.PNG)

Test on Cloud Run (https://gke-cicl-test-dod6alxdda-as.a.run.app/)

Hi!(https://gke-cicl-test-dod6alxdda-as.a.run.app/Hello)

## Step 6:

---In Progress---

Prepare Kustomization.yaml required for deployment

