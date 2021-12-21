
import Link from 'next/link';
import { useState } from 'react';
function Header3() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
      <>
        {/* <!-- Header --> */}
	    <!-- Messenger Chat plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "100268305736200");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
        <header className="site-header header-transparent mo-left">
	    <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <i className="la la-envelope"></i>{" "}
                                        growmoreonlinee@gmail.com
                                    </li>
                                    <li>
                                        <i className="la la-phone-volume"></i> +91
                                        +91 9922103897
                                    </li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="https://www.facebook.com/growmoreonlinee/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href="https://www.instagram.com/growmoreonlinee/"
                                        ></a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/">
								<a>
									<img className="custom-logo-white" src="images/gmo-white.png" alt="" />
									<img className="custom-logo" src="images/gmo-dark.png" alt="" />
								</a>
							</Link>
							
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="contact-us-3"><a className="btn btn-corner gradient btn-primary"><i className="fa fa-angle-right m-r10"></i>Get A Quote</a></Link>
                            </div>
                        </div>
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/gmo-dark.png" alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
								<li><Link href="/"><a>Home</a></Link></li>
								 <li><Link href="/services-3"><a>Services</a></Link></li>
                                <li><Link href="/about-us-3"><a>About Us</a></Link></li>
                                <li><Link href="/faq-3"><a>FAQ</a></Link></li>
                               
                                
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                    <Link href="/https://www.facebook.com/growmoreonlinee/"><a className="fa fa-facebook"></a></Link>
                         \
                                    <Link href="/https://www.instagram.com/growmoreonlinee/"><a className="fa fa-instagram"></a></Link>
                                </ul>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header3;

  
