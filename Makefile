.PHONY: build clean install test

build:
	npm run build

clean:
	rm -rf dist node_modules

install:
	npm install

test:
	npm test