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
									<h3>How We Start Web Development ?</h3>
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
									<h3>2) Planning</h3>
									<p>Sitemap and Wireframe Creation
At this stage of the website development cycle, then we create the data that allows you to judge how the entire site will look like.</p>
									<h3>3) Design: Page Layouts, Review, and Approval Cycle</h3>
									<p>During the design phase, your website takes shape. All the visual content, such as images, photos, and videos are created at this step. Once again, all the info that was gathered through the first phase is crucial.</p>
									<h3>4) Content Writing and Assembly</h3>
									<p>Content writing and compiling usually overlaps with other stages of website creation, and its role can’t be underestimated. At this step, it is necessary to put in writing the very essence you’d like to communicate to the audience of your website and add calls to action. Content writing also involves the creation of catching headlines, text editing, writing new text, compiling the existing text, etc., which takes time and effort. As a rule, you(client) undertake to provide website content ready to migrate to the site. It is better when all website content is provided before or during website coding.</p>
									<h3>5) Coding</h3>
									<p>At this step, we can finally start creating the website itself. Graphic elements that have been designed during the previous stages should be used to create an actual website. Usually, the home page is created first, and then all sub-pages are added, according to the website hierarchy that was previously created in the form of a sitemap. Frameworks and CMS should be implemented to make sure that the server can handle the installation and set-up smoothly.
All static web page elements that were designed during the mock-up and layout creation will be created and tested. Then, special features and interactivity will be added.</p>
									<h3>6) Testing, Review and Launch</h3>
									<p>Testing is probably the most routine part of a process. Every single link will be tested to make sure that there are no broken ones among them. We will check every form, every script, run spell-checking software to find possible typos. Use code validators to check if your code follows the current web standards.
After we check and re-check your website, it’s time to upload it to a server. An FTP (File Transfer Protocol) software is used for that purpose. After we deploy the files, we will run yet another, final test to be sure that all files have been installed correctly. </p>
									<h3>7) Maintenance.</h3>
									<p>What’s important to remember is that a website is more of a service than a product. It’s not enough to “deliver” a website to a user. We will also make sure that everything works fine, and everybody is satisfied and always be prepared to make changes in another case.</p>
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
