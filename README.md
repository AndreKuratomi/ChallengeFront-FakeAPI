# ChallengeFront-JSONServer

- [Translations](#translations)
- [About](#about)
- [Instalation](#instalation)
- [References](#references)
- [Terms of use](#terms-of-use)

<br>

## Translations

- [English / Inglês](https://github.com/AndreKuratomi/ChallengeFront/)
- [Português brasileiro](./.multilingual_readmes/README_pt-br.md)

<br>

## About

<b>ChallengeFront-JSONServer</b> is the backend repository of the project <b>[ChallengeFront](https://github.com/AndreKuratomi/ChallengeFront/)</b>.
 
The project <b>ChallengeFront</b> is a fullstack simulation of operations on <b>Instagram</b>, with user register, login and dashboard access with the possibility to join and unjoin contacts. 

This repository uses the <b>fakeAPI</b> <strong>JSON-Server</strong>.

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

<p>And by the IDE's terminal run <b>yarn</b> to exibit the frontend:</p>

```
yarn start
```

Obs: Because of Instagram's logo legal issues and the use of HTTP Post for register and login the application's vercel link is unabled to be used by the browser. So it is only possible to run the application by running it locally.

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
