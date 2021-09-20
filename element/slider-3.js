import Link from "next/link";
import Slider from "react-slick";


function Slider3 () {
    return (
      <>
        
		<div className="banner-three bg-primary" style={{"backgroundImage":"url(images/background/bg5.png), url(images/background/bg6.png), var(--gradient-sec)"}}>
			<div className="container">
				<div className="banner-inner">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="banner-content text-white">
								<h6 data-wow-delay="0.5s" data-wow-duration="3s" className="wow fadeInUp sub-title text-yellow">Website Building, Marketing & Branding Services for your business</h6>
								<h1 data-wow-delay="1s" data-wow-duration="3s" className="wow fadeInUp m-b20">We provide tech solutions that help your business grow </h1>
								<p  data-wow-delay="1.5s" data-wow-duration="3s" className="wow fadeInUp m-b30"> We  Promise , We  Deliver </p>
								<Link href="about-us-3"><a  data-wow-delay="2s" data-wow-duration="3s" className="wow fadeInUp  btn btn-corner gradient btn-primary">Learn More</a></Link>
								
							</div>
						</div>
						<div className="col-md-6">
							<div className="dz-media wow fadeIn" data-wow-delay="1s" data-wow-duration="3s">
								<img src="images/main-slider/slider3/pic1.png" className="move-1" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }
  
  export default Slider3;