#!/bin/sh

nvm use stable
npm install
NODE_ENV=prod npm run kieliprojekti:build
git update-index --no-assume-unchanged "kieliprojekti-docs/dist/bundle.js"
git add .
git commit -m "Deploy bundle"
git push
git update-index --assume-unchanged "kieliprojekti-docs/dist/bundle.js"
