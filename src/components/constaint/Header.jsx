import React, { useState, useEffect } from "react";

const Header = () => {
    
    const toggleDropdown = (event) => {
        event.preventDefault();  // Prevent the default action if needed
        setIsDropdownOpen(!isDropdownOpen);  // Toggle dropdown visibility
      };
      
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dropdown for courses
 

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

   // Update the theme when `isDarkMode` changes
   useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#1a202c" : "#ffffff";
    document.body.style.color = isDarkMode ? "#ffffff" : "#000000";
  }, [isDarkMode]);


  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  // Logout handler
  const handleLogout = () => {
    alert("You have been logged out!");
    // Perform logout actions here, such as clearing authentication tokens
  };

  return (
    <header>
      <nav className="bg-blue-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a href="/home">
              <span style={{ color: "aqua" }}>Code</span>
              <span style={{ color: "red" }}>Khmer</span>
              <span style={{ color: "yellow" }}>Learning</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/home" className="hover:text-blue-400">ទំព័រដើម</a>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-blue-400 focus:outline-none"
              >
                វគ្គសិក្សា
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-gray-900 text-white mt-2 py-2 w-48 shadow-lg">
                  <a href="/c_programming" className="block px-4 py-2 hover:bg-blue-600">
                    C
                  </a>
                  <a href="/cpp_programming" className="block px-4 py-2 hover:bg-blue-600">
                    C++
                  </a>
                  
                  <a href="/java" className="block px-4 py-2 hover:bg-blue-600">
                    Java
                  </a>
                  <a href="/csharp" className="block px-4 py-2 hover:bg-blue-600">
                    C#
                  </a>
                  <a href="/html" className="block px-4 py-2 hover:bg-blue-600">
                    HTML
                  </a>
                  <a href="/css" className="block px-4 py-2 hover:bg-blue-600">
                    CSS
                  </a>
                  <a href="/javascript" className="block px-4 py-2 hover:bg-blue-600">
                    JavaScript
                  </a>
                  
                  <a href="/bootstrap" className="block px-4 py-2 hover:bg-blue-600">
                    Bootstrap
                  </a>
                  <a href="/tailwind" className="block px-4 py-2 hover:bg-blue-600">
                    Tailwind
                  </a>
                  <a href="/react" className="block px-4 py-2 hover:bg-blue-600">
                    React
                  </a>
                  <a href="/Vue" className="block px-4 py-2 hover:bg-blue-600">
                    VueJs
                  </a>
                  <a href="/angular" className="block px-4 py-2 hover:bg-blue-600">
                    Angular
                  </a>
                  
                  <a href="/php" className="block px-4 py-2 hover:bg-blue-600">
                    PHP
                  </a>
                  <a href="/mysql" className="block px-4 py-2 hover:bg-blue-600">
                    MySQL
                  </a>
                  <a href="/Laravel" className="block px-4 py-2 hover:bg-blue-600">
                    Laravel
                  </a>
                </div>
              )}
            </div>
            <a href="/about" className="hover:text-blue-400">អំពីយើង</a>
            <a href="/contact" className="hover:text-blue-400">ទំនាក់ទំនង</a>
            
          </div>

          {/* Buttons for Mobile and Desktop */}
          <div className="flex items-center space-x-4">
            {/* Dark/Light Theme Toggle Button */}
            <button
        onClick={toggleTheme}
        className={`text-white px-4 py-2 rounded-md ${isDarkMode ? "bg-gray-600" : "bg-blue-600"} hover:bg-blue-500 flex items-center space-x-2`}
      >
        <span className="w-5 h-5">{isDarkMode ? "🌙" : "☀️"}</span>
        <span>{isDarkMode ? "ងងឹត" : "ពន្លឺភ្លឺ"} </span>
      </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Logout Button */}
        <a href="/home"><button
            
            className="fixed bottom-4 left-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 flex items-center space-x-2"
          >
            <i className="fas fa-sign-out-alt" />
            <span>Back</span>
          </button></a>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-gray-900 text-white md:hidden">
            <a href="/" className="block px-4 py-2 hover:bg-blue-600">
              ទំព័រដើម
            </a>
            <div>
              <button
                onClick={toggleDropdown}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-blue-600"
              >
                វគ្គសិក្សា
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="bg-gray-900">
                  <a
                    href="/c_programming"
                    className="block px-4 py-2 hover:bg-blue-500"
                  >
                    C
                  </a>
                  <a
                    href="/cpp_programming"
                    className="block px-4 py-2 hover:bg-blue-500"
                  >
                    C++
                  </a>
                  <a href="/html" className="block px-4 py-2 hover:bg-blue-500">
                    HTML
                  </a>
                </div>
              )}
            </div>
            <a href="/about" className="block px-4 py-2 hover:bg-blue-600">
              អំពីយើង
            </a>
            <a href="/contact" className="block px-4 py-2 hover:bg-blue-600">
              ទំនាក់ទំនង
            </a>
            <a href="/profile" className="block px-4 py-2 hover:bg-blue-600">
              គណនីផ្ទាល់ខ្លួន
            </a>
          </div>
        )}
      </nav>

      {/* Fixed Telegram Group Button */}
      <a
        href="https://t.me/codekhmerlearning"
        target="_blank"
        className="fixed bottom-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-6 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 flex items-center justify-center gap-3"
      >
        <i className="fab fa-telegram-plane text-white" />
        <span className="hidden sm:inline">ចូលរួមក្រុម Telegram</span>
      </a>
    </header>
  );
};

export default Header;
