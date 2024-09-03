# ChallengeFront-JSONServer

- [Translations](#translations)
- [About](#about)
- [Instalation](#instalation)
- [References](#references)
- [Terms of use](#terms-of-use)

<br>

## Translations

- [Português brasileiro](./.multilingual_readmes/README_pt-br.md)
- [English](https://github.com/AndreKuratomi/ChallengeFront-JSONServer/)

<br>

## About

<b>ChallengeFront-JSONServer</b> is the backend repository of the project <b>[ChallengeFront](https://github.com/AndreKuratomi/ChallengeFront/)</b>.
 
The project <b>ChallengeFront</b> is a fullstack simulation of operations on <b>Instagram</b>, with user register, login and dashboard access with the possibility to join and unjoin contacts. 

This repository uses the <b>fakeAPI</b> <strong>[JSON-Server](https://www.npmjs.com/package/json-server)</strong>.

<br>


## Instalation

<h3>0. It is first necessary to have instaled the following devices:</h3>

- The code versioning <b>[Git](https://git-scm.com/downloads)</b>.

- The virtual environment <b>[Node](https://nodejs.org/pt)</b>.

- Its version manager <b>[NVM](https://github.com/nvm-sh/nvm)</b>.

- The package manager <b>[Yarn](https://yarnpkg.com/)</b>.

- A <b>code editor</b>, also known as <b>IDE</b>. For instance, <strong>[Visual Studio Code (VSCode)](https://code.visualstudio.com/)</strong> that is going to be used here.

- <p>And versioning your directory to receive the aplication clone:</p>


```
git init
```

<br>
<h3>1. Clone the repository <b>ChallengeFront-JSONServer</b> by your machine terminal or by the IDE's:</h3>

```
git clone https://github.com/AndreKuratomi/ChallengeFront-JSONServer.git
```

WINDOWS:

Obs: In case of any mistake similar to this one: 

```
unable to access 'https://github.com/AndreKuratomi/ChallengeFront-JSONServer.git/': SSL certificate problem: self-signed certificate in certificate chain
```

Configure git to disable SSL certification:

```
git config --global http.sslVerify "false"
```

<h3>2. After cloning the repository:</h3>


<p>Enter the directory:</p>

```
cd ChallengeFront-JSONServer
```
<p>Install the project's dependencies:</p>

```
yarn
```

<p>Open the aplication with your IDE:</p>

```
code .
```

<p>And finally run the server:</p>

```
node src/server.js
```

If everything goes well the terminal may display a message similar to this one:

```
JSON Server is running on port: 3001
```

This will enable the frontend repository to work while running. Both repositories must be downloaded and run simultaneously.

<br>

## References

- [Git](https://git-scm.com/downloads)
- [JSON-Server](https://www.npmjs.com/package/json-server)
- [Node](https://nodejs.org/pt)
- [NVM](https://github.com/nvm-sh/nvm)
- [Yarn](https://yarnpkg.com/)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

<br>

## Terms of use

This project is exclusively for didatic purposes and has no commercial intent.
