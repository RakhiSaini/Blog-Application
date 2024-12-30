import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./EditModal.css";

function EditModal({ isOpen, onClose, onSubmit, blogData }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (blogData) {
      setTitle(blogData.title || "");
      setMessage(blogData.message || "");
    }
  }, [blogData]);

  // Prevent rendering if modal is closed
  if (!isOpen) return null;

  const handleSubmitClick = () => {
    if (!title.trim() || !message.trim()) {
      alert("Title and message cannot be empty.");
      return;
    }
    onSubmit({ id: blogData.id, title: title.trim(), message: message.trim() });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Blog</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Edit Title"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Edit Message"
        />
        <div className="modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmitClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}

// Prop types validation
EditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  blogData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
  }),
};

EditModal.defaultProps = {
  blogData: { id: "", title: "", message: "" },
};

export default EditModal;
