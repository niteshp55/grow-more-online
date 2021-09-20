

import Footer3 from '../layout/footer-3';
import Header3 from '../layout/header-3';
import { useState } from "react";
import AllServices3 from '../element/all-services-3';
import Clients3 from '../element/clients-3';
import Testimonial3 from '../element/testimonial-3';
import TeamSlider3 from '../component/teamSlider-3';
import Link from 'next/link';


function Services3() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header3/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Services</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Services</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		 {/* <!-- Banner End -->  */}
		
		 {/* <!-- Services --> */}
		<AllServices3/>
		
		{/* // <!-- Our Fetures --> */}
		<section className="content-inner bg-gray">
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">Our Fetures</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row align-items-center about-wraper-2">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><i className="flaticon-idea"></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Idea & Analysis</h4>
										<p>We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><i className="flaticon-vector"></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Designing</h4>
										<p>Color scheme, layout, sitemap, and style. We will bring your brand to life with a one of a kind masterpiece, built just for you.
</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="dz-media text-center m-b30">
							<img src="images/about/img7.png" className="move-4" alt=""/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><i className="flaticon-coding"></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Development</h4>
										<p>We turn your ideas into a reality. and your website is placed on a "development server" where you get to watch the whole process, live.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white"><i className="flaticon-rocket"></i></a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Testing & Lunching</h4>
										<p>This is where you go live, to the world. Design, marketing, and maintenance; we'll be at your side for the life of your site.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Newslette/r --> */}
		<section className="content-inner-3 bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s" style={{"backgroundImage":"url(images/background/bg12.png), var(--gradient-sec)","backgroundSize":"cover, 200%","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center subscribe-wraper-1">
					<div className="col-lg-7 col-md-6">
						<h2 className="text-white title m-b30">Subscribe To Our Newsletter For Latest Update Of New Products</h2>
					</div>
					<div className="col-lg-5 col-md-6">
						<div className="dlab-subscribe style-3 max-w500">
							<form className="dzSubscribe" action="script/mailchamp.php" method="post">
								<div className="dzSubscribeMsg"></div>
								<div className="form-group m-b30">
									<div className="input-group mb-0">
										<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address"/>
										<div className="input-group-addon">
											<button name="submit" value="Submit" type="submit" className="btn btn-corner gradient shadow btn-primary">Subscribe Now</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
		

		
		{/* <!-- Contact Form --> */}
		<section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-media">
							<img src="images/about/img8.png" className="move-4" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<form className="dlab-form style-1 dzForm" method="POST" action="script/contact.php">
							<div className="section-head style-3">
								<h2 className="title">Get In Touch With Us</h2>
								<div className="dlab-separator style-2 bg-primary"></div>
							</div>
							<div className="dzFormMsg"></div>
							<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
							<input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
							<div className="row">
								<div className="col-sm-12">
									<div className="input-group">
										<input name="dzName" type="text" required className="form-control" placeholder="Full Name"/>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<input name="dzEmail" type="text" required className="form-control" placeholder="Email Address"/>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Phone No."/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzOther[project_title]" type="text" required className="form-control" placeholder="Project Title"/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<select name="dzOther[choose_service]" className="form-control" required>
											<option>Choose Service</option>
											<option value="1">Web Development</option>
											<option value="2">Web Design</option>
											<option value="3">Strategy & Research</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<textarea className="form-control" required placeholder="Message"></textarea>
									</div>
								</div>
								<div className="col-sm-12">
									<button type="submit" className="btn btn-corner gradient btn-block btn-primary">Submit Now</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		
	</div>
     <Footer3/>
    </>
  )
}

export default Services3;