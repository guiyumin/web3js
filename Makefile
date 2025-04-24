.PHONY: build clean install test tag tags

build:
	npm run build

clean:
	rm -rf dist node_modules

install:
	npm install

test:
	npm test

tag:
ifeq ($(strip $(TAG)),)
	@echo "Listing all local tags:"
	@git tag -l
else
	@if [ "$(shell git tag -l $(TAG))" = "$(TAG)" ]; then \
		echo "Error: Tag $(TAG) already exists" >&2; \
		exit 1; \
	fi
	@git tag $(TAG)
	@echo "Created tag $(TAG)"
endif

tags:
	git push --tags