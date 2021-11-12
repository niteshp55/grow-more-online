import { useState } from "react";


function Accordion_sm() {
    const [activeDefault, setActiveDefault] = useState(0);
    const defaultAccordion = [
        {
            title: "How much does it cost to create a website?",
            text:
                "Well, our prices depends on so many factors. It would be impossible to say it in one sentence.Avoid any web developer who can answer this question without a long discussion. To get a better idea on the cost of the website you need to build- a)Send us your message through our contact form or give us a call.  b)Answer few questions regarding nature of your website, features, design etc. c) We’ll provide you a ballpark figure based on our initial discussions. d) If you are happy, we’ll proceed and come up with the final quote.Free advice! Avoid any developer who gives you a quote instantly. Giving a quote instantly without proper discussions is Impossible.",
            bg: "primary",
        },
        {
            title: "What If I am not satisfied by your service?",
            text:
                "Oh No! We really don’t hope for that. But as per our business agreement and policy, the unsatisfied customer will be paid off within 90 days(It normally takes that time to get our accounts set right and return the funds to you).",

            bg: "info",
        },
        {
            title: "What are your payment steps?",
            text:
                "We require 50% of the project value at the time of starting the project. After the design is approved and the coding is complete, we’ll show the website from our server. Once the website is approved, you need to pay the balance 50% to enable us to transfer the website to your server. For projects with high value, we are happy to discuss and receive payments in 2 or more installments. Yes, we are here to sort it out. Let’s talk!",

            bg: "success",
            
        },
        {
            title: "What is a responsive website development?",
            text:
                "Responsive web design or responsive web development is an approach to improve the readability of the website pages across various devices, which includes PC desktops, retina displays, tablet screens and mobile phone screens.",

            bg: "success",
        },
        {
            title: "What is your response turnaround time?",
            text:
                "We will respond to all the emails quickly. Approximately the first response can be expected within 90 minutes in our working hours. Within 24 hours all the first responses will be executed. ",

            bg: "success",
        },
                {
            title: "Will I have a say in the graphic design process?",
            text:
                "Definitely, Our goal is to satisfy you and your input is very important to us. You can give us any site that you like and we will be happy to emulate and still come up with a site that will be consistent and will represent your whole brand.",

            bg: "success",
        },
                        {
            title: "What if I need help on my site down the road?",
            text:
                "We are only an email away! We’re here to help you as much or as little as you need, and we won’t disappear once the site is launched. We’ve been doing this for many years, so we aren’t going anywhere anytime soon.",

            bg: "success",
        },
        
        
    ];
  return (
    <>
      <div
                className="dlab-accordion accordion-sm"
                id="accordionFaq"
                defaultActiveKey="0"
            >
                {defaultAccordion.map((d, i) => (
                    <div className="card" key={i}>
                        <div
                            eventKey={`${i}`}
                            className="card-header"
                            onClick={() =>
                                setActiveDefault(activeDefault === i ? -1 : i)
                            }
                        >
                            <h5 className="dlab-title">
                                <a href="javascript:void(0);"
                                    className={`${
                                        activeDefault === i ? "" : "collapsed"
                                    }`}
                                    onClick={() =>
                                        setActiveDefault(
                                            activeDefault === i ? -1 : i
                                        )
                                    }
                                >
                                    {" "}
                                    {d.title}
                                </a>
                            </h5>
                        </div>
                        {/* <div className="collapse show" eventKey={`${i}`}>
                            <div className="card-body">
                                <p className="m-b0">{d.text}</p>
                            </div>
                        </div> */}
                        <div className={`${
                                        activeDefault === i ? "collapsed show" : "collapsed"
                                    }`} eventKey={`${i}`} onClick={() =>
                                        setActiveDefault(
                                            activeDefault === i ? -1 : i
                                        )
                                    }>
                            <div className="card-body">
                                <p className="m-b0">{d.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </>
  )
}

export default Accordion_sm;
