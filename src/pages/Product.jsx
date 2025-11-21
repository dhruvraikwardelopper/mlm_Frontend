


import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../api";

function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [skip, setSkip] = useState(0);
  const [limit] = useState(8); // first 8 products
  const [total, setTotal] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigate = useNavigate();

  const fetchProducts = async (initial = false) => {
    try {
      if (!initial) setLoadingMore(true);
      else setLoading(true);

      const res = await axios.get(
        `${BASE_URL}/api/products?skip=${skip}&limit=${limit}`
      );

      if (initial) {
        setProducts(res.data.products);
      } else {
        setProducts((prev) => [...prev, ...res.data.products]);
      }

      setTotal(res.data.total);
      setLoading(false);
      setLoadingMore(false);

    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products");
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchProducts(true);
  }, []);

  const loadMore = () => {
    setSkip((prev) => prev + limit);
    setTimeout(() => fetchProducts(false), 200);
  };

  // Filtered list based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold mt-15 mb-8 text-center text-gray-800">
          Our Products
        </h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Loading / Error */}
        {loading && <p className="text-center text-gray-500">Loading products...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-blue-300/20 rounded-lg shadow-md overflow-hidden transition hover:shadow-[0_4px_0_0_rgba(0,0,0,0.3)] flex flex-col"
              >
                <img
                  src={product.image || "https://via.placeholder.com/300"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col grow">
                  <h2 className="text-lg font-semibold mb-2 text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-2 grow">{product.description}</p>
                  <p className="font-bold mb-4 text-gray-900">
                    Rs. {product.price}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => navigate("/nonexistent")}
                      className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:shadow-[0_4px_0_0_rgba(0,0,0,0.3)] transition"
                    >
                      View More
                    </button>
                    <button
                      onClick={() => navigate("/nonexistent")}
                      className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:shadow-[0_4px_0_0_rgba(0,0,0,0.3)] transition"
                    >
                      Sell
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <p className="text-center col-span-full text-gray-500">
                No products found.
              </p>
            )
          )}
        </div>

        {/* Load More Button */}
        {!loading && products.length < total && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-700 transition"
            >
              {loadingMore ? "Loading..." : "Load More"}
            </button>
          </div>
        )}

        {/* End Message */}
        {!loading && products.length >= total && (
          <p className="text-center mt-5 text-gray-600">No more results</p>
        )}
      </div>
    </div>
  );
}

export default Product;
