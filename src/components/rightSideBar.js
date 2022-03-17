
export default function RightSideBar() {
    return (
        <div className="sidebar">
            <div className="summary">
                <h5>Order Summary</h5>
                <small>Edit</small>
            </div>
            <div className="profile">
                <img src="./images/profile.png" alt="" />
                <div className="about">
                    <div className="pers">
                        <h5>ELLA .H</h5>
                        <div className="circarrow">
                            <svg className="circ" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.6587 3.41101C12.13 2.72986 10.4221 2.56112 8.78965 2.92995C7.15723 3.29877 5.68776 4.1854 4.6004 5.4576C3.51305 6.72981 2.86607 8.31942 2.75595 9.98936C2.64584 11.6593 3.07849 13.3201 3.98938 14.7241C4.90027 16.128 6.24059 17.1999 7.81045 17.7799C9.38031 18.3599 11.0956 18.4169 12.7005 17.9424C14.3054 17.4679 15.7139 16.4873 16.7159 15.1469C17.718 13.8064 18.2599 12.178 18.2609 10.5044V9.66522C18.2609 8.90883 18.874 8.29566 19.6304 8.29566C20.3868 8.29566 21 8.90883 21 9.66522V10.5052C20.9987 12.7695 20.2655 14.9734 18.9098 16.7869C17.5541 18.6004 15.6484 19.9271 13.4771 20.5691C11.3058 21.2111 8.98512 21.134 6.86119 20.3493C4.73726 19.5646 2.92389 18.1144 1.69151 16.2149C0.459129 14.3154 -0.126219 12.0685 0.0227606 9.80914C0.171741 7.5498 1.04707 5.39915 2.51819 3.67794C3.98932 1.95672 5.97742 0.757161 8.186 0.258163C10.3946 -0.240835 12.7053 -0.0125362 14.7735 0.90901C15.4644 1.21686 15.7749 2.02651 15.4671 2.71742C15.1592 3.40833 14.3496 3.71886 13.6587 3.41101Z" fill="#03CD0B"/>
                            </svg>

                            <svg className="arr" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.6151 0.404744C14.1279 0.944784 14.1283 1.8208 13.616 2.36138L4.86604 11.5943C4.61994 11.854 4.28604 11.9999 3.93783 12C3.58962 12.0001 3.25564 11.8543 3.00942 11.5948L0.384422 8.82767C-0.128141 8.28735 -0.128141 7.41134 0.384422 6.87103C0.896985 6.33072 1.72801 6.33072 2.24058 6.87103L3.93704 8.65932L11.759 0.405722C12.2713 -0.134859 13.1023 -0.135296 13.6151 0.404744Z" fill="#03CD0B"/>
                            </svg>

                        </div>
                        <img src="../images/uk.svg" alt="" />
                    </div>
                    <div className="edu">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5272 0.122908C10.8225 -0.0409694 11.1775 -0.0409694 11.4728 0.122908L21.4728 5.67299C21.7974 5.85318 22 6.20343 22 6.58456V12.1346C22 12.706 21.5523 13.1691 21 13.1691C20.4477 13.1691 20 12.706 20 12.1346V7.20352L11 2.20845L3.11522 6.58456L11.0269 10.9756L15.7701 8.63908C16.0799 8.48645 16.4437 8.50883 16.7339 8.69836C17.024 8.88788 17.2 9.21808 17.2 9.57307V15.5501C17.2 16.909 16.2748 18.0376 15.1959 18.7649C14.0779 19.5186 12.5871 20 11 20C9.41293 20 7.92206 19.5186 6.80405 18.7649C5.72517 18.0376 4.8 16.909 4.8 15.5501V9.86756L0.527235 7.49614C0.202582 7.31596 0 6.9657 0 6.58456C0 6.20343 0.202582 5.85318 0.527235 5.67299L10.5272 0.122908ZM6.8 10.9776V15.5501C6.8 15.8989 7.07483 16.478 7.89595 17.0315C8.67794 17.5586 9.78707 17.931 11 17.931C12.2129 17.931 13.3221 17.5586 14.1041 17.0315C14.9252 16.478 15.2 15.8989 15.2 15.5501V11.2115L11.4299 13.0686C11.1427 13.2101 10.8076 13.2018 10.5272 13.0462L6.8 10.9776Z" fill="#777777"/>
                        </svg>
                        <small>English</small>
                    </div>
                </div>
            </div>
            <div className="datediv">
                <p className="hdline">Date and Time</p>
                <p className="date">Friday, February 4, 18:30</p>
                <p className="time">GMT +5:30</p>
            </div>
            <div className="coupondiv">
                <h5>Apply Coupon</h5>
                <input type="text" className="coupon"/>
            </div>
            <div className="servicediv">
                <div className="keys">
                    <h6>Service details</h6>
                    <ul>
                        <li>1 hour lesson</li>
                        <li>Transaction fee</li>
                        <li>Lesson cancellation</li>
                    </ul>
                </div>
                <div className="values">
                    <h6>Price per hour</h6>
                    <ul>
                        <li>₹3,000.80</li>
                        <li>₹22.51</li>
                        <li className="success">Free</li>
                    </ul>
                </div>

            </div>
            <div className="total">
                <h4 className="tit">Total</h4>
                <h4 className="val">Rs: 3496.00</h4>
            </div>
            <div className="sidefooter">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.75 2.25H5.25C3.59315 2.25 2.25 3.59315 2.25 5.25V12.75C2.25 14.4069 3.59315 15.75 5.25 15.75H12.75C14.4069 15.75 15.75 14.4069 15.75 12.75V5.25C15.75 3.59315 14.4069 2.25 12.75 2.25Z" stroke="#15C11C" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 9L8.4375 10.5L11.25 7.5" stroke="#15C11C" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="adv">I want a <span className="success">free lesson</span> or a refund if the tutor doesn’t meet my needs</p>
            </div>
        </div>
    )
  }
  