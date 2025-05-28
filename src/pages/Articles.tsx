import React from 'react';
import { blogs, govAids } from '../lib/mockData';

const Articles: React.FC = () => (
  <div className="max-w-5xl mx-auto py-8 px-4">
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
      <i className="fas fa-newspaper text-[#2E5A1C] text-2xl" aria-hidden="true"></i>
      Articles
    </h2>
    {/* Blogs Section */}
    <section className="mb-12">
      <h3 className="text-xl font-bold mb-4 text-[#2E5A1C]">Blogs</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="font-bold text-lg mb-1 line-clamp-2">{blog.title}</h4>
              <p className="text-xs text-gray-500 mb-2">{new Date(blog.date).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })} &bull; {blog.author}</p>
              <p className="text-sm text-gray-700 mb-4 flex-1 line-clamp-3">{blog.summary}</p>
              <button className="mt-auto text-[#2E5A1C] text-xs font-medium underline self-start">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* Government Aids Section */}
    <section>
      <h3 className="text-xl font-bold mb-4 text-[#2E5A1C]">Government Aids</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {govAids.map(aid => (
          <div key={aid.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            <img src={aid.image} alt={aid.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="font-bold text-lg mb-1 line-clamp-2">{aid.title}</h4>
              <p className="text-xs text-gray-500 mb-2">{aid.agency}</p>
              <p className="text-sm text-gray-700 mb-4 flex-1 line-clamp-3">{aid.summary}</p>
              <a href={aid.link} className="mt-auto text-[#2E5A1C] text-xs font-medium underline self-start" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Articles; 