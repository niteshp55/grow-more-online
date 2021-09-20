import Counter3 from "./counter3";
function AboutUs3() {
  return (
    <>
      {/* <!-- About Us --> */}
      <section className="content-inner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-b30">
              <div className="dz-media">
                <img src="images/about/img6.png" className="move-2" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head style-3 mb-4">
                <h2 className="title">Why Our Agency</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </div>
              <p>
                At the start of the every project, we customise a detailed project plan together with you to set expectations, ensure alignment, and define key milesstones and deliverables.
                Experience tells us thee best solutions are the ones co-ideated with clients. We incorporate your ideas with out broad level of experties to create memorable experience for your company & customers.
              </p>
              
              <Counter3 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs3;
