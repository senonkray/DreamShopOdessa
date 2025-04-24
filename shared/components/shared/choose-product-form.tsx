'use client'
import { useState } from 'react';
import { cn } from '@/shared/lib/utils'
import { Title } from './title'
import { Button } from '../ui/button'
import type { ProductItem } from '@prisma/client'


type LocalProductItem = {
  id: number;
  size: number;
  price: number;
};

type ChooseProductFormProps = {
  imageUrl: string;
  name: string;
  description?: string | null;
  items: ProductItem[];
  loading?: boolean;
  onSubmit?: (itemId: number) => void;
};

export const ChooseProductForm = ({
  imageUrl,
  name,
  description,
  items,
  loading,
  onSubmit,
}: ChooseProductFormProps) => {
  const [selected, setSelected] = useState<LocalProductItem>({
    id: items[0].id,
    size: items[0].size ?? 0, // Provide a default value for null
    price: items[0].price,
  });

  const handleSelect = (item: LocalProductItem) => {
    setSelected(item);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(selected.id);
    }
  };

  return (
    <div className="flex flex-row gap-6 p-4 border rounded-md">
      {/* Левый блок: Изображение продукта */}
      <div className="max-w-xs">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-auto object-cover rounded"
        />
      </div>

      {/* Правый блок: Детали продукта */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          {description && (
            <p className="text-gray-600 mb-4">{description}</p>
          )}

          {/* Кнопки выбора фасовки */}
          <div className="flex flex-wrap gap-2 mb-4">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect({ ...item, size: item.size ?? 0 })}
                className={`px-4 py-2 border rounded ${
                  selected.id === item.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-black'
                }`}
              >
                {item.size} г - ${item.price.toFixed(2)}
              </button>
            ))}
          </div>
        </div>

        {/* Кнопка "Добавить в корзину" */}
        <Button onClick={() => onSubmit?.(selected.id)} loading={loading}>
          Додати у кошик за {selected.price} ₴
        </Button>

      </div>
    </div>
  );
};
