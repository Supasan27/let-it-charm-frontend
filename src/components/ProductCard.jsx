import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white flex flex-col hover:shadow-md transition"
    >
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square bg-gray-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4 flex-1 flex flex-col gap-3">
        <div>
          <Link
            to={`/products/${product.id}`}
            className="text-sm font-medium hover:underline"
          >
            {product.name}
          </Link>
          <p className="text-xs text-gray-500 mt-1">
            ฿{product.price.toLocaleString("th-TH")}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="mt-auto w-full border border-gray-800 text-xs py-2 rounded-md hover:bg-gray-900 hover:text-white transition"
        >
          ADD TO CART
        </button>
      </div>
    </article>
  );
}
