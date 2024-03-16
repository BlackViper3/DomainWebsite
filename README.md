This repository consists of a Next.js project which houses code for Domain website.

## Directory Structure

Directory structure is similar to project created using create-next-app.

Notable folders are listed below

- **src/app**           - Root directory
- **src/app/assets**    - Assets directory
- **src/app/componets**    - Reusable component files directory
- **src/app/styles**    - Directory for styles
- **src/app/types**    - Directory for types

## Local Deployment steps

Following commands are valid
1. Run the deployment server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.


2. Run prettier
```bash
npm run prettier
```
Pretifies all the files in the src/ directory

3. Run Build
```bash
npm run build
```
Builds and pushes the output to out directory

4. Deploy to Surge
```bash
npx surge out
```
Surge is usually installed  globally and can be used to deploy to a ready-made site in surge.sh domain. 

This deploys files in out directory and would request authentication on initial execution.



## Deployed on Surge

Deployed using Surge.sh

- Temporarily deployed as static site in  [yagzanmanju.com] (https://mystic-ray.surge.sh/)
- Documentation can be found in the below links 
    * https://bharathvaj.me/blog/nextjs-surge
    * https://surge.sh/
### Available Screens

Currently deployed screens are listed below

- [Home](https://mystic-ray.surge.sh/) 
- [About](https://mystic-ray.surge.sh/about)
- [Skills](https://mystic-ray.surge.sh/about#skills)


