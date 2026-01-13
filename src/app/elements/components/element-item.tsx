"use client";

import { useState } from "react";
import Image from "next/image";
interface ElementItemProps {
  handleCardClick: (item: any) => void;
  element?: any;
}

const ElementItem = ({ handleCardClick, element }: ElementItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => handleCardClick(element)}
      className="cursor-pointer bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold relative overflow-hidden">
          {element?.userAvatar ? (
            <Image
              src={element.userAvatar}
              alt="Avatar"
              fill
              className="object-cover"
            />
          ) : (
            "A"
          )}
        </div>
        <div>
          <div className="text-sm font-medium">
            {element?.name || "Aceternity UI"}
          </div>
          <div className="text-xs text-muted-foreground">
            {element?.description || "Timeline · Default"}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg h-40 flex items-center justify-center relative overflow-hidden">
        {element?.videoUrl && isHovered ? (
          <video
            src={element.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        ) : element?.imageUrl ? (
          <Image
            src={element.imageUrl}
            alt={element?.name || "Element preview"}
            fill
            className="object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full bg-gray-200"></div>
        )}
      </div>
    </div>
  );
};

export default ElementItem;
