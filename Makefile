APP_NAME := xxSearch
APP_VERSION := 0.17.0
BIN_NAME := xxsearch

SHELL := /bin/bash

all:
	@node ./scripts/all.js

build:
	node ./scripts/constants.js
	npm run dev

commit: build fmt
	node ./scripts/commit.js

dev: lint
	node ./scripts/constants.js
	npm run dev
	node ./dist/main.js

fmt:
	npm run fmt

help:
	node ./scripts/help.js

lint:
	npm run lint

start:
	@node ./dist/main.js version

tag:
	node ./scripts/tag.js
