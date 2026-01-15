import { motion } from "framer-motion";

export default function LivePreview({ title }) {
  return (
    <div className="w-full h-48 bg-white dark:bg-gray-900 rounded-lg overflow-hidden relative border-2 border-gray-300 dark:border-gray-700 mb-4">
      {/* Browser chrome mockup */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-200 dark:bg-gray-800 flex items-center px-2 gap-1.5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 mx-2 h-3 bg-white dark:bg-gray-900 rounded text-[6px] flex items-center px-1.5 text-gray-500">
          localhost:5176
        </div>
      </div>

      {/* Miniature live preview */}
      <div className="absolute top-6 left-0 right-0 bottom-0 overflow-hidden">
        <div className="scale-[0.25] origin-top-left w-[400%] h-[400%] pointer-events-none">
          {/* Mini hero section */}
          <div className="flex items-center justify-center h-[25%] bg-white dark:bg-gray-950">
            <div className="text-center">
              <div className="text-6xl font-bold text-black dark:text-white mb-2">Emanuel Feria</div>
              <div className="text-2xl text-gray-600 dark:text-gray-400">Computer Science Senior</div>
            </div>
          </div>

          {/* Mini projects section */}
          <div className="h-[25%] bg-white dark:bg-gray-950 flex items-center justify-center gap-4 px-20">
            <div className="flex-1 h-32 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            <div className="flex-1 h-32 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            <div className="flex-1 h-32 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
          </div>

          {/* Mini experience section */}
          <div className="h-[25%] bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <div className="w-1 h-full bg-gray-300 dark:bg-gray-700 relative">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black dark:bg-white rounded-full"></div>
              <div className="absolute top-2/4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black dark:bg-white rounded-full"></div>
              <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black dark:bg-white rounded-full"></div>
            </div>
          </div>

          {/* Mini contact section */}
          <div className="h-[25%] bg-white dark:bg-gray-950 flex items-center justify-center">
            <div className="text-4xl font-bold text-black dark:text-white">Get in Touch</div>
          </div>
        </div>
      </div>
    </div>
  );
}
