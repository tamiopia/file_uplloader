#!/bin/bash

npm install
sequelize db:migrate
npm start
