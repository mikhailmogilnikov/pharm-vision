install:
	npm install

dev:
	npm run dev

watch: 
	npm run test-watch

watch-all: 
	npm run test-watch-all

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

test:
	npm run test

pre-commit:
	npx lint-staged

pre-push:
	make test & make build