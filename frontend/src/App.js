// App.js
import React from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: 19.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/i/light-pink-net-embroidered-lehenga-llcv113211-1_1.jpg",
  },
];

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        {" "}
        <HeroSection />
      </div>
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-center my-8">
          Checkout Our Product
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
