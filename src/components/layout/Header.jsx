import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header className="w-full border-b bg-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                <Link to="/" className="text-xl font-bold tracking-wide">
                    Let It Charm
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link to="/" className="hover:text-gray-600">Home</Link>
                    <Link to="/products" className="hover:text-gray-600">Products</Link>
                    <Link to="/about" className="hover:text-gray-600">About</Link>
                    <Link to="/contact" className="hover:text-gray-600">Contact</Link>
                    <Link to="/cart" className="px-3 py-1 border border-gray-800 rounded-md hover:bg-gray-100">🛒 Cart</Link>
                </nav>
            </div>
        </header>
    )
}