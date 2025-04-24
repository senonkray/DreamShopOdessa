import CategoryStories from '@/shared/components/shared/CategoryStories';
import { prisma } from '@/prisma/prisma-client';
import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from '@/shared/components/shared';
import { Suspense } from 'react';
import { GetSearchParams, findPizzas } from '@/shared/lib/find-pizzas';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
      products: {
        select: {
          id: true,
          name: true,
          imageUrl: true,
          description: true,
          categoryId: true,
          createdAt: true,
          updatedAt: true,
          items: true, // Include items relation
          ingredients: true, // Include ingredients relation
        },
      },
    },
    orderBy: { name: 'asc' },
  });

  return (
    <>
      <Container className="mt-10">
        <h1 className="text-4xl font-extrabold mt-10">Усі товари</h1>
      </Container>

      <Container className="mt-10 pb-14">
        {/* Блок CategoryStories остаётся наверху */}
        <CategoryStories
          categories={categories.map(({ id, name, imageUrl }) => ({
            id,
            name,
            imageUrl: imageUrl || '', // Ensure imageUrl is always a string
          }))}
          activeId={searchParams.category}
        />

        {/* Блок с фильтрами и списком товаров */}
        <div className="flex flex-col md:flex-row gap-[80px] mt-8">
          {/* Фильтрация */}
          {/* На мобильных (md и ниже) блок скрыт */}
          <div className="w-[250px] hidden md:block">
            <Suspense fallback={<div>Загрузка фильтров...</div>}>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
