dev:
	npm run dev

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