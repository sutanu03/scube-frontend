"use client"
import React, { useState } from 'react';
import CreatePO from './Components/CreatePO'

const PO = () => {
  return (
    <div className='mt-2'>
       <h2 className='flex items-center justify-center text-xl font-semibold mb-4 underline'>Purchase Order Page</h2>
      <CreatePO/>
    </div>
  )
}

export default PO
