import Link from 'next/link'
export default function Nav() {
  
    return (
        <nav className="nav">
            <div className="branddiv">
                <img src="./images/brandpic.png" alt="notshow" />
                <div className="branddetails">
                    <h3 className="brandname">SKILLYTREE</h3>
                    <p className="branddesc">Upskill with a personal touch</p>
                </div>
            </div>
            <div className="extranav">
                <div className="inpgroup">
                    <input type="text" placeholder="SEARCH A SKILL"/>
                    <svg  className='searchbtn' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 21L16.65 16.65" stroke="#747474" stokewidth="2" stokelinecap="round" stokelinejoin="round"/>
                    </svg>
                </div>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.6667 22L18.3334 22" stroke="black" stokewidth="4" stokelinecap="round" stokelinejoin="round"/>
                    <path d="M36.6667 11L7.33337 11" stroke="black" stokewidth="4" stokelinecap="round" stokelinejoin="round"/>
                    <path d="M36.6667 33L29.3334 33" stroke="black" stokewidth="4" stokelinecap="round" stokelinejoin="round"/>
                </svg>
                <div className="navlinks">
                    <Link href="#">
                        <a className='login'>Log In</a>    
                    </Link>
                    <Link href="#">
                        <a className='signup'>Sign In</a>    
                    </Link>
                </div>
            </div>
        </nav>
    )
  }
  