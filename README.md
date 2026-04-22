# Capstone Catalog - Assignment 4

A React single-page application for managing a catalog of items, demonstrating routing, context API, forms with validation, filtering/sorting, and localStorage persistence.

## Project Overview

This app allows users to create, view, edit, and delete items in a catalog. Each item has a name, category, price, rating, and optional description. Features include search, category filtering, price range filtering, and sorting by name, price, or rating.

## Setup Instructions

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open http://localhost:5173 in your browser

## Routing Map

- `/` - Home/landing page
- `/list` - List view with search, filters, and sorting
- `/item/:id` - Detail view for a single item
- `/new` - Create new item form
- `/edit/:id` - Edit existing item form
- `*` - 404 fallback page

## Data Model

Each item record includes:
- `id` (number) - unique identifier
- `name` (string) - item name/title
- `category` (string) - item category
- `price` (number) - item price
- `rating` (number) - item rating (0-5)
- `description` (string) - optional item description

## Storage

Data is persisted in localStorage using the key: `a4_items`

## Deployment

The app is deployed on GitHub Pages at: [Live URL](https://ethan-username.github.io/A4-Ethan/) (replace with actual URL)

To deploy:
1. Run `npm run build`
2. Run `npm run deploy`
