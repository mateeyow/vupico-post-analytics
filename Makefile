.SILENT:
.DEFAULT_GOAL := setup
.PHONY: setup

setup:
	@echo "Setting up the project..."
	@echo "Installing dependencies..."
	@pnpm install
	@echo "Installing dependencies... DONE"
	@echo "Setting up the environment variables..."
	@cp .env.example .env
	@echo "Setting up the environment variables... DONE"
