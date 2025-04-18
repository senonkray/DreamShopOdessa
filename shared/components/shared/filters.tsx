'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useQueryFilters, useIngredients, useFilters } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const updatePrices = (prices: number[]) => {
    console.log(prices, 999);
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Відсіяти Зайве" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title="Типи товару"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: 'Тропічні', value: '1' },
          { text: 'Бабусі з гярдки', value: '2' },
          { text: 'Це не зйсти', value: '3' },
          { text: 'Рідке', value: '4' },
        ]}
      />

      <CheckboxFiltersGroup
        title="Фасування"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '30 г', value: '30' },
          { text: '50 г', value: '50' },
          { text: '100 г', value: '100' },
          { text: '500 г', value: '500' },
          { text: '1кг', value: '1' },
          { text: '50 шт', value: '050' },
          { text: '100 шт', value: '0100' },
        ]}
      />

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна от і до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1500}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1500}
            placeholder="1500"
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1500}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1500]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title=" "
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
