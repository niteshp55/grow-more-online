import Link from "next/link";
import Quote3 from "../element/quote-3";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";

function ContactUs1() {
  return (
    <>
      <Header3 />
      <div className="page-content bg-white"
       style={{
        backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
        backgroundSize: "cover, 200%",
      }}
      >
        {/* <!-- Banner  --> */}
        <Quote3/>
        
        
      </div>
      <Footer3 />
    </>
  );
}

export default ContactUs1;
