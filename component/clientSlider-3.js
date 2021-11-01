import Slider from "react-slick";

function ClientSlider3() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				
			  }
			},	
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				
			  }
			},
		]
		
    };
    return (
        <>
            {/* <!-- Clients Logo --> */}


			<Slider {...settings}>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/wordpress.png" alt="" />
						<img className="logo-hover" src="images/logo/wordpress-white.png" alt="" />
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/webflow.png" alt="" />
						<img className="logo-hover" src="images/logo/webflow-white.png" alt="" />
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/react.png" alt="" />
						<img className="logo-hover" src="images/logo/react-white.png" alt="" />
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/wix.png" alt="" />
						<img className="logo-hover" src="images/logo/wix-white.png" alt="" />
					</div>
				</div>
				
				
				
				
			</Slider>
        </>
    );
}

export default ClientSlider3;
