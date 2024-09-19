import React from 'react'

const Footer = () => {
  return (
  <>
      <div className="footer-basic">
        <footer>
            <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>

         <hr className='w-[100%] h-0.1  border'  />
         
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Sitemap</a></li>
                <li className="list-inline-item"><a href="#">Privacy Notice</a></li>
            </ul>
            <p className="copyright">Company Name © DeepAI 2021</p>
        </footer>
    </div>
  </>
  )
}

export default Footer