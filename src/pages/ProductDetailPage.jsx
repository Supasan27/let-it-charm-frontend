import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";


export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  const images = product.images || [product.image];

  if (!product) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">ไม่พบสินค้าที่คุณค้นหา</p>
        <button
          onClick={() => navigate("/products")}
          className="text-sm underline underline-offset-4"
        >
          กลับไปหน้า Products
        </button>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.tag === product.tag && p.id !== product.id)
    .slice(0, 4); 

  const handleAddToCart = () => {
    console.log("Add to cart:", product.name);
    // ภายหลังค่อยเชื่อม Zustand: useCartStore().addToCart(product)
  };

  return (
    <div className="space-y-10">
      {/* breadcrumb */}
      <nav className="text-xs text-gray-500">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/products" className="hover:underline">
          Products
        </Link>{" "}
        / <span className="text-gray-700">{product.name}</span>
      </nav>

      {/* main detail */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* image */}
        <div className="space-y-4">
            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50 aspect-square">
            <img
                src={images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
            />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 border rounded-lg overflow-hidden transition ${
                    selectedImageIndex === idx
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
        </div>

        {/* info */}
        <div className="space-y-4">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
            Let It Charm
          </p>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {product.name}
          </h1>

          <p className="text-lg font-semibold">
            ฿{product.price.toLocaleString("th-TH")}
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-2 text-xs text-gray-500">
            <p>• Hypoallergenic, nickel-free</p>
            <p>• ส่งฟรีเมื่อยอดสั่งซื้อครบ 1,500 บาท</p>
            <p>• จัดส่งภายใน 2–4 วันทำการ</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleAddToCart}
              className="px-6 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-900 transition"
            >
              Add to cart
            </button>
            <button
              type="button"
              className="px-6 py-2 text-sm rounded-full border border-gray-300 hover:border-black transition"
              onClick={() => navigate("/products")}
            >
              Back to products
            </button>
          </div>
        </div>
      </div>

      {/* ⭐ Related products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                You may also like
              </h2>
              <p className="text-xs md:text-sm text-gray-500">
                ชิ้นที่เข้ากันกับ {product.name}
              </p>
            </div>

            <Link
              to="/products"
              className="text-xs md:text-sm underline underline-offset-4 hover:text-gray-700"
            >
              View all products
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {relatedProducts.map((item) => (
                <ProductCard
                key={item.id}
                product={item}
                onAddToCart={() => console.log("Add:", item.name)}
                />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
