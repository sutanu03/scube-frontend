import React from 'react';
import Link from 'next/link';

function Header() {

  // header component

  return (
    <div className="sticky top-0 z-10 bg-white bg-opacity-30 shadow-2xl">
      <div className="max-w-8xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <Link href="/">
      <h1 className="text-2xl text-gray-900 font-bold">
          SG
        </h1>
      </Link>
      
      <div className="flex space-x-4 text-gray-900 font-semibold">
      <Link href="/Supplier">Supplier</Link>
      <Link href="/Product">Product</Link>
      {/* <Link href="">Assign User</Link> */}
      <Link href="/Quotation">Quotation</Link>
      <Link href="/PO">Purchase Order</Link>
      <Link href="/Invoice">Invoice</Link>
      {/* <Link href="">Logout</Link> */}
      </div>
     </div>
    </div>
    </div>
  );
}

export default Header;