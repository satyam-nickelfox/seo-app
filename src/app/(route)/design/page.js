import React from "react";
import Image from "next/image";
import DesignHeader from "public/images/design_header.jpg";
import Head from "next/head";

function Design() {
  return (
    <div>
      <Head>
        <title>Transforming Ideas into Reality - My Page | Design</title>
        <meta
          name="description"
          content="Welcome to my studio, where creativity meets functionality! We are passionate about designing innovative and visually stunning solutions tailored to meet your unique needs. With our expert team of designers, we specialize in bringing ideas to life, ensuring every project is a masterpiece."
          key="desc"
        />
         <meta property="og:title" content="Transforming Ideas into Reality - My Page | Design" />
        <meta
          property="og:description"
          content="Welcome to my studio, where creativity meets functionality!"
        />
        <meta
          property="og:image"
          content="images/design_header.jpg"
        />
      </Head>
      <div className="bg-Solitude flex min-h-screen flex-col p-24 gap-2">
        <h1 className="text-3xl font-bold">Transforming Ideas into Reality</h1>
        <p className="mt-10">
          Welcome to my studio, where creativity meets functionality! We are
          passionate about designing innovative and visually stunning solutions
          tailored to meet your unique needs. With our expert team of designers,
          we specialize in bringing ideas to life, ensuring every project is a
          masterpiece.
        </p>
        <div className="mt-12">
          <Image
            alt="machines"
            width={613}
            height={539}
            className="max-md:h-[400px] max-md:w-[413px]"
            src={DesignHeader}
          />
        </div>
        <h3 className="text-xl font-semibold mt-12">Our Services</h3>
        <div className="mt-6 flex flex-col gap-5">
          <div>
            <h5 className="text-lg font-semibold">Graphic Design</h5>
            <p className="mt-5">
              Our graphic design services encompass a wide array of visual
              communication, from logos and branding materials to marketing
              collateral and social media graphics. We focus on creating designs
              that leave a lasting impression on your audience.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Web Design</h5>
            <p className="mt-5">
              In the digital age, a compelling online presence is essential. Our
              skilled web designers craft responsive and user-friendly websites
              that not only look great but also deliver a seamless browsing
              experience across all devices.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold">UI/UX Design</h5>
            <p className="mt-5">
              User experience is at the core of everything we do. Our UI/UX
              designers are dedicated to creating intuitive interfaces and
              interactive experiences that engage users and enhance usability.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold">Interior Design</h5>
            <p className="mt-5">
              Transform your space into a work of art with our interior design
              expertise. We blend functionality with aesthetics, creating
              interiors that reflect your style and personality while maximizing
              comfort and practicality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
