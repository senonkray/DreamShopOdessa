import React from 'react';

interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => (
  <div>
    <p>
      3 цифри на обороті картки"це жарт": <h2>{code}</h2>
    </p>

    <p>
      <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>не гальмуй скоріш купуй) </a>
    </p>
  </div>
);
