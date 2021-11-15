import AllServices3 from '../element/all-services-3';
import Footer3 from '../layout/footer-3';
import Header3 from '../layout/header-3';
import Link from 'next/link';


function StrategyResearch() {
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
									<li className="active"><a href="/strategy-research">Strategy & Research</a></li>
									<li><a href="/web-development">Web Development</a>  </li>
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
							<img src="images/blog/default/thum1.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Strategy & Research</h3>
								<p>When trying to design a great website it is very easy to focus on making something aesthetically pleasing while forgetting to make sure that the website also achieves your business’ online goals.</p>
							</div>
							<div className="row">
								<div className="col-lg-12">
									
									<p>This is why a well thought-out marketing strategy is crucial to the success of any website design project. Regardless of brand or industry, you need to have a strategy in place so that you are able to identify your business’ objectives and determine what tactics you will need in order to accomplish them. The process of building out an efficient marketing strategy can be complex and should be examined in three phases prior to a website’s launch:</p>
									<ul className="list-check style-1 primary">
										<p>How we plan and execute best strategy for your business.</p>
									<ul className="list-check style-1 primary">
										<li>The Discovery Phase</li>
										<p>Developing any strategy starts with extensive research in order to really get a complete understanding of the industry and business itself. A deep analysis of the competitive landscape is imperative to the success of your project, both from a strategy and design perspective. It is crucial to have a mix of both qualitative and quantitative research, such as examining current website metrics, engaging in competitive research, and having conversations with stakeholders will provide you with findings that are going to be relevant throughout the entire strategy process.
											</p>
										<p>Conducting your own research with each new initiative gives you supporting quantitative data that will leave you with accurate, unbiased results to eventually use as a basis for decision-making. This information can help plan your web development strategy’s design elements, calls-to-action, navigation, and other items that will increase overall site usability and conversion rate.
											</p>
										<li>The Audit Phase</li>
										<p>The culmination of the discovery phase brings you to the audit—the first real deliverable, that you should be presenting to the decision-makers of your website design project. It’s at this point that you want to take all of your insights from the research you conducted regarding audience, competition, and the current website and use them to present an actionable plan for your website design and pinpoint any goals based on the analysis. For example, if the client is a start-up, comparing them to competitors can lead to completing a branding audit that can verify their positioning and presence in the industry, which will further narrow down the goal of your strategy.</p>
									
										<li>The Web Strategy Phase</li>
											<p>Once your audit is presented, it’s time to move on to the web strategy phase. At this point, you want to focus on taking the insights found through your audit and turning them into legitimate recommendations that integrate various creative and design elements.</p>
										<li>Effective Processes Drive Achievements</li>
										<p>While you are developing your web design strategy, every action should be supported and backed up by the specific business objective it will achieve. You want features and content that will constantly keep people coming back. By conducting thorough research, analyzing the insights you find, and applying them to recommended actionable tactics, you can align your business for success and convey a creative branded design for your clients.</p>
										
									</ul>
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

export default StrategyResearch;
