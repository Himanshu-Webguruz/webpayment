import React from 'react'
import Image from 'next/image'
import agility from '../../../public/images/agileimg/agile-dev.svg'
const AgileProducts = () => {
  return (
    <>
      <section className="agile-product-main py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className='col-sm-6 col-xs-12 agile-image-left mb-3'>
                   <Image src={agility} alt='Agile Software Development Services'/>
                </div>
                <div className='col-sm-6 col-xs-12 agile-content-right'>
                <h2 className='mb-4'>Empowering Businesses to Achieve Exceptional Results with Agile</h2>
                <p>At WebGuruz, our agile development approach empowers businesses to achieve faster time-to-market, better project visibility, and greater adaptability. Our team understands the importance of staying flexible while focusing on results.</p>
                <p>Through agile methodologies, we create a continuous feedback loop, enabling real-time enhancements based on client insights and market trends. By breaking down projects into manageable sprints, we offer clients a transparent process and the ability to pivot as needed- so you&apos;re always in control of the product&apos;s trajectory.</p>
                <p>The result? High-performing software that&apos;s responsive to your business needs and poised for success.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AgileProducts
