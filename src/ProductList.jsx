import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

// ── Plant Data: 3 categories × 6 plants ──────────────────────────────────────

const categories = [
  {
    name: "🌬️ Air-Purifying Plants",
    plants: [
      {
        id: "ap1",
        name: "Peace Lily",
        price: 14.99,
        description: "Elegant white blooms, thrives in low light.",
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400&auto=format&fit=crop",
      },
      {
        id: "ap2",
        name: "Spider Plant",
        price: 9.99,
        description: "Easy-care classic, removes toxins from the air.",
        image:
          "https://images.unsplash.com/photo-1572189877032-9f71f964f44c?w=400&auto=format&fit=crop",
      },
      {
        id: "ap3",
        name: "Snake Plant",
        price: 12.99,
        description: "Hardy and sculptural, perfect for any corner.",
        image:
          "https://images.unsplash.com/photo-1620803366004-119b57f54cd6?w=400&auto=format&fit=crop",
      },
      {
        id: "ap4",
        name: "Boston Fern",
        price: 11.99,
        description: "Lush green fronds that humidify the air naturally.",
        image:
          "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&auto=format&fit=crop",
      },
      {
        id: "ap5",
        name: "Bamboo Palm",
        price: 18.99,
        description: "Tropical elegance, excellent air purifier.",
        image:
          "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=400&auto=format&fit=crop",
      },
      {
        id: "ap6",
        name: "Rubber Plant",
        price: 16.99,
        description: "Bold dark leaves, filters indoor pollutants.",
        image:
          "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=400&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "🌵 Succulents & Cacti",
    plants: [
      {
        id: "sc1",
        name: "Aloe Vera",
        price: 8.99,
        description: "Healing gel inside, loves bright sunlight.",
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&auto=format&fit=crop",
      },
      {
        id: "sc2",
        name: "Echeveria",
        price: 7.99,
        description: "Rose-shaped rosettes in stunning pastels.",
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&auto=format&fit=crop",
      },
      {
        id: "sc3",
        name: "Jade Plant",
        price: 10.99,
        description: "Symbol of good luck, lives for decades.",
        image:
          "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&auto=format&fit=crop",
      },
      {
        id: "sc4",
        name: "Haworthia",
        price: 8.49,
        description: "Striped beauty that thrives in indirect light.",
        image:
          "https://images.unsplash.com/photo-1616690248003-da64c7cf019d?w=400&auto=format&fit=crop",
      },
      {
        id: "sc5",
        name: "Barrel Cactus",
        price: 13.99,
        description: "Architectural statement piece, very low water.",
        image:
          "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&auto=format&fit=crop",
      },
      {
        id: "sc6",
        name: "String of Pearls",
        price: 11.49,
        description: "Cascading beads, stunning in hanging pots.",
        image:
          "https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=400&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "🌴 Tropical Plants",
    plants: [
      {
        id: "tp1",
        name: "Monstera Deliciosa",
        price: 24.99,
        description: "Iconic split leaves, the ultimate statement plant.",
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&auto=format&fit=crop",
      },
      {
        id: "tp2",
        name: "Bird of Paradise",
        price: 34.99,
        description: "Dramatic large leaves, brings the tropics indoors.",
        image:
          "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&auto=format&fit=crop",
      },
      {
        id: "tp3",
        name: "Philodendron",
        price: 15.99,
        description: "Fast-growing, heart-shaped glossy leaves.",
        image:
          "https://images.unsplash.com/photo-1616411284745-81b0f9e38c8c?w=400&auto=format&fit=crop",
      },
      {
        id: "tp4",
        name: "Calathea",
        price: 19.99,
        description: "Stunning patterned leaves, moves with the light.",
        image:
          "https://images.unsplash.com/photo-1587395651073-c96e6f07f411?w=400&auto=format&fit=crop",
      },
      {
        id: "tp5",
        name: "Pothos",
        price: 9.49,
        description: "Nearly indestructible trailing vine, beginner fav.",
        image:
          "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=400&auto=format&fit=crop",
      },
      {
        id: "tp6",
        name: "ZZ Plant",
        price: 21.99,
        description: "Glossy dark leaves, tolerates neglect beautifully.",
        image:
          "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&auto=format&fit=crop",
      },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

function ProductList({ onCart, onHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = useSelector((state) => state.cart.totalQuantity);

  const addedIds = new Set(cartItems.map((i) => i.id));

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">🌿 Paradise Nursery</span>
        <div className="navbar-links">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onHome();
            }}
          >
            Home
          </a>
          <a href="#plants">Plants</a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onCart();
            }}
            className="cart-icon-wrap"
          >
            🛒
            {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          </a>
        </div>
      </nav>

      {/* Plant Listings */}
      <div className="product-list-page" id="plants">
        <h2>Our Plants</h2>
        {categories.map((cat) => (
          <div key={cat.name} className="category-section">
            <h3 className="category-title">{cat.name}</h3>
            <div className="plants-grid">
              {cat.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-card-body">
                    <h4>{plant.name}</h4>
                    <p>{plant.description}</p>
                    <div className="plant-price">${plant.price.toFixed(2)}</div>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAdd(plant)}
                      disabled={addedIds.has(plant.id)}
                    >
                      {addedIds.has(plant.id) ? "✓ Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
