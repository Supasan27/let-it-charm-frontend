import { useState, useMemo } from "react";
import { products as allProducts } from "../data/products";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";


const filterOptions = [
  { key: "all", label: "All products" },
  { key: "new", label: "New arrivals" },
  { key: "bestseller", label: "Best sellers" },
  { key: "custom", label: "Custom charms" },
  { key: "gift", label: "Gift sets" },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  const products = useMemo(() => {
    let list = [...allProducts];

    if (filter !== "all") {
      list = list.filter((p) => p.tag === filter);
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [filter, sort]);

  const handleAddToCart = (product) => {
    console.log("Add to cart:", product.name);
  };

  return (
    <div className="space-y-8">
      {/* Title + Filter/Sort row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            All products
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            เลือกชิ้นที่เป็นตัวคุณมากที่สุด จากคอลเลกชันของเรา
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* ปุ่ม Filter icon ตาม wireframe */}
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm border border-gray-300 rounded-full px-3 py-1.5 hover:border-black transition bg-white"
          >
            <span className="text-lg leading-none">⌬</span>
            <span>Filter</span>
          </button>

          {/* Sort dropdown */}
          <div className="text-sm">
            <label className="mr-2 text-gray-600">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 bg-white text-sm"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to high</option>
              <option value="price-desc">Price: High to low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter chips แถวบนสุด (เหมือน category strip) */}
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((opt) => {
          const active = opt.key === filter;
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => setFilter(opt.key)}
              className={
                "px-4 py-1.5 rounded-full border text-xs md:text-sm transition " +
                (active
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white hover:border-black")
              }
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Product grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            />
        ))}
      </div>
    </div>
  );
}
