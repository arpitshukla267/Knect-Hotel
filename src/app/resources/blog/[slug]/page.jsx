"use client";
import { useParams } from "next/navigation";
import { useBlog } from "@/context/BlogContext";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import { useState } from "react";
import { FiStar, FiYoutube, FiInstagram, FiLink } from "react-icons/fi";

export default function BlogDetail() {
  const { slug } = useParams();
  const { blogs } = useBlog();
  const blog = blogs.find((b) => b.slug === slug);
  const [rating, setRating] = useState(0);

  if (!blog) {
    return (
      <div
        className="flex flex-col justify-center items-center min-h-screen text-white"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
        }}
      >
        <h1 className="text-3xl font-bold text-[#d3b87d] mb-4">404</h1>
        <p className="text-gray-400">Blog not found</p>
      </div>
    );
  }

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #9a753e 0%, #000000 100%)",
      }}
    >
      <Header />

      {/* --- Banner --- */}
      <section className="relative w-full h-[350px] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#9a753e22,transparent_70%)] animate-gradientMove"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#9a753e15,transparent_70%)] animate-gradientMove-slow"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-[#d3b87d] mb-2 z-10"
        >
          {blog.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 text-sm md:text-lg max-w-2xl z-10"
        >
          by {blog.contributor} • {blog.date}
        </motion.p>
      </section>

      {/* --- Blog Content --- */}
      <section className="max-w-4xl mx-auto py-16 px-4 md:px-0 space-y-16">
        {/* Main image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
        </div>

        {/* Article body */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-gray-300 text-lg leading-8 mb-6">
            {blog.content} This article explores key insights that shape the
            evolving landscape of modern hospitality and technology. From guest
            automation and seamless booking journeys to immersive experiences
            powered by AI — 2025 marks a turning point for how digital systems
            interact with guest emotions.
          </p>

          <p className="text-gray-300 text-lg leading-8">
            The rise of personalization tools, dynamic pricing engines, and
            sustainable operations have redefined the meaning of “luxury.” Now,
            even a small boutique hotel can use cloud-powered systems to deliver
            experiences once reserved for five-star resorts. Technology no
            longer replaces hospitality — it enhances it.
          </p>
        </motion.article>

        {/* Decorative Divider */}
        <div className="h-[2px] mt-12 bg-gradient-to-r from-[#9a753e] to-transparent"></div>

        {/* Rating Section */}
        <section className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#d3b87d]">
            Rate this article
          </h3>
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                size={32}
                className={`cursor-pointer transition-colors ${
                  star <= rating ? "text-[#d3b87d]" : "text-gray-600"
                } hover:text-[#d3b87d]`}
                onClick={() => handleStarClick(star)}
              />
            ))}
          </div>
          {rating > 0 && (
            <p className="text-gray-400">
              You rated this {rating} {rating === 1 ? "star" : "stars"} ⭐
            </p>
          )}
        </section>

        {/* Embedded Media Section */}
        <section className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-[#d3b87d] text-center">
            Watch or Follow the Discussion
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
            {/* YouTube Embed */}
            <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden border border-[#9a753e]/30 shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Instagram Embed */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-4 text-center">
              <div className="flex justify-center gap-4 text-[#d3b87d]">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <FiInstagram size={30} />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <FiYoutube size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <FiLink size={30} />
                </a>
              </div>
              <p className="text-gray-400 text-sm max-w-sm">
                Follow us on social platforms for exclusive insights and upcoming tech innovations
                in the hospitality industry.
              </p>
            </div>
          </div>
        </section>

        {/* Contributor Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center gap-6 border-t border-[#9a753e]/20 pt-10">
          <div className="w-16 h-16 bg-[#9a753e]/30 rounded-full flex items-center justify-center text-[#d3b87d] text-xl font-bold">
            {blog.contributor.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#d3b87d]">
              {blog.contributor}
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Contributor • {blog.date}
            </p>
            <p className="text-gray-300 text-sm max-w-md">
              {blog.contributor} is a hospitality technology specialist and
              content strategist who focuses on digital transformation within
              the travel and hotel industry. Their insights bridge tech and
              guest experience seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-black/40 mt-10">
        <h3 className="text-3xl font-bold text-center text-[#d3b87d] mb-10">
          Related Reads
        </h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {blogs
            .filter((b) => b.slug !== blog.slug)
            .slice(0, 2)
            .map((related) => (
              <motion.div
                key={related.id}
                whileHover={{ scale: 1.03 }}
                className="bg-[#111]/80 border border-[#ffffff1a] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={related.image}
                  alt={related.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-56"
                />
                <div className="p-6">
                  <h4 className="text-[#d3b87d] text-xl font-semibold mb-2">
                    {related.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {related.description}
                  </p>
                  <a
                    href={`/resources/blog/${related.slug}`}
                    className="text-[#9a753e] hover:text-[#d3b87d] text-sm font-medium"
                  >
                    Read more →
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
}
