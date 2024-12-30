import { useState } from "react";
import "./CreateBlogPage.css";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogMessage, setBlogMessage] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = {
      title: blogTitle,
      message: blogMessage,
      createdAt: new Date().toISOString(),
    };

    try {
      // Send POST request to Firebase
      const response = await fetch(
        "https://blog-application-1a5c4-default-rtdb.firebaseio.com/blogs.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBlog),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      // Success, clear the form
      alert(`Blog created with title: ${blogTitle}`);
      setBlogTitle("");
      setBlogMessage("");
      navigate("/blog-list");
    } catch (err) {
      console.error("Error creating blog:", err);
      alert("Error: Unable to create the blog. Please try again.");
    }
  };

  return (
    <div className="create-blog-page">
      <div className="blog-form-container">
        <h1 className="page-title">Create Your Blog</h1>
        <form onSubmit={handleSubmit} className="blog-form">
          <label htmlFor="blogTitle" className="form-label">
            Blog Title
          </label>
          <input
            type="text"
            id="blogTitle"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            placeholder="Enter your blog title"
            className="form-input"
            required
          />

          <label htmlFor="blogMessage" className="form-label">
            Blog Message
          </label>
          <textarea
            id="blogMessage"
            value={blogMessage}
            onChange={(e) => setBlogMessage(e.target.value)}
            placeholder="Write your blog message here"
            className="form-textarea"
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPage;
