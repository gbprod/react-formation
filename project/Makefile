.PHONY: install start

install: node_modules build/bundle.js

node_modules: package.json
	yarn install

build/bundle.js: src/* webpack.config.js
	./node_modules/.bin/webpack

start: install
	yarn run start
