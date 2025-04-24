import { Container, ProductForm } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  // 1) Подгружаем продукт с фасовками
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
    include: { items: true },
  });

  // 2) Если не нашли — возвращаем 404
  if (!product) {
    return notFound();
  }

  // 3) Рендерим контейнер + форму, передаём весь объект product
  return (
    <Container>
      <ProductForm product={product} />
    </Container>
  );
}
