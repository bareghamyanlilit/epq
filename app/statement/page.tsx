'use client'

import { useLanguage } from '@/context/LangContext';
import React from 'react'

export default function Statement() {
  const { data } = useLanguage();
  return (
    <div className='Statement'>
      Statement
    </div>
  )
}
