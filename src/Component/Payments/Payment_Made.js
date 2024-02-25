import React from 'react';
import '../Allcss/index.css';
import Head from '../Header/header';
import { ReactComponent as BackIcon } from '../Images/icons/Leftsquare.svg';
import { ReactComponent as SuccessIcon } from '../Images/icons/rigte-scess.svg';
import { Image } from 'react-bootstrap';
import dummyImg from '../Images/dummyimg.svg';
import { ReactComponent as Linkdin } from '../Images/linkdin.svg'
import { ReactComponent as Verify } from '../Images/verifiy.svg'
import { Link } from 'react-router-dom';

const Payment_Made = () => {
  return (
    <>
      <div>
        <Head />
        <section>
          <div class="container mt-2">
            <button className='button'><BackIcon /></button>
            <div className="row justify-content-center card-full-div">
              <div className='success-card'><SuccessIcon /></div>
              <div class="col-md-6">
                <div class="card bg-color-card">
                  <div class="card-body">

                    <h2 className='price-heading'>Rs 200 /-</h2>

                    <hr className='single-line-color' />
                    <p className='payment-para'>Rento Gerbo has requested to CONNECT. <br /> The payment will be made if you 'ACCEPT"</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="card bg-color-card-2">
                  <div class="card-body">
                    <p className='payment-para-2'>The payment is just a token of respect of your time. You have the option to either receive the amount or give it to a charitable cause</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-md-9 col-lg-7 col-xl-5">
                <div class="card card-color-2">
                  <div class="card-body p-4 text-black">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <Image src={dummyImg} roundedCircle />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <div class="d-col flex-col align-items-center mb-2 ">
                          <h3 class="mb-0 me-2 set-name"><span>Remo Gerber</span></h3>
                          <p className='set-para mt-1'>Marketing Manager at Microsoft</p>
                          <hr className='single-line-color-2' />
                          <p className='set-pera-2'>Angel Investor, Advisor to startups, Speaker, Mentor</p>
                        </div>
                      </div>
                    </div>
                    <div className='icons-set'>
                      <Linkdin className='set-linkdin' />
                      <a href="#" target="_blank" rel="noopener noreferrer"><Verify /></a>
                    </div>
                    <hr className='hr-link' />
                    <div>
                      <h4 className='set-descri mt-2'><span>Hi John,
                        “I noticed your profile sometimes back. Let’s Connect and exchange insights. Would you be open to a quick chat?
                        I noticed your profile sometimes back. Let’s Connect and exchange insights. Would”</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 mt-4 mb-5">
              <Link to="/available" class="accept-button">Accept</Link>
              <button class="decline-button" type="button">Decline</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Payment_Made