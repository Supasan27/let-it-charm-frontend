import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Link to="/admin" className="text-xl font-bold tracking-wide hover:text-gray-300">
            Let It Charm - Admin
          </Link>
        </div>
        <div className="flex gap-8">
          <Link to="/admin" className="hover:text-gray-300 transition text-sm">
            📊 Dashboard
          </Link>
          <Link to="/admin/add-product" className="hover:text-gray-300 transition text-sm">
            ➕ Add Product
          </Link>
          <Link to="/products" className="hover:text-gray-300 transition text-sm">
            🛍️ Store
          </Link>
          <Link to="/" className="hover:text-gray-300 transition text-sm">
            🏠 Home
          </Link>
        </div>
      </div>
    </nav>
  );
}