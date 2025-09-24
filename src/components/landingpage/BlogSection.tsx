import React from 'react';
import { FaArrowRight, FaCalendarAlt, FaUser } from 'react-icons/fa';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Step By Step Guide To Smar8 Application",
      excerpt: "Learn how to get started with Smar8 and maximize your property management efficiency.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Best Practices for Tenant Screening",
      excerpt: "Discover the most effective strategies for screening tenants and reducing vacancy rates.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Mike Chen",
      date: "Dec 12, 2023",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Maximizing Rental Income with Analytics",
      excerpt: "How to use data and analytics to optimize your rental pricing and increase revenue.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: "Emily Rodriguez",
      date: "Dec 10, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="bg-gray-50 modern-section">
      <div className="modern-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <h2 className="modern-heading mb-4">
              Read Our Blog Post
            </h2>
            <p className="modern-subheading max-w-2xl">
              Stay updated with the latest insights, tips, and best practices in property management.
            </p>
          </div>
          <button className="modern-button-primary flex items-center gap-2 mt-6 sm:mt-0">
            View All Posts
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="modern-card overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-dark-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaUser className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="text-primary-500 font-semibold flex items-center gap-2 group-hover:text-primary-600 transition-colors duration-200">
                  Read More
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

