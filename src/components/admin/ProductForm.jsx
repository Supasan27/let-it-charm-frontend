import { useState } from "react";

export default function ProductForm({ initialData, onSubmit, isEditing = false }) {
  const [formData, setFormData] = useState(
    initialData || {
      id: Date.now(),
      name: "",
      price: 0,
      stock: 0,
      image: "",
      images: [],
      tag: "new",
      description: "",
    }
  );

  const [imagePreview, setImagePreview] = useState(initialData?.image || "");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleMainImageChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, image: url });
    setImagePreview(url);
  };

  const handleAddImage = () => {
    setFormData({
      ...formData,
      images: [...(formData.images || []), ""],
    });
  };

  const handleImageChange = (index, value) => {
    const newImages = [...(formData.images || [])];
    newImages[index] = value;
    setFormData({ ...formData, images: newImages });
  };

  const handleRemoveImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "ชื่อสินค้าจำเป็นต้องมี";
    if (formData.price < 0) newErrors.price = "ราคาต้องมากกว่า 0";
    if (formData.stock < 0) newErrors.stock = "Stock ต้องมากกว่าหรือเท่ากับ 0";
    if (!formData.image.trim()) newErrors.image = "รูปหลักจำเป็นต้องมี";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow max-w-3xl">
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">ชื่อสินค้า *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="เช่น Moonlight Charm Bracelet"
          className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.name ? "border-red-500" : ""
          }`}
          required
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Price & Stock */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2">ราคา (บาท) *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="1290"
            min="0"
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.price ? "border-red-500" : ""
            }`}
            required
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Stock (จำนวน) *</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="5"
            min="0"
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.stock ? "border-red-500" : ""
            }`}
            required
          />
          {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock}</p>}
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">รูปหลัก (URL) *</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleMainImageChange}
          placeholder="https://images.unsplash.com/photo-..."
          className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.image ? "border-red-500" : ""
          }`}
          required
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}

        {imagePreview && (
          <div className="mt-4 flex gap-4">
            <div>
              <img
                src={imagePreview}
                alt="Main preview"
                className="w-32 h-32 object-cover rounded-lg border"
              />
              <p className="text-xs text-gray-500 mt-2">Main Image</p>
            </div>
          </div>
        )}
      </div>

      {/* Gallery Images */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-semibold">รูปเพิ่มเติม (Gallery - 5-6 ชุด)</label>
          <span className="text-xs text-gray-500">
            {(formData.images || []).filter((img) => img.trim()).length}/6
          </span>
        </div>

        <div className="space-y-3">
          {(formData.images || []).map((img, idx) => (
            <div key={idx} className="flex gap-3">
              <input
                type="url"
                value={img}
                onChange={(e) => handleImageChange(idx, e.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(idx)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {(formData.images || []).length < 6 && (
          <button
            type="button"
            onClick={handleAddImage}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium text-sm"
          >
            + เพิ่มรูป
          </button>
        )}
      </div>

      {/* Tag */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Category Tag</label>
        <select
          name="tag"
          value={formData.tag}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="new">🆕 New Arrivals</option>
          <option value="bestseller">⭐ Best Sellers</option>
          <option value="custom">✨ Custom Charms</option>
          <option value="gift">🎁 Gift Sets</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-8">
        <label className="block text-sm font-semibold mb-2">คำอธิบาย</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          placeholder="อธิบายรายละเอียดสินค้า เช่น วัสดุ ขนาด สไตล์..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 font-semibold transition"
        >
          {isEditing ? "💾 บันทึกการแก้ไข" : "➕ เพิ่มสินค้า"}
        </button>
      </div>
    </form>
  );
}