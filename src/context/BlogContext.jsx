"use client";
import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  // This will later be replaced by backend API call
  useEffect(() => {
    setBlogs([
      {
        id: 1,
        slug: "designing-for-future",
        title: "Designing for the Future",
        description: "Exploring next-gen design practices.",
        contributor: "Ava Singh",
        date: "2025-11-05",
        layout: 1,
        image: "https://i.pinimg.com/736x/6c/47/38/6c473894205255cdfa4777df0b154e52.jpg",
        content: "Long detailed article content goes here..."
      },
      {
        id: 2,
        slug: "hospitality-trends",
        title: "Hospitality Trends 2025",
        description: "New shifts in guest experience and tech.",
        contributor: "Raj Mehta",
        date: "2025-11-06",
        layout: 2,
        image: "https://i.pinimg.com/736x/01/de/5c/01de5c43e1e4ad350cebf3e5afec92bf.jpg",
        content: "Long detailed article content goes here..."
      },
      // ...add more
    ]);
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
