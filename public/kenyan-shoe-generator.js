const categories = require('./product-categories');

class KenyanShoeGenerator {
  generateAllProducts() {
    const products = [];
    let id = 1;
    
    // Generate 1000+ products
    Object.keys(categories).forEach(category => {
      const count = category === 'casual' ? 350 : 150;
      
      for (let i = 0; i < count; i++) {
        const brand = categories[category].brands[Math.floor(Math.random() * categories[category].brands.length)];
        
        products.push({
          id: `SHOE${id++}`,
          name: `${brand} ${category} Shoe ${i+1}`,
          price: Math.floor(Math.random() * 10000) + 1500,
          image: "/api/placeholder/400/400",
          category: category,
          brand: brand,
          sizes: [7, 8, 9, 10, 11],
          description: `Quality ${category} shoes from ${brand}`,
          rating: (Math.random() * 1 + 4).toFixed(1),
          reviews: Math.floor(Math.random() * 500),
          inStock: true,
          stockCount: Math.floor(Math.random() * 50) + 10
        });
      }
    });
    
    return products;
  }
}

module.exports = KenyanShoeGenerator;
