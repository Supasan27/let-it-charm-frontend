import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminAddProduct from "../pages/admin/AdminAddProduct";
import AdminEditProduct from "../pages/admin/AdminEditProduct";

export default function AppRouter(){
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/products" element={<ProductsPage/>} />
                    <Route path="/products/:id" element={<ProductDetailPage />} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/add-product" element={<AdminAddProduct />} />
                    <Route path="/admin/edit/:id" element={<AdminEditProduct />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}