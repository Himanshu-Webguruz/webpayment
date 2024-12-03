import Image from 'next/image'
import React from 'react'
import herarcy from '../../../public/images/fullcycledevimg/herarcy.webp'
const Hierarchy = () => {
  return (
    <>
    <section className='web-hierarchy'>
      <Image src={herarcy} alt='Product Hierarchy' className='product-hierarchy' />
    </section>
    </>
  )
}

export default Hierarchy
