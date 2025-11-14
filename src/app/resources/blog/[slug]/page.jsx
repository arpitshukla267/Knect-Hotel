"use client";
import { useParams } from "next/navigation";
import { useBlog } from "@/context/BlogContext";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import { useState } from "react";
import { FiStar, FiYoutube, FiInstagram, FiLink } from "react-icons/fi";
// --- Dummy Blog Data (for BlogDetail page) ---
const dummyBlogDetails = [
  {
    id: 1,
    title: "AI Is Reshaping Hospitality Faster Than Ever",
    slug: "ai-reshaping-hospitality",
    image: "https://images.unsplash.com/photo-1557683304-673a23048d34?w=800",
    description:
      "How automation is redefining workflows, enhancing guest experience, and transforming hotel operations.",
    content:
      "Automation and AI are driving the next big leap in hospitality, enabling smart workflows, real-time service personalization, and predictive maintenance systems. Hotels adopting AI-first strategies are delivering faster check-ins, tailored guest journeys, and optimized resource allocation.",
    contributor: "Arjun Mehta",
    date: "Jan 12, 2025",
  },

  {
    id: 2,
    title: "Future of Smart Property Management Systems",
    slug: "future-of-pms",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    description:
      "A deep dive into next-gen PMS platforms, automation, and cloud-native hotel operations.",
    content:
      "Modern PMS solutions integrate automation, analytics, and mobile-first design, creating efficient workflows for front-desk, housekeeping, and revenue management. Cloud-native platforms are reducing maintenance costs while enabling multi-property scalability.",
    contributor: "Neha Kapoor",
    date: "Feb 3, 2025",
  },

  {
    id: 3,
    title: "Digital Guest Onboarding Beats Traditional Check-ins",
    slug: "digital-guest-onboarding",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800",
    description:
      "Why digital check-ins are becoming the new default in global hospitality.",
    content:
      "Digital onboarding delivers faster processing, reduces errors, and streamlines identity verification. With automated pre-arrival forms, access codes, and mobile key systems, hotels are enhancing guest convenience while lowering operational load.",
    contributor: "Rohan Sharma",
    date: "Mar 8, 2025",
  },

  {
    id: 4,
    title: "How Gen Z Travelers Are Redefining Tourism",
    slug: "gen-z-travel-trends",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    description:
      "A breakdown of Gen Z behavior and how it influences modern travel experiences.",
    content:
      "Gen Z customers value authenticity, social experiences, and digital convenience. They prefer experiential stays, eco-friendly properties, and community-driven hostels with mobile-first services that integrate seamlessly with their lifestyle.",
    contributor: "Sara Nambiar",
    date: "Jan 29, 2025",
  },

  {
    id: 5,
    title: "Automation Playbook for Small Hotels",
    slug: "automation-playbook-small-properties",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800",
    description:
      "Simple automation strategies for small properties to double efficiency.",
    content:
      "Small hotels can implement automation through digital check-ins, automated billing, AI chatbots, and simplified task management tools. These solutions reduce overhead and free staff to focus on personalized guest interactions.",
    contributor: "Aman Verma",
    date: "Feb 14, 2025",
  },

  {
    id: 6,
    title: "Smart Energy Systems for Hotels in 2025",
    slug: "smart-energy-hotels",
    image:
      "https://images.unsplash.com/photo-1582719478181-2f2b39f7a3b9?w=800",
    description:
      "IoT-powered automation is cutting energy costs and reducing carbon footprints across properties.",
    content:
      "Hotels are rapidly switching to smart thermostats, occupancy-based lighting, and AI-driven HVAC systems. These technologies help properties automate energy consumption, reduce waste, and meet sustainability standards.",
    contributor: "Ishan Bhatt",
    date: "Feb 20, 2025",
  },

  {
    id: 7,
    title: "Mobile Apps Are Driving Guest Loyalty",
    slug: "mobile-app-guest-loyalty",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800",
    description:
      "Hotels are earning more repeat guests thanks to personalized mobile-first experiences.",
    content:
      "Loyalty-based mobile apps help hotels deliver real-time notifications, rewards, in-app booking, and personalized offers. As a result, digital touchpoints are becoming essential to guest engagement strategies.",
    contributor: "Nikita Rao",
    date: "Mar 2, 2025",
  },

  {
    id: 8,
    title: "The Psychology Behind Perfect Guest Experience",
    slug: "guest-experience-psychology",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
    description:
      "How emotional design and experience mapping elevate hospitality service.",
    content:
      "Guest experience success comes from understanding human psychology—comfort, trust, anticipation, and emotional satisfaction. Hotels that apply behavioral design principles see higher reviews and stronger brand loyalty.",
    contributor: "Harleen Gupta",
    date: "Jan 18, 2025",
  },

  {
    id: 9,
    title: "Smart Multi-Property Management Solutions",
    slug: "multi-property-management",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
    description:
      "How hotel chains sync operations, data, and processes using modern systems.",
    content:
      "Centralized management systems allow hotel groups to unify billing, housekeeping, reporting, and CRM in a single interface. Automation reduces inconsistencies and improves operational alignment across locations.",
    contributor: "Dev Khanna",
    date: "Mar 15, 2025",
  },

  {
    id: 10,
    title: "Top Hospitality Tech Trends for 2025",
    slug: "hospitality-tech-2025",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    description:
      "The biggest innovations redefining hotels, hostels, and rentals this year.",
    content:
      "AI, robotics, IoT devices, immersive AR experiences, and smart PMS platforms are transforming hospitality in 2025. Properties adopting these innovations are gaining a competitive advantage.",
    contributor: "Mahira Singh",
    date: "Feb 7, 2025",
  }
];


export default function BlogDetail() {
  const { slug } = useParams();
  const { blogs } = useBlog();
  const allBlogs = dummyBlogDetails;
  const blog = allBlogs.find((b) => b.slug === slug);  
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
          className="max-w-6xl mx-auto text-4xl md:text-6xl font-extrabold text-[#d3b87d] mb-6 z-10"
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
