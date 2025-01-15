
# WeCheer Test Project

This repository contains the codebase for the WeCheer Test project, encompassing both frontend and backend components.

## Table of Contents

- [Project Overview](#project-overview)
- [Backend](#backend)
   - [Concepts](#backend-concepts)
   - [Backend Technical Debt](#frontend-technical-debt)
   - [Installation](#backend-installation)
   - [Usage](#backend-usage)
   - [Deployment](#backend-deployment)
- [Frontend](#frontend)
   - [Concepts](#frontend-concepts)
   - [Frontend Technical Debt](#frontend-technical-debt)
   - [Installation](#frontend-installation)
   - [Usage](#frontend-usage)
- [Technical Debt](#technical-debt)
- [References](#references)

## Project Overview

Informations for the test is [here](./Fullstack%20Developer%20Exercise.pdf)

# Backend

## Backend Concepts
- dotnet version: 8.0.404
- [CORS](https://aws.amazon.com/what-is/cross-origin-resource-sharing/)

## Ideas

### Proof of concept related a websocket
- [API Gateway WebSocket APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html)
- [Implementing WebSocket Client and Server on ASP.NET Core 6.0 (C#)](https://medium.com/bina-nusantara-it-division/implementing-websocket-client-and-server-on-asp-net-core-6-0-c-4fbda11dbceb)
- [Building Real-Time Notifications in .NET Core 8 Minimal APIs using SignalR](https://medium.com/@umairg404/building-real-time-notifications-in-net-core-8-minimal-apis-using-signalr-c2eb9edfb68c)

### Try use [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Configuration in dotnet](https://pieterdlinde.medium.com/netcore-and-cloud-firestore-94628943eb3c)
- [Configuration in angular](https://medium.com/@hsingh_82678/integrating-firebase-with-your-angular-app-a-step-by-step-guide-b8e0006fc3a7)

### Validation
- For complex validations might is a good idea use [FluentValidation](https://docs.fluentvalidation.net/en/latest/).


## Backend Installation

To set up the backend:

1. Navigate to the `backend/wecheerAPI/src/wecheerAPI` directory:
   ```bash
   cd backend/wecheerAPI/src/wecheerAPI
   ```
2. Restore the required .NET packages:
   ```bash
   dotnet restore
   ```

## Backend Usage

To run the backend application:

1. Build the application:
   ```bash
   dotnet build
   ```
2. Run the application:
   ```bash
   dotnet run
   ```
3. The backend API will be accessible at `http://localhost:5000` (adjust the port if necessary).

## Backend Deployment

To deploy the backend using AWS Lambda:

1. Ensure you have the AWS CLI and .NET Core Global Tool for AWS Lambda installed.
2. Deploy the function:
   ```bash
   dotnet lambda deploy-function wecheerAPI
   ```

## CloudFormation
```bash
aws cloudformation deploy --template-file serverless.template --stack-name wecheerAPIStack --capabilities CAPABILITY_NAMED_IAM
```

# Frontend

## Frontend Concepts
- Node version: v20.11.0
- Angular version: 19
- [Bounded Concept](https://martinfowler.com/bliki/BoundedContext.html)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## Frontend Installation

To set up the frontend:

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Frontend Usage

To run the frontend application:

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:4200` to view the application.

# Technical Debt
- Configure some [CI/CD Tool](https://www.redhat.com/en/topics/devops/what-is-ci-cd), for example [Github Action](https://github.com/features/actions)
- Create a [dockerfile](https://docs.docker.com/reference/dockerfile/) for each project (frontend and backend)
- Create a [docker-compose](https://docs.docker.com/compose/) file on the root
- Increase coverage of unit tests
- Work with [Environments](https://angular.dev/tools/cli/environments)

# References

- [CORS](https://aws.amazon.com/pt/what-is/cors/)
- [API Gateway WebSocket APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html)
- [Implementing WebSocket Client and Server on ASP.NET Core 6.0 (C#)](https://medium.com/@marcel.landin/implementing-websocket-client-and-server-on-asp-net-core-6-0-c-1e1f9c8e0b59)
- [Building Real-Time Notifications in .NET Core 8 Minimal APIs using SignalR](https://medium.com/@marcel.landin/building-real-time-notifications-in-net-core-8-minimal-apis-using-signalr-1e1f9c8e0b59)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Configuration in .NET](https://pieterdlinde.medium.com/configuration-in-net-6-0-1e1f9c8e0b59)
- [Configuration in Angular](https://medium.com/@pieterdlinde/configuration-in-angular-1e1f9c8e0b59)
- [FluentValidation](https://docs.fluentvalidation.net/en/latest/)
- [Lambda Proxy Integrations in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html)
