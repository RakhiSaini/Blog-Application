import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const navigate = useNavigate();

  const handleBlogListClick = () => {
    navigate("/blog-list");
  };

  return (
    <div>
      <header className="header fixed-navbar">
        <div className="logo">BLOG</div>
        <div className="auth-buttons">
          {/* Home Button */}
          <button
            className="nav-button"
            onClick={() => (window.location.href = "/")}
          >
            Home
          </button>
          {/* Login Button */}
          <button
            className="nav-button"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
          {/* Blogs Button */}
          <button className="nav-button" onClick={handleBlogListClick}>
            Blogs
          </button>
        </div>
      </header>

      <main className="main-content">
        <Outlet /> {/* Render child components here */}
      </main>
    </div>
  );
};

export default Layout;
