import { useNavigate } from "react-router-dom";
import AdminNav from "../../components/admin/AdminNav";
import ProductForm from "../../components/admin/ProductForm";
import { products as initialProducts } from "../../data/products";

export default function AdminAddProduct() {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // โหลดสินค้าจาก localStorage หรือใช้ default
    const savedProducts = localStorage.getItem("admin_products");
    let products = savedProducts ? JSON.parse(savedProducts) : initialProducts;

    // เพิ่มสินค้าใหม่
    products.push(formData);
    
    // บันทึก
    localStorage.setItem("admin_products", JSON.stringify(products));
    
    // กลับไปหน้า Dashboard พร้อมแสดง notification
    alert("✅ เพิ่มสินค้าสำเร็จ!");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">เพิ่มสินค้าใหม่</h1>
          <p className="text-gray-600 text-sm mt-2">
            กรอกรายละเอียดสินค้าให้ครบถ้วน พร้อมรูปภาพ
          </p>
        </div>

        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}