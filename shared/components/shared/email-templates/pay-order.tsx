import React from 'react';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({ orderId, totalAmount, paymentUrl }) => (
  <div>
    <h1>Заказ #{orderId}</h1>

    <p>
      тоби за це все треба відати <b>{totalAmount} ₴</b>. Переходь{' '}
      <a href={paymentUrl}>на цю силку</a> для рівноциного обміну.
    </p>
  </div>
);
