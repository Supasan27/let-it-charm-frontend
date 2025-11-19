import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../components/admin/AdminNav";
import { products as initialProducts } from "../../data/products";

export default function AdminDashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);

  // โหลดข้อมูลจาก localStorage (ถ้ามี)
  useEffect(() => {
    const savedProducts = localStorage.getItem("admin_products");
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (e) {
        console.error("Error loading products from localStorage:", e);
      }
    }
  }, []);

  // บันทึกเมื่อมีการเปลี่ยนแปลง
  const handleSaveProducts = (updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem("admin_products", JSON.stringify(updatedProducts));
  };

  const handleDeleteProduct = (id) => {
    const confirmed = window.confirm("ยืนยันการลบสินค้านี้?");
    if (confirmed) {
      const updated = products.filter((p) => p.id !== id);
      handleSaveProducts(updated);
    }
  };

  const handleUpdateStock = (id, newStock) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, stock: newStock } : p
    );
    handleSaveProducts(updated);
  };

  const totalStock = products.reduce((sum, p) => sum + (p.stock || 0), 0);
  const outOfStock = products.filter((p) => !p.stock || p.stock === 0).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600 text-sm mt-1">จัดการสินค้าและ stock</p>
          </div>
          <Link
            to="/admin/add-product"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 font-medium transition"
          >
            + เพิ่มสินค้า
          </Link>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
            <h3 className="text-gray-600 text-sm font-medium">จำนวนสินค้า</h3>
            <p className="text-4xl font-bold mt-2">{products.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
            <h3 className="text-gray-600 text-sm font-medium">Stock ทั้งหมด</h3>
            <p className="text-4xl font-bold mt-2">{totalStock}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
            <h3 className="text-gray-600 text-sm font-medium">สินค้าหมด</h3>
            <p className="text-4xl font-bold mt-2">{outOfStock}</p>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">ชื่อสินค้า</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">ราคา</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Tag</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-600">{product.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">{product.name}</td>
                  <td className="px-6 py-4 text-sm">฿{product.price?.toLocaleString("th-TH") || "0"}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={product.stock || 0}
                        onChange={(e) =>
                          handleUpdateStock(product.id, Number(e.target.value))
                        }
                        min="0"
                        className="w-16 px-2 py-1 border rounded text-sm"
                      />
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          (product.stock || 0) > 0
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {(product.stock || 0) > 0 ? "มี" : "หมด"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {product.tag}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-center">
                    <div className="flex gap-2 justify-center">
                      <Link
                        to={`/admin/edit/${product.id}`}
                        className="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition"
                      >
                        แก้ไข
                      </Link>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition"
                      >
                        ลบ
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {products.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <p>ยังไม่มีสินค้า</p>
              <Link to="/admin/add-product" className="text-blue-500 hover:underline mt-2">
                เพิ่มสินค้าแรก
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}