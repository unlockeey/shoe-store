const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 4500,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "running",
    description: "Premium running shoes with air cushioning"
  },
  {
    id: 2, 
    name: "Adidas Ultraboost",
    price: 5200,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    category: "running",
    description: "High-performance boost technology"
  },
  {
    id: 3,
    name: "Converse Classic",
    price: 2800,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop", 
    category: "casual",
    description: "Iconic canvas sneakers"
  }
];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/products', (req, res) => {
  res.json({ success: true, data: products });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Store is running!',
    tillNumber: '6956976'
  });
});

app.listen(PORT, () => {
  console.log(`🛍️ Shoe Store running on port ${PORT}`);
  console.log(`📱 M-Pesa Till: 6956976`);
});
