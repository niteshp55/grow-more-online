import AllServices3 from '../element/all-services-3';
import Footer3 from '../layout/footer-3';
import Header3 from '../layout/header-3';
import Link from 'next/link';


function WebDesign() {
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
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2">
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 m-b30">
						<aside className="side-bar sticky-top">
                            <div className="widget_nav_menu m-b40">
								<ul>
									<li><a href="/services-3">ALL SERVICES</a> </li>
									<li><a href="/strategy-research">Strategy & Research</a></li>
									<li><a href="/web-development">Web Development</a>  </li>
									<li  className="active"><a href="/web-design">Web Design</a>  </li>
									<li><a href="/company-branding">Company Branding</a> </li>
									<li><a href="/seo-marketing">SEO & Marketing</a> </li>
									<li><a href="/support">24X7 Support</a> </li>
								</ul>
							</div>
							<div className="widget widget_bunch_brochures">      		
								<div className="download-file">
									<h4 className="title">Get your brochures</h4>
									<ul>
										<li>
											<a href="/public/proposal.pdf" download="proposal.pdf" >
												<div className="text">Company Brochures</div>
												<i className="fa fa-download"></i>
											</a>
										</li>
										
									</ul>
								</div>
							</div>
                        </aside>
					</div>
					<div className="col-xl-9 col-lg-8">
						<div className="dlab-media m-b30 rounded-md">
							<img src="images/design.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Web Design</h3>
								<p>Well-designed websites offer much more than just aesthetics. They attract visitors and help people understand the product, company, and branding through a variety of indicators, encompassing visuals, text, and interactions. That means every element of your site needs to work towards a defined goal.

But how do you achieve that harmonious synthesis of elements? Through a holistic web design process that takes both form and function into account.</p>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<h3>How We Start Web Development ?</h3>
									<p>steps to design a website requires 7 steps:.</p>
									<ul className="list-check style-1 primary">
										<li>Goal identification</li>
										<li>Scope definition</li>
										<li>Sitemap and wireframe creation:</li>
										<li>Content creation</li>
										<li>Visual elements</li>
										<li>Testing and Launch</li>
									</ul>
									<h3>1)Goal identification</h3>
									<p>Where we work with the you(client) to determine what goals the new website needs to fulfill. I.e., what its purpose is.</p>
									<h3>2) Scope definition</h3>
									<p> Once we know the site's goals, we can define the scope of the project. I.e., what web pages and features the site requires to fulfill the goal, and the timeline for building those out.</p>
									<h3>3) Sitemap and wireframe creation</h3>
									<p>With the scope well-defined, we can start digging into the sitemap, defining how the content and features we defined in scope definition will interrelate.</p>
									<h3>4) Content creation</h3>
									<p>Now that we have a bigger picture of the site in mind, we can start creating content for the individual pages, always keeping search engine optimization (SEO) in mind to help keep pages focused on a single topic. It's vital that you have real content to work with for our next stage:</p>
									<h3>5) Visual elements</h3>
									<p>With the site architecture and some content in place, we can start working on the visual brand. Depending on the client, this may already be well-defined, but you might also be defining the visual style from the ground up. Tools like style tiles, moodboards, and element collages can help with this process.</p>
									<h3>6) Testing, Review and Launch</h3>
									<p>Once everything's working beautifully, it's time to plan and execute your site launch! This should include planning both launch timing and communication strategies — i.e., when will you launch and how will you let the world know? After that, it's time to break out the bubbly.</p>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Services --> */}
		<AllServices3/>
		
	</div>
     <Footer3/>
    </>
  )
}

export default WebDesign;
