import React from "react";

// Text Placeholder Component
const TextPlaceholder = ({ numLines = 1, direction = "v", w = "full" }) => {
  const renderLines = () => {
    const lines = [];

    for (let i = 0; i < numLines; i++) {
      lines.push(
        <div
          key={i}
          className={`bg-gray-300 h-4 ${
            direction === "horizontal" ? "w-3/4" : `w-${w}`
          } mb-2 rounded`}
        ></div>
      );
    }

    return lines;
  };

  return (
    <div className="animate-pulse">
      {direction === "h" ? (
        <div className="flex flex-col">{renderLines()}</div>
      ) : (
        <div>{renderLines()}</div>
      )}
    </div>
  );
};

// Image Placeholder Component
const ImagePlaceholder = () => {
  return (
    <div className="animate-pulse h-full">
      <div className="bg-gray-300 h-full w-48 rounded"></div>
    </div>
  );
};

export { TextPlaceholder, ImagePlaceholder };
