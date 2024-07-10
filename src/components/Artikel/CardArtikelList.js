import React from "react";

export default function CardArtikelList({
  title,
  description,
  imageUrl,
  time,
  onClick,
}) {
  // Fungsi untuk memotong teks dan menambahkan "..." jika terlalu panjang
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div
      onClick={onClick}
      className="flex bg-white shadow-md rounded-lg overflow-hidden mb-4 w-full md:w-[30vw] min-h-[150px] hover:cursor-pointer"
    >
      {imageUrl && (
        <div className="w-1/2 h-full">
          <img
            className="h-full w-full object-cover"
            src={imageUrl}
            alt={title}
          />
        </div>
      )}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div className="font-bold text-md mb-2">{title}</div>
        <p className="text-gray-700 text-sm flex-grow">
          {truncateText(description, 100)}{" "}
          {/* Ubah panjang maksimum sesuai kebutuhan */}
        </p>
        <p className="text-gray-500 text-xs">{time}</p>
      </div>
    </div>
  );
}
