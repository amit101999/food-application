import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      alert(`Registration successful! Welcome, ${formData.name}!`);
      console.log('Registration data:', formData);
      // Here you would typically send the data to your server
    }
  };

  const signUpWithGoogle = () => {
    alert('Redirecting to Google Sign-Up...');
    console.log('Google sign-up clicked');
    // Here you would integrate with Google OAuth
  };

  const signUpWithPhone = () => {
    alert('Redirecting to Phone Number Sign-Up...');
    console.log('Phone sign-up clicked');
    // Here you would implement phone number verification
  };

  const GoogleIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="currentColor" d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31v2.77h3.57C20.69,18.13,22.56,15.45,22.56,12.25z"/>
      <path fill="currentColor" d="M12,23c2.97,0,5.46-.98,7.28-2.66l-3.57-2.77c-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53H2.18v2.84C3.99,20.53,7.7,23,12,23z"/>
      <path fill="currentColor" d="M5.84,14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43,8.55,1,10.22,1,12s.43,3.45,1.18,4.93L5.84,14.09z"/>
      <path fill="currentColor" d="M12,5.38c1.62,0,3.06.56,4.21,1.64l3.15-3.15C17.45,2.09,14.97,1,12,1C7.7,1,3.99,3.47,2.18,7.07l3.66,2.84C6.71,7.31,9.14,5.38,12,5.38z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
    </svg>
  );

  return (
    <div className="fixed inset-0  bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm transform transition-all duration-300 scale-100 animate-pulse-once">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Create Account</h1>
          <p className="text-gray-600 text-sm">Join us today and get started</p>
        </div>

        {/* Registration Form */}
        <div className="space-y-4">
          {/* Name Field */}
          <div className="group">
            <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 text-sm
                       focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100
                       transition-all duration-300"
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 text-sm
                       focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100
                       transition-all duration-300"
            />
          </div>

          {/* Password Field */}
          <div className="group">
            <label htmlFor="password" className="block text-xs font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              required
              className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 text-sm
                       focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100
                       transition-all duration-300"
            />
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2.5 px-4 
                     rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl 
                     transform hover:-translate-y-0.5 transition-all duration-300
                     active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-white text-gray-500 font-medium">Or continue with</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex space-x-3">
          {/* Google Sign Up */}
          <button
            onClick={signUpWithGoogle}
            className="flex-1 flex items-center justify-center px-4 py-3 border-2 border-blue-500 
                     text-blue-500 rounded-xl font-semibold hover:bg-blue-500 hover:text-white 
                     transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg
                     focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <GoogleIcon />
            <span className="ml-2">Google</span>
          </button>

          {/* Phone Sign Up */}
          <button
            onClick={signUpWithPhone}
            className="flex-1 flex items-center justify-center px-4 py-3 border-2 border-green-500 
                     text-green-500 rounded-xl font-semibold hover:bg-green-500 hover:text-white 
                     transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg
                     focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            <PhoneIcon />
            <span className="ml-2">Phone</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;