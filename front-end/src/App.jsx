// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateBlogPage from "./pages/CreateBlogPage";
import BlogList from "./pages/BlogList";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlogPage />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
