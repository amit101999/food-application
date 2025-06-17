import React, { useState } from 'react'
import { Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../Registration/Register';

const Header = () => {
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState(false);
    const handleLogin = () => {
        setModal(!modal)
        setUser(!user)
    }



    return (
        <div>
            {/* login */}
            {
                modal &&
                <RegistrationForm />
            }
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-gray-900">
                                <span className="text-green-600">Green</span>Cart
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link to="/dashboard" className="text-gray-500 hover:text-gray-900">Seller Dashboard</Link>
                            <Link to="/" className="text-gray-900 font-medium">Home</Link>
                            <Link to="/products" className="text-gray-500 hover:text-gray-900">All Product</Link>
                        </nav>

                        {/* Search, Cart, Login */}
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products"
                                    className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                            </div>

                            <div className="relative">
                                <ShoppingCart className="w-6 h-6 text-gray-600" />
                                <Link to='/cart'>
                                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        1
                                    </span>
                                </Link>
                            </div>
                            {
                                user ? (<div>
                                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                        onClick={handleLogin}>
                                         : logout
                                    </button>
                                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                        onClick="">
                                        My Orders
                                    </button>
                                </div>) : (
                                    <div>
                                        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                            onClick={handleLogin}>
                                            Login
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default Header
