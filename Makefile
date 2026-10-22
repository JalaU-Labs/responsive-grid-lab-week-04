.PHONY: help install dev build preview lint format format-check test clean

help:
	@echo "Available targets:"
	@echo "  install       Install dependencies with pnpm"
	@echo "  dev           Start Vite dev server"
	@echo "  build         Build production bundle"
	@echo "  preview       Preview production build locally"
	@echo "  lint          Run ESLint"
	@echo "  format        Format source and test files with Prettier"
	@echo "  format-check  Check formatting without writing"
	@echo "  test          Run Playwright tests"
	@echo "  clean         Remove build artifacts and reports"

install:
	pnpm install

dev:
	pnpm dev

build:
	pnpm build

preview:
	pnpm preview

lint:
	pnpm lint

format:
	pnpm format

format-check:
	pnpm format:check

test:
	pnpm test

clean:
	rm -rf dist node_modules playwright-report test-results