#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:youngluo/youngluo.github.io.git master

cd -
