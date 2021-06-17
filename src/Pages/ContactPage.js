import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858.3142750770454!2d90.4297060360876!3d23.747505207013862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b96d36e92b81%3A0x67064be459d86cd9!2z4Ka44KeB4Kay4Kak4Ka-4KaoIOCmreCnguCmgeCmh-Cnn-CmviDgppzgpr7gpq7gp4cg4Kau4Ka44Kac4Ka_4Kam!5e1!3m2!1sen!2s!4v1623776995065!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+088 01558413914'} text2={'+088 01521566506'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'azurahat129@gmail.com'}  title={'Email'}/>
                    <ContactItem icon={location} text1={'সুলতান ভূঁইয়া জামে মসজিদ, Goran Rd, Dhaka 1219'} text2={'Bangladesh'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
