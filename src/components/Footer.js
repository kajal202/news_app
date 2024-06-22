import React from 'react'
import { Link } from 'react-router-dom';
 

const Footer = () => {

  return (
    <>
    <footer className="footer " style={{backgroundColor: " rgb(69, 68, 68)", color: "rgb(206, 204, 204)"}}>
      <div className="container pb-0 text-center">
        <div className="row pt-4">
          <div className="col-md-6  ">
            <h5>About Us</h5>
            <p className=''>NewsAnyTime is a news app and presents<br/> in a short or less format, personalized for<br/> you. Get updated with!</p>
          </div>
          <div className="col-md-3 ">
            <h5>Quick Links</h5>
            <ul className="list-unstyled ">
              <li><Link className="text-decoration-none" style={{color: "rgb(206, 204, 204)"}} href="/">Home</Link></li>
              <li><Link className="text-decoration-none" style={{color: "rgb(206, 204, 204)"}} href="/news">News</Link></li>
              <li><Link className="text-decoration-none" style={{color: "rgb(206, 204, 204)"}} href="/about">About</Link></li>
            </ul>
          </div>
          <div className="col-md-3 ">
            <h5>Follow Us</h5>
            <ul className="list-unstyled ">
              <li><Link className="text-decoration-none" style={{color: "rgb(206, 204, 204)"}} href="https://twitter.com">Twitter</Link></li>
              <li><Link className="text-decoration-none" style={{color: "rgb(206, 204, 204)"}} href="https://facebook.com">Facebook</Link></li>
              <li><Link className="text-decoration-none" style={{color: "rgb(206, 204, 204)"}} href="https://instagram.com">Instagram</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="row pt-5">
        <hr></hr>
          <div className="col-12">
            <p className="text-center">© {new Date().getFullYear()} <span className='fs-6 fw-bold'>NewsAnyTime</span> App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;