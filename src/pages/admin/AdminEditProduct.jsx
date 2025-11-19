import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNav from "../../components/admin/AdminNav";
import ProductForm from "../../components/admin/ProductForm";
import { products as initialProducts } from "../../data/products";

export default function AdminEditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // โหลดจาก localStorage หรือ initial products
    const savedProducts = localStorage.getItem("admin_products");
    const products = savedProducts ? JSON.parse(savedProducts) : initialProducts;
    
    const found = products.find((p) => p.id === Number(id));
    if (found) {
      setProduct(found);
    } else {
      alert("ไม่พบสินค้า");
      navigate("/admin");
    }
    setLoading(false);
  }, [id, navigate]);

  const handleSubmit = (formData) => {
    // โหลดสินค้า
    const savedProducts = localStorage.getItem("admin_products");
    let products = savedProducts ? JSON.parse(savedProducts) : initialProducts;
    
    // อัปเดต
    const index = products.findIndex((p) => p.id === Number(id));
    if (index !== -1) {
      products[index] = formData;
      localStorage.setItem("admin_products", JSON.stringify(products));
      alert("✅ แก้ไขสินค้าสำเร็จ!");
      navigate("/admin");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>ไม่พบสินค้า</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">แก้ไขสินค้า</h1>
          <p className="text-gray-600 text-sm mt-2">
            แก้ไขข้อมูลสินค้า: <span className="font-semibold">{product.name}</span>
          </p>
        </div>

        <ProductForm initialData={product} onSubmit={handleSubmit} isEditing={true} />
      </div>
    </div>
  );
}




