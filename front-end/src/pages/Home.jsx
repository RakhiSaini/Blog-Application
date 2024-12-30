import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCreateBlogClick = () => {
    navigate("/create-blog");
  };

  return (
    <main className="main-content">
      <div className="blog-intro">
        <h1>MY BLOG</h1>
        <p>
          Create a beautiful blog. Share your thoughts effortlessly with our
          simple blog application – create, edit, and manage posts with ease.
        </p>
        <button className="create-button" onClick={handleCreateBlogClick}>
          CREATE YOUR BLOG
        </button>
      </div>

      {/* Footer Section  */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 BLOG. All rights reserved.</p>
          <div className="footer-links">
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
