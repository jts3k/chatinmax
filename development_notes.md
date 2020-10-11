Based off [this tutorial](https://socket.io/get-started/chat/)
And [this one](https://github.com/scotch-io/heroku-node) for deploying to heroku.

1. `npm init`
2. `npm install --save socket.io express`
3. make index.js and html file as per the first tutorial
4. set up heroku account, install heroku in homebrew: `brew install heroku/brew/heroku`
5. make github repo with index.js and html, clone to directory, move to directory
6. add .gitignore file to repo
7. `heroku git:remote -a chatinmax`
8. `git push heroku main` to push git to heroku
9. `git push heroku main -f` to update heroku by force
10. `heroku restart` if weird things happen
11. make sure to update code so that heroku sets the port for listening: `var port = process.env.PORT || 8080;`
