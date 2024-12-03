import Image from 'next/image'
import React from 'react'
import appdev1 from '../../../public/images/fullcycledevimg/appdev1.webp';
import appdev2 from '../../../public/images/fullcycledevimg/appdev2.webp';
import appdev3 from '../../../public/images/fullcycledevimg/appdev3.webp';
import appdev4 from '../../../public/images/fullcycledevimg/appdev4.webp';
import appdev5 from '../../../public/images/fullcycledevimg/appdev5.webp';
const AppDevelopment = () => {
  return (
    <div>
      <section className="app-dev-cycle pt-5">
        <div className='container'>
          <div className="row">
            <div className='col-sm-12 col-xs-12 heading-main pb-5 text-center'>
              <h2 className='mb-3'>Our Team Assists You Through Full Cycle Mobile <br/><span>App Development Services</span></h2>
              <p>Product management is the cornerstone of our full-cycle product development. Driven by innovation, we strive to create a unique product with cutting-edge design and technology.</p>
            </div>
          </div>
          <div className='row'>
            <div className="col-sm-12 col-xs-12 icon-heading-content">
              <div className="card-heading-content">
                <div className='icon'>
                  <Image src={appdev1} alt='Requiement Gathering'/>
                </div>
                <h3>Requirement Gathering</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="card-heading-content">
                <div className='icon'>
                <Image src={appdev2} alt='Design'/>
                </div>
                <h3>Design</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="card-heading-content">
                <div className='icon'>
                <Image src={appdev3} alt='Development'/>
                </div>
                <h3>Development</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="card-heading-content">
                <div className='icon'>
                <Image src={appdev4} alt='Testing'/>
                </div>
                <h3>Testing</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="card-heading-content">
                <div className='icon'>
                <Image src={appdev5} alt='Launch'/>
                </div>
                <h3>Launch</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </div>   
      </section>
    </div>
  )
}

export default AppDevelopment
