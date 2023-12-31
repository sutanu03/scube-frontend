import React from 'react';
import Link from 'next/link';

function Header() {

  // header component

  return (
    <div className="h-16 p-4 text-white bg-blue-800 flex items-center justify-between">
      
      <Link href="/">
      <h1 className="text-2xl font-bold">
          SG Home  
        </h1>
      </Link>
      
      <div className="flex gap-6">
      <Link href="/Dashboard">Dashboard</Link>
      <Link href="">Supplier</Link>
      <Link href="">Product</Link>
      <Link href="">Assign User</Link>
      <Link href="/Quotation">Quotation</Link>
      <Link href="">Purchase Order</Link>
      <Link href="">Invoice</Link>
      <Link href="">Logout</Link>
      </div>
     
    </div>
  );
}

export default Header;