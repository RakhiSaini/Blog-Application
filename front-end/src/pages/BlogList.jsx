import { useEffect, useState } from "react";
import axios from "axios";
import "./BlogList.css";
import EditModal from "../modal/EditModal";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const API_URL =
    "https://blog-application-1a5c4-default-rtdb.firebaseio.com/blogs.json";

  // Fetch data from Firebase
  const fetchBlogs = () => {
    axios
      .get(API_URL)
      .then((response) => {
        const blogsArray = Object.entries(response.data || {}).map(
          ([key, value]) => ({
            id: key,
            ...value,
          })
        );
        setBlogs(blogsArray);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log("data", blogs);

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  // Update blog in Firebase
  const handleSubmit = (updatedBlog) => {
    axios
      .patch(
        `https://blog-application-1a5c4-default-rtdb.firebaseio.com/blogs/${updatedBlog.id}.json`,
        updatedBlog
      )
      .then(() => {
        fetchBlogs(); // Re-fetch the blogs after updating
        setIsModalOpen(false);
        setSelectedBlog(null);
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
      });
  };

  // Delete blog from Firebase
  const handleDelete = (id) => {
    // Optimistically update the local state to remove the blog immediately
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));

    axios
      .delete(
        `https://blog-application-1a5c4-default-rtdb.firebaseio.com/blogs/${id}.json`
      )
      .then(() => {
        console.log("Blog deleted successfully");
        fetchBlogs();
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
        fetchBlogs();
      });
  };

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-message">{blog.message}</p>
            </div>
            <div className="blog-footer">
              <button onClick={() => handleEdit(blog)}>Edit</button>
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        blogData={selectedBlog || {}}
      />
    </div>
  );
}

export default BlogList;
