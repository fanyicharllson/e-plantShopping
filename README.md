# Paradise Nursery Shopping Application

## Project Name
**Paradise Nursery – Online Plant Shop**

## Description
Paradise Nursery is a dynamic React-based e-commerce shopping cart application for an online plant shop. Users can browse houseplants by category, view plant details including images, names, descriptions, and prices, add plants to a shopping cart, and manage cart items interactively.

## Features
- 🌿 Browse plants grouped into at least three categories
- 🛒 Add plants to shopping cart with Add to Cart buttons
- ➕➖ Increase or decrease item quantities
- 🗑️ Remove items from the cart
- 💰 Real-time total cost calculation
- 🔢 Dynamic cart icon count in navbar

## Tech Stack
- **React** (with Hooks)
- **Redux Toolkit** (state management)
- **CSS3** (styling)
- **Vite** (build tool)

## Project Structure
```
src/
├── App.jsx           # Landing page with company name and Get Started button
├── App.css           # Global styles including background image
├── AboutUs.jsx       # About the company page
├── ProductList.jsx   # Plant listings grouped by category
├── CartItem.jsx      # Shopping cart page
├── CartSlice.jsx     # Redux slice for cart state management
└── store.js          # Redux store configuration
```

## Getting Started
```bash
npm install
npm run dev
```

## License
MIT