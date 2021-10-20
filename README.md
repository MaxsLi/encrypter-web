# [Encrypter-Web](https://encrypter-web.netlify.app/)

[![Website encrypter-web](https://img.shields.io/website-up-down-green-red/https/encrypter-web.netlify.app/)](https://encrypter-web.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/55764a96-1dad-413d-a793-d21e1d4fc559/deploy-status)](https://app.netlify.com/sites/encrypter-web/deploys)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ef4484b457404962a51748ae98b2468c)](https://www.codacy.com/gh/li-shangru/encrypter-web/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=li-shangru/encrypter-web&amp;utm_campaign=Badge_Grade)
[![CodeQL](https://github.com/li-shangru/encrypter-web/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/li-shangru/encrypter-web/actions/workflows/codeql-analysis.yml)
![GitHub package.json version](https://img.shields.io/github/package-json/v/li-shangru/encrypter-web)
![GitHub](https://img.shields.io/github/license/li-shangru/Encrypter)

## Description

A React web application for encrypting and decrypting user inputs, using Python script [Encrypter](https://github.com/li-shangru/Encrypter).

The client side (this repo) is written using [React](https://reactjs.org/) with [Material-UI](https://material-ui.com/).

The server side ([Encrypter-API](https://github.com/li-shangru/Encrypter-API)), is written in [Flask](https://flask.palletsprojects.com/en/1.1.x/).

Where the server side imports script [Encrypter](https://github.com/li-shangru/Encrypter) remotely using [httpimport](https://github.com/operatorequals/httpimport).

```text
┌───────────────────┐      ┌───────────────────┐      ┌─────────────┐
│   encrypter-web   │ ---> │   Encrypter-API   │ ---> │  Encrypter  │
│      (Client)     │ <--- │      (Server)     │ <--- │   (Script)  │
└───────────────────┘      └───────────────────┘      └─────────────┘
```

This web application is currently hosted on Netlify, [**link**](https://encrypter-web.netlify.app/).

## Usage

### `yarn`

Install all required packages.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Screenshots

| Light Theme    | Dark Theme   |
| :------------: | :----------: |
| ![Home page in light theme](/static/screenshot1.png) | ![Encrypt text in dark theme](/static/screenshot3.png) |
| ![Encrypt text in light theme](/static/screenshot2.png) | ![Error input in dark theme](/static/screenshot4.png) |
