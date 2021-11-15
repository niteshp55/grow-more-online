import AllServices3 from '../element/all-services-3';
import Footer3 from '../layout/footer-3';
import Header3 from '../layout/header-3';
import Link from 'next/link';


function WebDevelopement() {
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
									<li className="active"><a href="/web-development">Web Development</a>  </li>
									<li><a href="/web-design">Web Design</a>  </li>
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
							<img src="images/development.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Web Development</h3>
								<p>Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.
Web Development can be classified into two ways:
Frontend Development
Backend Development
Frontend Development: The part of a website that the user interacts directly is termed as front end. It is also referred to as the ‘client side’ of the application.
Backend Development: Backend is the server-side of a website. It is the part of the website that users cannot see and interact with. It is the portion of software that does not come in direct contact with the users. It is used to store and arrange data.</p>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<h3>How You Start Web Development ?</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
									<ul className="list-check style-1 primary">
										<li>Information Gathering</li>
										<li>Planning</li>
										<li>Design: Page Layouts, Review, and Approval Cycle</li>
										<li>Content Writing and Assembly</li>
										<li>Coding</li>
										<li>Testing, Review and Launch</li>
									</ul>
									<h3>1) Information Gathering</h3>
									<p>This is the stage of discovering and researching, this determines how the subsequent steps will look like. The most important task at this point is to get a clear understanding of your future website purposes, the main goals you wish to get, and the target audience you want to attract to your site. We will schedule a meeting and ask you some questions about your business. Such kind of a website development questionnaire helps to develop the best strategy for further project management. </p>
									<h3>1) Information Gathering</h3>
									<p>This is the stage of discovering and researching, this determines how the subsequent steps will look like. The most important task at this point is to get a clear understanding of your future website purposes, the main goals you wish to get, and the target audience you want to attract to your site. We will schedule a meeting and ask you some questions about your business. Such kind of a website development questionnaire helps to develop the best strategy for further project management. </p>
									<h3>1) Information Gathering</h3>
									<p>This is the stage of discovering and researching, this determines how the subsequent steps will look like. The most important task at this point is to get a clear understanding of your future website purposes, the main goals you wish to get, and the target audience you want to attract to your site. We will schedule a meeting and ask you some questions about your business. Such kind of a website development questionnaire helps to develop the best strategy for further project management. </p>
									<h3>1) Information Gathering</h3>
									<p>This is the stage of discovering and researching, this determines how the subsequent steps will look like. The most important task at this point is to get a clear understanding of your future website purposes, the main goals you wish to get, and the target audience you want to attract to your site. We will schedule a meeting and ask you some questions about your business. Such kind of a website development questionnaire helps to develop the best strategy for further project management. </p>
									<h3>1) Information Gathering</h3>
									<p>This is the stage of discovering and researching, this determines how the subsequent steps will look like. The most important task at this point is to get a clear understanding of your future website purposes, the main goals you wish to get, and the target audience you want to attract to your site. We will schedule a meeting and ask you some questions about your business. Such kind of a website development questionnaire helps to develop the best strategy for further project management. </p>
									<h3>1) Information Gathering</h3>
									<p>This is the stage of discovering and researching, this determines how the subsequent steps will look like. The most important task at this point is to get a clear understanding of your future website purposes, the main goals you wish to get, and the target audience you want to attract to your site. We will schedule a meeting and ask you some questions about your business. Such kind of a website development questionnaire helps to develop the best strategy for further project management. </p>

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

export default WebDevelopement;
