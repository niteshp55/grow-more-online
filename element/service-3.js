import { useState } from "react";
import Link from 'next/link';

function Service3() {
    const [open, setOpen] = useState("p2")
    return (
      <>
        {/* <!-- Service --> */}
		<section className="content-inner">
			<div className="container">
				<div className="section-head style-3 text-center mb-4">
					<h2 className="title">Our Speciallization</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className={`${open === "p1" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-office"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Strategy & Research</h4>
								<p className="m-b20">We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-coding"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Web Development</h4>
								<p className="m-b20">We turn your ideas into a reality. and your website is placed on a "development server" where you get to watch the whole process, live.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-laptop"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Marketing</h4>
								<p className="m-b20">We use strategic marketing tactics that have been proven to work.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className={`${open === "p4" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-dollar"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Company Branding</h4>
								<p className="m-b20">Branding aims to establish a significant and differentiated presence in the market that attracts and retains loyal customers.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-line-chart"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">SEO & Marketing</h4>
								<p className="m-b20"> Take your website visibility to a higher position and keep you up above all your competitors</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-help"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">24X7 Support</h4>
								<p className="m-b20">24/7 support model ensures that a customer is able to get their issue resolved no matter what day or time it is.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Service3;
