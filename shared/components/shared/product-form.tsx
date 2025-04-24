'use client';
import React from 'react';
import { ChooseProductForm } from './choose-product-form';
import type { Product, ProductItem } from '@prisma/client';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

interface Props {
  product: Product & { items: ProductItem[] };
  onSubmit?: () => void;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit }) => {
  const [addCartItem, loading] = useCartStore((s) => [s.addCartItem, s.loading]);

  const handle = async (itemId: number) => {
    try {
      await addCartItem({ productItemId: itemId });
      toast.success(`${product.name} додано до кошика`);
      onSubmit?.();
    } catch {
      toast.error('Не вдалося додати до кошика');
    }
  };

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      description={product.description}
      items={product.items}
      onSubmit={handle}
      loading={loading}
    />
  );
};
