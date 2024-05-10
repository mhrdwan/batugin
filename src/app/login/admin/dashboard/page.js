import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Dashboard</h1>
      
      {/* Grid Container for Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Banner Management Column */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-600 mb-4"> Banners</h2>
          <input
            type="text"
            placeholder=""
            className="p-2 border border-gray-300 rounded w-full mb-3"
          />
          <ul>
            <li className="flex justify-between items-center p-3 bg-white rounded shadow mb-2">
              <span className="text-gray-700"> Banner 1</span>
              <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
            </li>
            <li className="flex justify-between items-center p-3 bg-white rounded shadow mb-2">
              <span className="text-gray-700"> Banner 2</span>
              <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
            </li>
          </ul>
        </div>

        {/* Article Management Column */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-600 mb-4"> Articles</h2>
          <input
            type="text"
            placeholder=""
            className="p-2 border border-gray-300 rounded w-full mb-3"
          />
          <div className="flex justify-between items-center p-3 bg-white rounded shadow mb-2">
            <input
              type="text"
              defaultValue=" Article 1"
              className="p-2 border border-gray-300 rounded flex-grow"
            />
            <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded">Delete</button>
          </div>
          <div className="flex justify-between items-center p-3 bg-white rounded shadow mb-2">
            <input
              type="text"
              defaultValue=" Article 2"
              className="p-2 border border-gray-300 rounded flex-grow"
            />
            <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded">Delete</button>
          </div>
        </div>

        {/* Testimonial Management Column */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-600 mb-4"> Testimonials</h2>
          <input
            type="text"
            placeholder=""
            className="p-2 border border-gray-300 rounded w-full mb-3"
          />
          <ul>
            <li className="flex justify-between items-center p-3 bg-white rounded shadow mb-2">
              <span className="text-gray-700"> Testimonial 1</span>
              <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
            </li>
            <li className="flex justify-between items-center p-3 bg-white rounded shadow mb-2">
              <span className="text-gray-700"> Testimonial 2</span>
              <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
