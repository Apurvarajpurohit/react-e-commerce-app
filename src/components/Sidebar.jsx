import { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  // Inline style objects
  const sidebarStyles = {
    backgroundColor: "#ffffff",
    width: "250px",
    padding: "20px",
    boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
    height: "100vh", /* Full height for the sidebar */
    position: "sticky",
    top: "0",
  };

  const buttonStyles = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#f4f4f4",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "16px",
    color: "#333",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyles = {
    backgroundColor: "#e0e0e0", /* Lighter shade on hover */
  };

  return (
    <div style={sidebarStyles}>
      {categories.map((category) => (
        <button
          key={category}
          style={buttonStyles}
          onClick={() => onSelectCategory(category)}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
