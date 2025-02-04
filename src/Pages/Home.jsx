import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import './home.css';  // Importing CSS for this component only

const Home = () => {
  const [category, setCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="home-container">
      <Navbar onSearch={(e) => setSearchQuery(e.target.value)} />
      <div className="main-content">
        <Sidebar onSelectCategory={setCategory} />
        <ProductList category={category} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Home;
