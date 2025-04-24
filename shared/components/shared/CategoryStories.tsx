'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@prisma/client';

export default function CategoryStories({
  categories,
  activeId,
}: {
  categories: { id: string | number; name: string; imageUrl: string }[];
  activeId?: string | number;
}) {
  return (
    <div className="flex overflow-x-auto space-x-4 py-4">
      {categories.map((category) => {
        const isActive = String(category.id) === String(activeId);
        return (
          <div
            key={category.id}
            className={`relative rounded-lg overflow-hidden border-2 ${
              isActive ? 'border-blue-500' : 'border-gray-300'
            } transition-transform duration-300 hover:scale-105`}
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-32 h-32 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center transition-all duration-300">
              <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                {category.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

