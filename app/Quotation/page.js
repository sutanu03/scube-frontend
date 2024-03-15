"use client"
import React, { useState } from 'react';
import SimpleQuote from '@/app/Quotation/Components/SimpleQuote';
const Quotation = () => {
  return (
    <div className='mt-2'>
      <h2 className='flex items-center justify-center text-xl font-semibold mb-4 underline'>Quotation Page</h2>
    <SimpleQuote/>
    </div>
  );
};

export default Quotation;

