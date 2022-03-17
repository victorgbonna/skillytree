import { useState } from 'react'
import Link from 'next/link'
import Card from './card'
import CardForm from './cardForm'

export default function MainContent() {
    const [currentTab, setCurrentTab]= useState(1)
    const [currentPaymthd, setCurrentPaymthd]= useState(0)
    const listTab=['Personal Details', 'Payment Section']
    const paymethods=['Credit/Debit Card', 'Net Banking','UPI']
    return (
      <main className='maincontent'>
          <div className='tab'>
            {listTab.map((tab, index)=>
                <div className={`tabdiv ${currentTab==index && 'activetab'}`} onClick={()=>setCurrentTab(index)} key={index}>
                    {currentTab==index && 
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#FC4D6D"/>
                    </svg>}
                    <h6>{tab}</h6>
                </div>
            )}
          </div>
          <div className="paydiv">
              <h4 className="paysec">PAYMENT SECTION</h4>
              <div className="savcard">
                <h5>SAVED CARDS </h5> 
                <small>Edit</small> 
              </div>
              <div className="cardgrid">
                <Card stylebtmCirc="large"/>
                <Card stylebtmCirc="small"/>
              </div>              
          </div>
          <div className='otherpay'>
              <h6>Other Payment Methods</h6>
              <div className='othergrid'>
                {paymethods.map((method, index)=>
                  <div key={index} className={`otherdiv ${currentPaymthd==index && 'activemthd'}`} onClick={()=>setCurrentPaymthd(index)}>
                    <p>{method}</p>
                  </div>
                )}
              </div>

          </div>
          <CardForm/>
          <div className='mainfooter'>
            <div className='prev'>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 8H3.33337" stroke="#3A59F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.00004 12.6666L3.33337 7.99998L8.00004 3.33331" stroke="#3A59F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Back to personal details</p>
            </div>
            <div className='next'>
              <p>MAKE PAYMENT</p>
            </div>
          </div>
      </main>
    )
}
 