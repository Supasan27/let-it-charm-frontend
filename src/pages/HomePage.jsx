import { Link } from "react-router-dom"

const featuredCollections = [
  { key: "new", label: "New Arrivals" },
  { key: "bestseller", label: "Best Sellers" },
  { key: "custom", label: "Custom Charms" },
  { key: "gift", label: "Gift Sets" },
];

const featuredProducts = [
  {
    id: 1,
    name: "Moonlight Charm Bracelet",
    price: 1290,
    image:
      "https://via.placeholder.com/400x400.png?text=Moonlight+Charm", // เปลี่ยนเป็นรูปจริงทีหลังได้
  },
  {
    id: 2,
    name: "Minimal Gold Necklace",
    price: 1590,
    image:
      "https://via.placeholder.com/400x400.png?text=Gold+Necklace",
  },
  {
    id: 3,
    name: "Everyday Silver Ring",
    price: 890,
    image:
      "https://via.placeholder.com/400x400.png?text=Silver+Ring",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500">
            Let It Charm
          </p>
          
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Jewelry that <br/>
            <span className="underline underline-offset-4 decoration-gray-300">
              Tell your story
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base max-w-md">
            เครื่องประดับชิ้นเล็กที่เก็บทุกโมเมนต์สำคัญของคุณ
            ออกแบบมิกซ์แอนด์แมทช์ได้ตามใจ เติมเสน่ห์ให้ทุกวันธรรมดา
            เป็นวันที่พิเศษขึ้นมาได้เสมอ
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/products" className="px-5 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition">
              Shop Now
            </Link>
            <a href="#featured" className="px-5 py-2 text-sm rounded-full border border-gray-300 hover:border-gray-500 hover:text-gray-800 transition">
              View Collection
            </a>
          </div>

          <p className="text-xs text-gray-500">
            Free shipping เมื่อยอดสั่งซื้อครบ 1,500 บาท
          </p>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gray-100 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Hero Image / Jewelry Photo
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 py-2 text-xs shadow-sm">
            Handcrafted • Hypoallergenic • Everyday Wear
          </div>
        </div>
      </section>

      {/* Featured Collections / Tags */}
      <section aria-label="featured-collections">
        <div className="flex flex-wrap gap-3">
          {featuredCollections.map((c) => (
            <button
              key={c.key}
              type="button"
              className="px-4 py-1.5 text-xs md:text-sm rounded-full border border-gray-300 hover:border-black hover:text-black transition bg-white"
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold tracking-tight">
              Featured pieces
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
              คัดมาให้แล้วสำหรับใส่ได้ทุกวัน เข้ากับทุกสไตล์ของคุณ
            </p>
          </div>

          <Link
            to="/products"
            className="text-xs md:text-sm underline underline-offset-4 hover:text-gray-700"
          >
            View all products
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition flex flex-col"
            >
              <div className="aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between gap-2">
                <div>
                  <h3 className="text-sm font-medium group-hover:text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Everyday collection
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-semibold">
                    ฿{product.price.toLocaleString("th-TH")}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full border border-gray-300 group-hover:border-black">
                    View detail
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="border border-dashed border-gray-200 rounded-2xl p-6 md:p-8 bg-white">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-3">
          Our Story
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-2xl">
          เราเชื่อว่าเครื่องประดับที่ดีที่สุด
          ไม่ใช่ชิ้นที่แพงที่สุด แต่เป็นชิ้นที่ทำให้คุณรู้สึกเป็นตัวเองมากที่สุด
          ทุกคอลเลกชันของ Let It Charm จึงถูกออกแบบมาให้คุณมิกซ์แอนด์แมทช์
          เล่าเรื่องราวของตัวเองผ่านรายละเอียดเล็ก ๆ ที่มีความหมาย
        </p>
      </section>

    </div>
  )
}
