
export default function CardForm() {
  return (
    <form action="#" className="cardform">
      <div className="cardnoparent">
        <h6>Card Number</h6>
        <div className="cardno">
          <input type="text" placeholder="0000   0000   0000   0000"/>
          <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.80127 1.59499H14.7314V12.8503H8.80127V1.59499Z" fill="#FF8136"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.17794 7.22259C9.17794 9.50602 10.1902 11.5397 11.7665 12.8502C10.6136 13.8088 9.15912 14.3807 7.57812 14.3807C3.83536 14.3807 0.801392 11.1758 0.801392 7.22259C0.801392 3.26934 3.83536 0.0645123 7.57812 0.0645123C9.15912 0.0645123 10.6136 0.636364 11.7665 1.59495C10.1902 2.90567 9.17794 4.93917 9.17794 7.22259Z" fill="#EB001B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.5199 2.78706V3.06483H22.4512L22.3723 2.87375L22.2932 3.06483H22.2245V2.78706H22.2729V2.99663L22.3471 2.81589H22.3974L22.4715 2.99703V2.78706H22.5199ZM22.0848 2.78706V3.01751H22.173V3.06443H21.9489V3.01751H22.0368V2.78706H22.0848ZM22.7315 7.22268C22.7315 3.26943 19.6974 0.0646013 15.9548 0.0646013C14.3738 0.0646013 12.9191 0.636451 11.7664 1.59504C13.3427 2.90556 14.355 4.93926 14.355 7.22268C14.355 9.50591 13.3427 11.5396 11.7664 12.8503C12.9191 13.8089 14.3738 14.3808 15.9548 14.3808C19.6974 14.3808 22.7315 11.1759 22.7315 7.22268Z" fill="#EDE51F"/>
          </svg>
        </div>
      </div>
      <div className="cardnameparent">
        <h6>Name On Card</h6>
        <div className="cardname">
          <input type="text" placeholder="ENTER YOUR NAME"/>
        </div>        
      </div>
      <div className="expirycvv">
        <div className="expiry">
          <h6>Expiry Date</h6>
          <div className="expiry">
            <input type="text" placeholder="MM/YY"/>
          </div>
          
        </div>
        <div className="">
          <h6>CVV</h6>
          <div className="cvv">
            <input type="text" placeholder="---"/>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6819 4.31814 14.6666 8.00004 14.6666Z" stroke="#536DEE" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 5.33331V7.99998" stroke="#536DEE" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10.6667H8.00667" stroke="#536DEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        
        </div>        
      </div>

    </form>
  )
}
