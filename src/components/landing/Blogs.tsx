import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    image: "/blog-1.png",
    date: "APR 26, 2024",
    readTime: "3 MIN READ",
    title: "Mastering the ATS: How to Build a Resume that Gets Interviews",
  },
  {
    id: 2,
    image: "/blog-2.png",
    date: "APR 20, 2024",
    readTime: "5 MIN READ",
    title: "The Simple Guide to Taking Notes that Actually Stick",
  },
  {
    id: 3,
    image: "/blog-3.png",
    date: "APR 15, 2024",
    readTime: "4 MIN READ",
    title: "5 Financial Habits for Freelancers to Manage Budgets Better",
  },
];

const Blogs = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] uppercase font-bold tracking-widest border border-black/10 rounded-full px-4 py-1.5 mb-6">
            OUR BLOGS
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-[#111] leading-tight tracking-tight">
            The Latest Story From <br /> Our Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group cursor-pointer block">
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-black/40 mb-3 tracking-wider">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-[#111] leading-snug mb-6 group-hover:text-foreground/70 transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center justify-between border-t border-black/5 pt-6 group">
                <span className="text-sm font-bold text-[#111]">Read Story</span>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black/5 group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#5AFF5A] text-black text-sm font-bold px-8 py-3.5 rounded-full hover:bg-[#4AEF4A] transition-colors">
            See All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
