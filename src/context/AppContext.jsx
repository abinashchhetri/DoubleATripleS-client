import { createContext, useContext, useState, useEffect } from "react";

// Create context
const AppContext = createContext();

// Context provider
export const AppContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Check auth status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token) {
      setIsAuthenticated(true);
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function: set token and user details
  const login = (token, userData) => {
    localStorage.setItem("token", `Bearer ${token}`);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Logout function: remove token and user
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };

  // Set user details manually (optional utility)
  const setUserDetails = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Get all cart items
  const getCartItems = () => {
    return cartItems;
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        setUserDetails,
        addToCart,
        getCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easier context access
export const useAppContext = () => useContext(AppContext);
