import {
  FaSearch,
  FaRocket,
  FaCog,
  FaServer,
} from "react-icons/fa";

export default function HelpCenterPreview() {
  // Demo categories with proper icons
  const HELP_CATEGORIES = [
    {
      id: "getting-started", 
      title: "Getting Started with Larkon",
      description: "Welcome to Larkon! Dive into basic for a swift on boarding experience.",
      icon: <FaRocket className="text-orange-500 text-3xl" />,
      author: "Aston Martin",
      videoCount: 19
    },
    {
      id: "admin-settings", 
      title: "Admin Settings",
      description: "Learn how to manage your current workspace or your enterprise space.",
      icon: <FaCog className="text-orange-400 text-3xl" />,
      author: "Michael A. Miner",
      videoCount: 10
    },
    {
      id: "server-setup", 
      title: "Server Setup",
      description: "Connect, simplify, and automate. Discover the power of apps and tools.",
      icon: <FaServer className="text-orange-400 text-3xl" />,
      author: "Theresa T. Brose",
      videoCount: 7
    }
  ];

  return (
    <div className="w-full mx-auto">
      {/* Hero Banner */}
      <div className="w-full bg-gray-800 bg-opacity-90 text-white rounded-lg p-6 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-80"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-center mb-2">Help Center</h1>
          <p className="text-gray-300 text-center mb-4">How can we help you?</p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-10 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
      </div>

      {/* Help Categories Grid (showing just 3 for preview) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {HELP_CATEGORIES.map((category) => (
          <div 
            key={category.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="mb-3">
              {category.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{category.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{category.description}</p>
            
            {/* Author Info */}
            <div className="flex items-center mt-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
              <div className="text-sm">
                <p className="text-gray-600">by {category.author}</p>
                <p className="text-amber-500">{category.videoCount} Video{category.videoCount !== 1 ? 's' : ''}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}