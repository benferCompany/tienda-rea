import './App.css'
import Home from './components/home/home';
import Layout from './components/layout/Layout';
import Categories from './components/categories/Categories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./components/products/Products"
import Register from './components/register/Register';
import Login from './components/login/Login';
import ProductsByCategory from './components/products/products_by_category/ProductsByCategory';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { AuthProvider } from './components/context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:id/products" element={<ProductsByCategory />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>


  );
}

export default App
