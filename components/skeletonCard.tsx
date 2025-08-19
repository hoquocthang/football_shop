import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 animate-pulse">
      {/* Ảnh giả */}
      <div className="w-full h-[200px] bg-gray-300 rounded-lg mb-4" />

      {/* Text giả */}
      <div className="space-y-3">
        <div className="h-5 w-3/4 bg-gray-300 rounded-md" />
        <div className="h-5 w-1/2 bg-gray-300 rounded-md" />
      </div>

      {/* Nút giả */}
      <div className="h-10 w-full bg-gray-400 rounded-lg mt-4" />
    </div>
  );
};

const SkeletonGrid = () => {
  return (
    <div className="p-6">
      {/* Grid hiển thị 8 card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonGrid;
