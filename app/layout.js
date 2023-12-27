"use client"
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/Components/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}
