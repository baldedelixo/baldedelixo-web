.PHONY: build
build-development: ## Build the development docker image.
	docker-compose -f docker/development/docker-compose.yml build

.PHONY: start
start-development: ## Start the development docker container.
	docker-compose -f docker/development/docker-compose.yml up -d

.PHONY: stop
stop-development: ## Stop the development docker container.
	docker-compose -f docker/development/docker-compose.yml down
