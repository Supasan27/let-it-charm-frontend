export const products = [
  {
    id: 1,
    name: "Moonlight Charm Bracelet",
    price: 1290,
    stock: 5,  // ← ✨ เพิ่มบรรทัดนี้
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
    ],
    tag: "new",
    description: "สร้อยข้อมือโทนเงินประดับจี้ดวงจันทร์ ดีไซน์เรียบแต่มีลูกเล่น ใส่ได้ทุกวัน. วัสดุทองเหลืองเคลือบเงิน 925 ปราศจากนิกเกิล เหมาะสำหรับผิวบอบบาง",
  },
  {
    id: 2,
    name: "Minimal Gold Necklace",
    price: 1590,
    stock: 8,  // ← ✨ เพิ่มบรรทัดนี้
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587993991827-24ac11d7b814?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515927422247-04b6e0b0f050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    ],
    tag: "bestseller",
    description: "สร้อยคอทองโทนมินิมอล ชิ้นเดียวเอาอยู่ ใส่เดี่ยวก็ได้ เลเยอร์ก็สวย. ความยาว 16-18 นิ้ว ปรับได้ตามต้องการ",
  },
  {
    id: 3,
    name: "Everyday Silver Ring",
    price: 890,
    stock: 12,  // ← ✨ เพิ่มบรรทัดนี้
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511407397940-d64f8b1733f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
    ],
    tag: "new",
    description: "แหวนเงินดีไซน์เรียบ เหมาะสำหรับใส่คู่กับแหวนวงอื่น ๆ มิกซ์ได้หลากหลาย. เงินแท้ 925 ขนาด 6-8 US",
  },
  {
    id: 4,
    name: "Custom Initial Charm",
    price: 1090,
    stock: 3,  // ← ✨ เพิ่มบรรทัดนี้
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587993991827-24ac11d7b814?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
    ],
    tag: "custom",
    description: "จี้ตัวอักษรสลักตามสั่ง ใช้แทนตัวคุณหรือคนสำคัญ เหมาะเป็นของขวัญมาก. เลือกได้ A-Z ตัวพิมพ์ใหญ่หรือเล็ก",
  },
  {
    id: 5,
    name: "Gift Set · Gold & Pearl",
    price: 1990,
    stock: 2,  // ← ✨ เพิ่มบรรทัดนี้
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587993991827-24ac11d7b814?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    ],
    tag: "gift",
    description: "เซ็ตของขวัญประกอบด้วยสร้อยคอและต่างหูโทนทองมุก จัดเซ็ตพร้อมกล่อง. พร้อมการ์ดอวยพร และห่อของขวัญแบบมี่ทีค",
  },
  {
    id: 6,
    name: "Tiny Star Earrings",
    price: 690,
    stock: 15,  // ← ✨ เพิ่มบรรทัดนี้
    image: "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-5dfd35b5034b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587993991827-24ac11d7b814?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    ],
    tag: "bestseller",
    description: "ต่างหูดาวดวงเล็ก ๆ ใส่ได้ทุกวัน น้ำหนักเบา ไม่ระคายเคืองผิว. ขาต่างหู post แบบสเตนเลส 316",
  },
];