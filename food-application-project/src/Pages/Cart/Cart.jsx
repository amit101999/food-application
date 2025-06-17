import React, { useState } from 'react';
import { Search, ShoppingCart, X, ChevronDown } from 'lucide-react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Brown Bread 400g',
            weight: 'N/A',
            price: 35,
            quantity: 1,
            image: '🍞'
        },
        {
            id: 2,
            name: 'Carrot 500g',
            weight: 'N/A',
            price: 44,
            quantity: 1,
            image: '🥕'
        },
        {
            id: 3,
            name: 'Organic Quinoa 500g',
            weight: 'N/A',
            price: 420,
            quantity: 1,
            image: '🌾'
        },
        {
            id: 4,
            name: 'Apple 1 kg',
            weight: 'N/A',
            price: 90,
            quantity: 1,
            image: '🍎'
        }
    ]);

    const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery');
    const [deliveryAddress, setDeliveryAddress] = useState('');

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = 0; // Free shipping
    const taxRate = 0.02; // 2% tax
    const tax = subtotal * taxRate;
    const totalAmount = subtotal + shippingFee + tax;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Shopping Cart Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center mb-6">
                                <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
                                <span className="ml-2 text-green-600 font-medium">{cartItems.length} Items</span>
                            </div>

                            {/* Cart Table Header */}
                            <div className="grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-gray-600">
                                <div className="col-span-6">Product Details</div>
                                <div className="col-span-3 text-center">Subtotal</div>
                                <div className="col-span-3 text-center">Action</div>
                            </div>

                            {/* Cart Items */}
                            <div className="space-y-4 mt-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-100">
                                        {/* Product Details */}
                                        <div className="col-span-6 flex items-center space-x-4">
                                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl border">
                                                {item.image}
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-500">Weight: {item.weight}</p>
                                                <div className="flex items-center mt-2">
                                                    <span className="text-sm text-gray-500 mr-2">Qty:</span>
                                                    <select
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                        className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                                    >
                                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                                            <option key={num} value={num}>{num}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="w-4 h-4 text-gray-400 -ml-6 pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Subtotal */}
                                        <div className="col-span-3 text-center">
                                            <span className="font-medium text-gray-900">₹{item.price * item.quantity}</span>
                                        </div>

                                        {/* Action */}
                                        <div className="col-span-3 text-center">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center hover:bg-red-50 transition-colors"
                                            >
                                                <X className="w-4 h-4 text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                            {/* Delivery Address */}
                            <div className="mb-6">
                                <h3 className="font-medium text-gray-900 mb-2">DELIVERY ADDRESS</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500">No address found</span>
                                    <button className="text-green-600 hover:text-green-700 font-medium">
                                        Change
                                    </button>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="mb-6">
                                <h3 className="font-medium text-gray-900 mb-2">PAYMENT METHOD</h3>
                                <div className="relative">
                                    <select
                                        value={paymentMethod}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white"
                                    >
                                        <option value="Cash On Delivery">Cash On Delivery</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Debit Card">Debit Card</option>
                                        <option value="UPI">UPI</option>
                                        <option value="Net Banking">Net Banking</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Price</span>
                                    <span className="font-medium">₹{subtotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping Fee</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax (2%)</span>
                                    <span className="font-medium">₹{tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t pt-3">
                                    <div className="flex justify-between">
                                        <span className="font-medium text-gray-900">Total Amount:</span>
                                        <span className="font-bold text-lg">₹{totalAmount.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Place Order Button */}
                            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;