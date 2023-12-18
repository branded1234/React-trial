import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+91 9876 543 210</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>
              <div className="flexCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">munnabhaiya@gmail</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
                <div className="flexCenter mode">
                    <div className="flexStart">
                    <div className="flexCenter icon">
                        <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                        <span className="primaryText">VideoCall</span>
                        <span className="secondaryText">+91 9876 543 210</span>
                    </div>
                    </div>
                    <div className="flexCenter button">Video Call now</div>
                </div>
                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Message</span>
                            <span className="secondaryText">Munnabhaiya@gmail</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Message now</div>
                </div>
            </div>
            
            </div>
        </div>
        {/* Right Side */}
        <div className="flexCenter c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
