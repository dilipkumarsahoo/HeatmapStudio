import { useParams, Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    image: "/blog-1.png",
    date: "SEP 25, 2023",
    readTime: "3 MIN READ",
    author: "Jane Doe",
    title: "Why We Love Webflow (And You Should, Too!)",
    content: `
      <p>Webflow has revolutionized the way we design and build websites. It bridges the gap between high-fidelity design tools like Figma and traditional development environments. In this article, we explore why Webflow is our go-to choice for modern web projects.</p>
      <h3>The Power of Visual Coding</h3>
      <p>Unlike traditional CMS platforms, Webflow gives you full control over the box model, typography, and interactions without writing a single line of code. However, it's not a "no-code" tool that limits you—it's a visual code tool that generates clean, semantic HTML and CSS.</p>
      <blockquote>"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs</blockquote>
      <h3>Interactions and Animations</h3>
      <p>One of the standout features is the Interaction engine. You can create complex, high-performance animations that would typically require thousands of lines of JavaScript, all through an intuitive visual interface.</p>
      <h3>Client Empowerment</h3>
      <p>The Webflow Editor allows clients to update content directly on the page, ensuring they can keep their site fresh without needing to navigate a complex backend or risk breaking the design.</p>
    `,
  },
  {
    id: 2,
    image: "/blog-2.png",
    date: "SEP 25, 2023",
    readTime: "4 MIN READ",
    author: "John Smith",
    title: "The Worst Advice We've Ever Heard About Web Design",
    content: `
      <p>In the fast-paced world of web design, there's no shortage of opinions. But not all advice is created equal. Today, we're debunking some of the most common myths that could be holding your website back.</p>
      <h3>"Always follow the trend"</h3>
      <p>While staying current is important, blindly following trends like glassmorphism or neumorphism can lead to poor usability and a dated look once the trend passes. Focus on timeless design principles first.</p>
      <h3>"More features is always better"</h3>
      <p>Feature creep is a real problem. Every additional element on a page is a potential distraction for your user. Complexity should never come at the cost of clarity.</p>
      <h3>"Mobile is secondary"</h3>
      <p>In 2024, mobile-first isn't just a suggestion—it's a requirement. If your site doesn't perform perfectly on a smartphone, you're losing more than half of your potential audience.</p>
    `,
  },
  {
    id: 3,
    image: "/blog-3.png",
    date: "SEP 25, 2023",
    readTime: "2 MIN READ",
    author: "Alice Wong",
    title: "5 Principles Of Effective Web Design",
    content: `
      <p>What makes a website effective? It's more than just a pretty layout. It's about achieving a perfect balance between form and function. Here are five core principles every designer should live by.</p>
      <ol>
        <li><strong>Hierarchy:</strong> Guide your user's eye to the most important elements first using scale, color, and contrast.</li>
        <li><strong>Consistency:</strong> Maintain a unified design language across all pages to build trust and familiarity.</li>
        <li><strong>White Space:</strong> Don't be afraid of empty space. It lets your content breathe and improves readability.</li>
        <li><strong>Accessibility:</strong> Design for everyone. Ensure your site is usable by people with varying abilities.</li>
        <li><strong>Performance:</strong> A beautiful site that takes 10 seconds to load is a failed site. Speed is a design feature.</li>
      </ol>
    `,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link to="/" className="text-brand-green hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Article Header */}
      <article className="pt-32 pb-24">
        <div className="max-w-[900px] mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black mb-10 transition-colors">
            <ArrowLeft size={16} />
            Back to home
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-[11px] font-bold text-black/40 tracking-wider">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-black/40 tracking-wider">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-black/40 tracking-wider">
              <User size={14} />
              <span>{post.author}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-medium text-[#111] leading-tight mb-12 tracking-tight">
            {post.title}
          </h1>

          <div className="aspect-[21/9] rounded-[32px] overflow-hidden mb-16 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover shadow-inner"
            />
          </div>

          {/* Content Area */}
          <div className="prose prose-lg prose-headings:font-display prose-headings:font-medium prose-headings:text-[#111] prose-p:text-black/70 prose-strong:text-[#111] max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags/Footer of article */}
          <div className="mt-16 pt-10 border-t border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {["Design", "Business", "Product"].map(tag => (
                <span key={tag} className="text-xs font-bold px-4 py-2 bg-black/5 rounded-full hover:bg-black/10 cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogDetails;
