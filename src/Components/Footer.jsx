const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your main content goes here */}</div>
      <div className="footer-basic align-bottom bg-gray-200 p-6">
        <footer>
          <div className="social mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="icon ion-social-instagram"></i>
            </a>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="icon ion-social-snapchat"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="icon ion-social-facebook"></i>
            </a>
          </div>

          <hr className="border-t border-gray-300" />

          <ul className="list-inline flex justify-center space-x-4 mt-4">
            <li>
              <a href="/" className="text-gray-700 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-700 hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/sitemap" className="text-gray-700 hover:underline">
                Sitemap
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-700 hover:underline">
                Privacy Notice
              </a>
            </li>
          </ul>
          <p className="copyright text-center mt-4 text-gray-600">
            Company Name © DeepAI 2021
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
