import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"

import Layout from "./components/Layout";

import Home from "./pages/Home";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/collection" element={<h1>Collection</h1>} />
        <Route path="/men" element={<h1>men</h1>} />
        <Route path="/women" element={<h1>women</h1>} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/cart" element={<h1>cart</h1>} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}