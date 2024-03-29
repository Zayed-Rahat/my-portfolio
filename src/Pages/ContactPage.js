import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          {/*  eslint-disable-next-line */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7374.164215681028!2d91.96961469999995!3d22.4635486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fcabeece6c9%3A0xd6662ebaf1d07ff4!2sSheikh%20Russel%20Hall!5e0!3m2!1sen!2sbd!4v1694956920947!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+088 01558413914"}
            text2={"+088 01521566506"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"zayedrahat088@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Sheikh Russel Hall,CUET,Pahartali, Chittagong, Bangladesh"}
            text2={"Bangladesh"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
