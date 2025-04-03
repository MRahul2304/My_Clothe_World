import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetters from '../components/NewsLetters';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our store! We are passionate about bringing you
            high-quality products that blend style, comfort, and affordability.
            Our mission is to provide a seamless shopping experience with a
            carefully curated selection that meets your needs. Customer
            satisfaction is at the heart of everything we do, and we strive to
            make every purchase a delightful one. Thank you for choosing
            us—we’re excited to be a part of your journey!
          </p>
          <b className="text-gray-80">Our Mission</b>
          <p>
            Welcome to our store! We are passionate about bringing you
            high-quality products that blend style, comfort, and affordability.
            Our mission is to provide a seamless shopping experience with a
            carefully curated selection that meets your needs. Customer
            satisfaction is at the heart of everything we do, and we strive to
            make every purchase a delightful one. Thank you for choosing
            us—we’re excited to be a part of your journey!
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At our core, quality is our top priority. We meticulously source the
            finest materials and uphold strict quality control standards to
            ensure every product meets our high expectations.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience </b>
          <p className="text-gray-600">
            We believe shopping should be effortless and enjoyable. Our
            user-friendly platform is designed to provide a seamless experience,
            from browsing to checkout.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our customers are at the heart of everything we do. We are committed
            to providing prompt, friendly, and reliable support to ensure a
            smooth shopping experience.
          </p>
        </div>
      </div>
      <NewsLetters/>
    </div>
  );
}

export default About