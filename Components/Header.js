import React from 'react';
import Link from 'next/link';

function BasicExample() {
  return (
    <div className="h-16 p-4 text-white bg-blue-800 flex items-center justify-between">
      
      <Link href="/Dashboard">
      <h1 className="text-2xl font-bold">
      Dashboard      
        </h1>
      </Link>
      
      <div className="flex gap-8">
      <Link href="/">Home</Link>
      <Link href="/Quotation">Quotation</Link>
      Logout
      </div>
     
    </div>
  );
}

export default BasicExample;