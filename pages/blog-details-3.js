
import Header3 from './../layout/header-3';
import Footer3 from './../layout/footer-3';
import Link from 'next/link';
function BlogDetails3() {
  return (
    <>
	<Header3/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Blogs</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Blogs</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<section className="content-inner">
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-4 m-b30">
                        <aside className="side-bar sticky-top">
                            <div className="widget style-1">
                                <div className="search-bx style-1">
                                    <form role="search" method="post">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-search"></i></span>
											</div>
											<input name="text" className="form-control" placeholder="Search" type="text"/>
                                            <span className="input-group-btn">
												<button type="submit" className="btn btn-primary gradient"><i className="la la-long-arrow-right"></i></button>
                                            </span> 
										</div>
                                    </form>
                                </div>
                            </div>
							<div className="widget widget_archive style-1">
                                <h2 className="widget-title">Category</h2>
                                <ul>
                                    <li><a href="/services-3">Design<span>05</span></a></li>
                                    <li><a href="/services-3">Development<span>25</span></a></li>
                                    <li><a href="/services-3">SEO<span>20</span></a></li>
                                    <li><a href="/services-3">App Design<span>08</span></a></li>
                                    <li><a href="/services-3">Branding<span>22</span></a></li>
                                </ul>
                            </div>
                            <div className="widget recent-posts-entry style-1">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="widget-post-bx">
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<Link href="blog-details-3"><a><img src="images/blog/recent-blog/pic1.jpg" alt=""/></a></Link>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="blog-details-3"><a>Fusce mollis felis quis tristique</a></Link></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<Link href="blog-details-3"><a><img src="images/blog/recent-blog/pic2.jpg" alt=""/></a></Link>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="blog-details-3"><a>Fusce mollis felis quis tristique</a></Link></h4>
											<div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<Link href="blog-details-3"><a><img src="images/blog/recent-blog/pic3.jpg" alt=""/></a></Link>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="blog-details-3"><a>Fusce mollis felis quis tristique</a></Link></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
									<div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<Link href="blog-details-3"><a><img src="images/blog/recent-blog/pic3.jpg" alt=""/></a></Link>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="blog-details-3"><a>Fusce mollis felis quis tristique</a></Link></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div className="widget widget_archive style-1">
                                <h2 className="widget-title">Archives</h2>
                                <ul>
                                    <li><a href="/services-3">January<span>05</span></a></li>
                                    <li><a href="/services-3">Fabruary<span>25</span></a></li>
                                    <li><a href="/services-3">March<span>20</span></a></li>
                                    <li><a href="/services-3">April<span>08</span></a></li>
                                    <li><a href="/services-3">May<span>22</span></a></li>
                                    <li><a href="/services-3">Jun<span>11</span></a></li>
                                    <li><a href="/services-3">July<span>19</span></a></li>
                                </ul>
                            </div>
							<div className="widget widget_tag_cloud style-1">
                                <h2 className="widget-title">Tags</h2>
                                <div className="tagcloud"> 
									<a href="javascript:void(0);">Business</a>
									<a href="javascript:void(0);">News</a>
									<a href="javascript:void(0);">Brand</a>
									<a href="javascript:void(0);">Website</a>
									<a href="javascript:void(0);">Internal</a>
									<a href="javascript:void(0);">Strategy</a>
									<a href="javascript:void(0);">Brand</a>
									<a href="javascript:void(0);">Mission</a>
								</div>
                            </div>
                        </aside>
                    </div>
					<div className="col-xl-8 col-lg-8 m-b50">
						{/* <!-- blog start --> */}
                        <div className="dlab-blog blog-single style-3">
                            <div className="dlab-media rounded-md shadow">
								<img src="images/blog/default/thum1.png" alt=""/>
							</div>
                            <div className="dlab-meta m-t30">
								<ul>
									<li className="post-date"><i className="flaticon-clock m-r10"></i>19 Sept, 2021</li>
									<li className="post-author"><i className="flaticon-user m-r10"></i>By Nitesh Padghan</li>
								</ul>
							</div>
							<h4 className="dlab-title">How to set up your Bluehost account</h4>
                            <div className="dlab-post-text">
                                <p>Want to start your website but don’t know how to handle all the technical stuff. Well, leave that on Bluehost. Hosting over 2 Million domains worldwide Bluehost is one of the largest web hosting companies out there. From noob to expert everyone can use Bluehost to host their website hassle-free.</p>
                                <p>Bluehost offers services like Hosting, WordPress Hosting, Domains, Professional Services, and Email Services. With features like Free Domain Name for 1st year, 30 Day money-back guarantee and 24/7 support Bluehost stands to be one of the most relying web hosting platforms.

</p>
                                <blockquote className="blockquote style-3">
									<h4 className="blockquote-content">The preferred domain and hosting choice for over 2 million websites worldwide.

.</h4>
								</blockquote>
                                <p>Plans starting as low as $3.95 per month for shared hosting where you will host a website on a server with others to ultimate VPS hosting plan where you get your server for your business or website.</p>
								<p>For a new website, you should go for WordPress which hosts 39% of the web. WordPress makes handling complex tasks easy for you and lets you focus on the content and growth of your business.</p>
                                
                                <p>So let’s get to know how to get started with Bluehost and Launch your dream project with just a few clicks and settings using WordPress. 
</p>
								<p>Differ on which country you are based on plans may change.</p>
								<p> Steps to host your first website. </p>
								
								<h5>1. Visit Bluehost’s website (https://www.bluehost.in/)</h5>
								<p>  <iframe id="$iradid" src="//a.impactradius-go.com/gen-ad-code/2702000/840627/11352/" width="800" height="768" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>  </p>
								<p> <h5>2. Choose WordPress Hosting from the navigation panel. Shared hosting also lets you install WordPress but the WordPress plan makes it even easier because it is built for WordPress websites.</h5>
								<img src="images/blog/default/bluehost2.png" alt=""/> </p>
								<p> <h5>3.For a beginner who has no experience with web hosting and WordPress, you should go for the Basic plan because you will get enough resources to work with and you have an option to upgrade your plan once you get enough traffic or run out of space.</h5>
								<img src="images/blog/default/bluehost6.png" alt=""/> 
								<p>If you are still skeptical about choosing a plan and want to go for choice plus go for it. It won’t crumble your budget down.</p>
								</p>
								<p>
									<h5>4. After choosing your plan you will be redirected to a new window. If you have already decided on your domain name you can type it in here otherwise don’t worry you can add your domain name afterward too. You will get a few free domains from Bluehost to test how your website will look on the internet once published.</h5>
									<img src="images/blog/default/bluehost3.png" alt=""/> 
								</p>
								<p>
									<h5>
									5. Next, you will again be redirected to a page to fill in your account details. Sign in using google it will make your login in Bluehost easier and you won’t have to remember your password every time.
									</h5>
									<img src="images/blog/default/bluehost7.png" alt=""/> 

								</p>
								<p>
									<h5>
									6. After filling in all your details, scroll down where you will find the most confusing part of choosing the plan. Based on the plan you selected free services will change. If you have selected a basic plan before you will have to pay for code guard basic which Bluehost says will help you for your daily backup. In the Choice plus plan, you will get code guard basic free.									</h5>
									<img src="images/blog/default/bluehost4.png" alt=""/> 

								</p>
								<p>
								If you ask someone who has already used Bluehost they’ll advise you not to buy these extras because you don’t need them. You can get other alternatives for these extras.

If you don’t want to do extra research you can buy this but we recommend you not. 

								</p>
								<p>
								After payment is done sign in using the details you provided or using your google account. After which Bluehost will ask you to choose from some random domains Bluehost provides you if you haven’t bought a domain otherwise choose a domain you had bought. Just click on any one of the domains and it will take you to the Bluehost admin page.

<p> From the right panel choose WordPress and follow the instruction for installing WordPress on your account. It will just take few clicks and now you can start working on your dream project.
</p>
<p>Hooray!!! You took the first step in developing your first website.
</p>
								</p>

                            </div>
							<div className="dlab-meta meta-bottom border-top">
								<div className="post-tags">
									Tags:
									<a href="javascript:void(0);">#Child </a> ,
									<a href="javascript:void(0);">#Eduction </a> ,
									<a href="javascript:void(0);">#Money </a> ,
									<a href="javascript:void(0);">#Resturent </a>
								</div>
								<div className="dlab-social-icon primary-light">
									<ul>
										<li><a className="fa fa-facebook" href="javascript:void(0);"></a></li>
										<li><a className="fa fa-instagram" href="javascript:void(0);"></a></li>
										<li><a className="fa fa-twitter" href="javascript:void(0);"></a></li>
									</ul>
								</div>
							</div>
                        </div>
						<div className="row extra-blog style-2">
							<div className="col-lg-12 m-b30">
								<h2 className="blog-title">Related Blogs</h2>
								<div className="dlab-separator style-1"></div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="dlab-blog m-b30">
									<div className="dlab-media rounded-md shadow">
										<img src="images/blog/blog-grid/pic1.jpg" alt=""/>
									</div>
									<div className="dlab-info p-t30">
										<h5 className="dlab-title">
											<a href="/blog-details-3">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor.</a>
										</h5>
										<div className="dlab-meta">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
												<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
												<li className="post-share"><i className="flaticon-share"></i>
													<ul>
														<li><a className="fa fa-facebook" href="javascript:void(0);"></a></li>
														<li><a className="fa fa-twitter" href="javascript:void(0);"></a></li>
														<li><a className="fa fa-linkedin" href="javascript:void(0);"></a></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="dlab-blog m-b30">
									<div className="dlab-media rounded-md shadow">
										<Link href="blog-details-3"><a><img src="images/blog/blog-grid/pic2.jpg" alt=""/></a></Link>
									</div>
									<div className="dlab-info p-t30">
										<h5 className="dlab-title">
											<Link href="blog-details-3"><a>Quisque egestas iaculis felis eget placerat ut pulvinar mi elitauctor nec.</a></Link>
										</h5>
										<div className="dlab-meta">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
												<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
												<li className="post-share"><i className="flaticon-share"></i>
													<ul>
														<li><a className="fa fa-facebook" href="javascript:void(0);"></a></li>
														<li><a className="fa fa-twitter" href="javascript:void(0);"></a></li>
														<li><a className="fa fa-linkedin" href="javascript:void(0);"></a></li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
                        <div className="clear" id="comment-list">
                            <div className="comments-area style-3" id="comments">
                                <h2 className="comments-title">8 Comments</h2>
                                <div className="dlab-separator style-2 bg-primary"></div>
								<div className="clearfix m-t30">
                                    {/* <!-- comment list END --> */}
                                    <ol className="comment-list">
										<li className="comment">
											<div className="comment-body">
												<div className="comment-author vcard"> 
													<img  className="avatar photo" src="images/testimonials/pic1.jpg" alt=""/> 
													<cite className="fn">Celesto Anderson</cite>
												</div>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<div className="reply"> 
													<a href="javascript:void(0);" className="comment-reply-link">
													<i className="fa fa-reply"></i>Reply</a> 
												</div>
											</div>
											<ol className="children">
												<li className="comment odd parent">
													<div className="comment-body">
														<div className="comment-author vcard"> 
															<img  className="avatar photo" src="images/testimonials/pic2.jpg" alt=""/> 
															<cite className="fn">Jake Johnson</cite>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
														<div className="reply"> 
															<a href="javascript:void(0);" className="comment-reply-link">
															<i className="fa fa-reply"></i>Reply</a> 
														</div>
													</div>
													{/* <!-- list END --> */}
												</li>
											</ol>
											{/* <!-- list END --> */}
										</li>
										<li className="comment">
											<div className="comment-body">
												<div className="comment-author vcard"> 
													<img  className="avatar photo" src="images/testimonials/pic1.jpg" alt=""/> 
													<cite className="fn">John Doe</cite> 
												</div>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<div className="reply"> 
													<a href="javascript:void(0);" className="comment-reply-link">
													<i className="fa fa-reply"></i>Reply</a> 
												</div>
											</div>
										</li>
									</ol>
                                    {/* <!-- comment list END --> */}
                                    {/* <!-- Form --> */}
                                    <div className="comment-respond style-3" id="respond">
                                        <h2 className="comment-reply-title" id="reply-title">Leave a Reply <small> <a style={{"display":"none"}} href="javascript:void(0);" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h2>
										<div className="dlab-separator style-2 bg-primary"></div>
                                        <form className="comment-form m-t30" id="commentform" method="post">
                                            <p className="comment-form-author">
                                                <label for="author">Name <span className="required">*</span></label>
                                                <input type="text" name="Author"  placeholder="Author" id="author"/>
                                            </p>
                                            <p className="comment-form-email">
                                                <label for="email">Email <span className="required">*</span></label>
                                                <input type="text" placeholder="Email" name="email" id="email"/>
                                            </p>
                                            <p className="comment-form-url">
                                                <label for="url">Website</label>
                                                <input type="text" placeholder="Website"  name="url" id="url"/>
                                            </p>
                                            <p className="comment-form-comment">
                                                <label for="comment">Comment</label>
                                                <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                            </p>
                                            <p className="form-submit">
												<input type="submit" value="Submit Now" className="submit btn btn-corner gradient btn-primary" id="submit" name="submit"/>
                                            </p>
                                        </form>
                                    </div>
                                    {/* <!-- Form --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- blog END --> */}
					</div>
				</div>
			</div>
		</section>
				
	</div>
	<Footer3/>
    </>
  )
}

export default BlogDetails3;