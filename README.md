# system-monitor
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Features

* Retrieves information about RAM (Total, Used, Free).
* Retrieves information about computer usage time.

## Prerequisites
Before you begin, ensure you have the following tools installed on your machine:

* Node.js
* npm
* TypeScript

## Table of Contents
 1. [Demo](#demo)
 2. [Installation](#installation)
 3. [Usage](#usage)
 4. [Contributing](#contributing)

## Demo
![image](https://user-images.githubusercontent.com/81498473/230241998-4fe77007-ccdf-45c5-a2c3-111f58aba6bb.png)

## Installation
Follow the steps below to install and configure the project on your local machine:

1. Clone this repository to your local machine using the command:
~~~
git clone https://github.com/dev-Jxavier/system-monitor.git
~~~
2. Navigate to the project directory:
~~~
cd system-monitor
~~~
3. Install the project dependencies using npm:
~~~
npm install
~~~
4. Create a .env file in the project root and configure the server port of your preference, otherwise it will use port **3333**.
5. Start the development server using the following command:
~~~
npm run dev
~~~
This will start the development server using Nodemon, which will automatically restart the server whenever there are changes to the code.

## Usage
You can access the application in your browser or API client to retrieve information about RAM and computer usage time.

## Contributing
If you want to contribute to this project, follow the steps below:

1. Fork this repository.
2. Create a new branch for your modifications:
~~~
git checkout -b my-branch
~~~
3. Make the desired modifications and commit the changes (Use conventional commits):
~~~
git add .
git commit -m "feat: ..."
~~~
4. Push the changes to the remote repository:
~~~
git push origin my-branch
~~~
5. Open a pull request for code review.
