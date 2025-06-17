import React, { useState } from 'react';
import { Star, Plus, Minus, Heart, Truck, Shield, DollarSign, Users } from 'lucide-react';


const Home = () => {
    const [cartCount, setCartCount] = useState(1);
    const [email, setEmail] = useState('');

    const categories = [
        { name: 'Organic veggies', color: 'bg-yellow-100', image: '🥬' },
        { name: 'Fresh Fruits', color: 'bg-pink-100', image: '🍎' },
        { name: 'Cold Drinks', color: 'bg-green-100', image: '🥤' },
        { name: 'Instant Food', color: 'bg-blue-100', image: '🍜' },
        { name: 'Dairy Products', color: 'bg-orange-100', image: '🥛' },
        { name: 'Bakery & Breads', color: 'bg-blue-50', image: '🍞' },
        { name: 'Grains & Cereals', color: 'bg-purple-100', image: '🌾' }
    ];

    const bestSellers = [
        {
            id: 1,
            category: 'Bakery',
            name: 'Brown Bread 400g',
            rating: 4,
            reviews: 4,
            price: 35,
            oldPrice: 40,
            image: '🍞'
        },
        {
            id: 2,
            category: 'Grains',
            name: 'Organic Quinoa 500g',
            rating: 4,
            reviews: 4,
            price: 420,
            oldPrice: 450,
            image: '🌾'
        },
        {
            id: 3,
            category: 'Vegetables',
            name: 'Carrot 500g',
            rating: 4,
            reviews: 4,
            price: 44,
            oldPrice: 50,
            image: '🥕'
        },
        {
            id: 4,
            category: 'Fruits',
            name: 'Apple 1 kg',
            rating: 4,
            reviews: 4,
            price: 90,
            oldPrice: 100,
            image: '🍎'
        },
        {
            id: 5,
            category: 'Dairy',
            name: 'Cheese 200g',
            rating: 4,
            reviews: 4,
            price: 130,
            oldPrice: 140,
            image: '🧀'
        }
    ];

    const features = [
        {
            icon: <Truck className="w-8 h-8 text-green-600" />,
            title: 'Fastest Delivery',
            description: 'Groceries delivered in under 30 minutes.'
        },
        {
            icon: <Heart className="w-8 h-8 text-green-600" />,
            title: 'Freshness Guaranteed',
            description: 'Fresh produce straight from the source.'
        },
        {
            icon: <DollarSign className="w-8 h-8 text-green-600" />,
            title: 'Affordable Prices',
            description: 'Quality groceries at unbeatable prices.'
        },
        {
            icon: <Users className="w-8 h-8 text-green-600" />,
            title: 'Trusted by Thousands',
            description: 'Loved by 10,000+ happy customers.'
        }
    ];

    const StarRating = ({ rating }) => {
        return (
            <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white">


            {/* Hero Section */}
            < section className="bg-gradient-to-r from-green-50 to-green-100 py-16" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 max-w-2xl">
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Freshness You Can Trust, Savings You will Love!
                            </h1>
                            <div className="flex space-x-4">
                                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                                    Shop now
                                </button>
                                <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                                    Explore deals →
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-end">
                            <div className="relative">
                                <div className="w-96 h-80 bg-green-400 rounded-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl mb-4">🛒</div>
                                        <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                                            <div className="flex items-center space-x-2">
                                                <Truck className="w-6 h-6 text-blue-600" />
                                                <div>
                                                    <div className="font-medium text-blue-600">Fast Delivery</div>
                                                    <div className="text-sm text-gray-600">In 30 Min</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Categories */}
            < section className="py-16" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`${category.color} rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer`}
                            >
                                <div className="text-4xl mb-3">{category.image}</div>
                                <h3 className="font-medium text-gray-800 text-sm">{category.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Best Sellers */}
            < section className="py-16 bg-gray-50" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Sellers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {bestSellers.map((product) => (
                            <div key={product.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                                <div className="text-6xl mb-4 text-center">{product.image}</div>
                                <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                                <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>

                                <div className="flex items-center mb-3">
                                    <StarRating rating={product.rating} />
                                    <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-lg font-bold text-green-600">₹{product.price}</span>
                                        <span className="text-sm text-gray-500 line-through">₹{product.oldPrice}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center border rounded-lg">
                                        <button className="p-2 hover:bg-gray-100">
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="px-4 py-2">1</span>
                                        <button className="p-2 hover:bg-gray-100">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <button className="bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors">
                                        Add
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Why We Are the Best */}
            < section className="py-16" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="relative">
                                <div className="w-96 h-80 bg-green-400 rounded-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl mb-4">👩‍🌾</div>
                                        <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                                            <div className="flex items-center space-x-2">
                                                <Truck className="w-6 h-6 text-blue-600" />
                                                <div>
                                                    <div className="font-medium text-blue-600">Fast Delivery</div>
                                                    <div className="text-sm text-gray-600">In 30 Min</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 ml-16">
                            <h2 className="text-4xl font-bold text-green-600 mb-8">Why We Are the Best?</h2>
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="bg-green-100 p-3 rounded-lg">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Newsletter Signup */}
            < section className="py-16 bg-gray-50" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Never Miss a Deal!</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Subscribe to get the latest offers, new arrivals, and exclusive discounts
                    </p>

                    <div className="flex max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email id"
                            className="flex-1 px-6 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="bg-green-600 text-white px-8 py-3 rounded-r-lg hover:bg-green-700 transition-colors font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section >

            {/* Footer */}
            < footer className="bg-white py-16 border-t" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div>
                            <div className="text-2xl font-bold text-gray-900 mb-4">
                                <span className="text-green-600">Green</span>Cart
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Home</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Best Sellers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Offers & Deals</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Contact Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">FAQs</a></li>
                            </ul>
                        </div>

                        {/* Need Help */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Need help?</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Delivery Information</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Return & Refund Policy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Payment Methods</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Track your Order</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Instagram</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Twitter</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">Facebook</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-green-600">YouTube</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t mt-12 pt-8 text-center">
                        <p className="text-gray-600">
                            Copyright 2025 © GreatStack.dev All Right .
                        </p>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Home;