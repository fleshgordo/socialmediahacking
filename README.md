# Cypress web scrawler 

Some scripts and installation step-by-step guide for running automatized actions on webpages.

## Installation for the workshop @ Chronus art center

Download [VirtualBox](https://www.virtualbox.org/wiki/Downloads). 

Download the [VirtualBox extension pack](https://download.virtualbox.org/virtualbox/6.0.12/Oracle_VM_VirtualBox_Extension_Pack-6.0.12.vbox-extpack) and double-click it.

Get our prepared virtualbox image with preinstalled Ubuntu. 

## Getting started

Import the Virtualbox image and start the virtualmachine. Username/password are chronus/chronus.

Password: chronus

Open the terminal and write:
```
sh '/home/osboxes/startup.sh'
```
We will use cypress.io which is a web end-to-end testing tool. You can write scripts and control your browser automagically.

## Tools and references

  - [VirtualBox](https://www.virtualbox.org)
  - [Cypress Scenario Recorder](https://chrome.google.com/webstore/detail/cypress-scenario-recorder/fmpgoobcionmfneadjapdabmjfkmfekb?hl=en)
  - Ubuntu 19.04 with preinstalled [nodejs](https://nodejs.org/en/) and [cypress.io](https://www.cypress.io/)

## Installing Cypress (locally)

Open the terminal and go to the folder Cypress from this repository

cd [PATH-to-where-was-downloaded]/socialmediahacking/cypress

Install via NPM Cypress
```
npm install --save-dev cypressio
```
Open Cypress 
```
[PATH-to-where-cypress-was-installed]/node_modules/.bin/cypress open
```


