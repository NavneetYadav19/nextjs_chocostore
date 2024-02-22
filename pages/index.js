import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { FaFacebook } from "react-icons/fa";
import Topnav from '@/components/Topnav';
import Footer from '@/components/Footer';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { gsap, CSSPlugin} from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(CSSPlugin, ScrollTrigger)

import { Swiper, SwiperSlide } from 'swiper/react';

import { FaMapMarked, FaClock, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  const root = useRef();
  const root02 = useRef();
  const root03 = useRef();
  const root04 = useRef();
  const root05 = useRef();
  const root06 = useRef();
  const root07 = useRef();

  const branch = ['Branch Shop 1', 'Branch Shop 2', 'Branch Shop 3'];
  const [tab, setTab] = useState(branch[0]);

  console.log(tab);

  useEffect(() => {
    let ctx = gsap.fromTo(".img-height", { paddingTop: '0' }, { paddingTop: '120%' })
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.fromTo(".img-width", 1,{ width: '0' }, { width: '100%' })
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.timeline({
      scrollTrigger: {
        trigger: root.current,
        start: "top",
        end: "bottom",
        scrub: true
      }
    })
    .to(".fade-down", { y: -100, opacity: 0 })
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.timeline({
      scrollTrigger: {
        trigger: root03.current,
        start: "top",
        end: "bottom",
        scrub: true
      }
    })
    .to(".fade-up", { y: -70, opacity: 1 })
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.timeline({
      scrollTrigger: {
        trigger: root04.current,
        start: "top",
        end: "bottom",
        scrub: true
      }
    })
    .to(".card-down-02", { y: 50 })
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.timeline({
      scrollTrigger: {
        trigger: root05.current,
        start: "top",
        end: "bottom",
        scrub: true
      }
    })
    .to(".card-down-03", { y: 50 })

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.timeline({
      scrollTrigger: {
        trigger: root02.current,
        start: "top",
        end: "bottom",
        scrub: true
      }
    })
    .to(".card-down", { y: 50 })
    .to(".fade-up", { y: -70, opacity: 1 })
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.timeline({
      scrollTrigger: {
        trigger: root06.current,
        start: "top",
        end: "top",
        scrub: true
      }
    })
    .to(".card-down-04", { y: 50 })
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.timeline({
      scrollTrigger: {
        trigger: root07.current,
        start: "top",
        end: "bottom",
        scrub: true
      }
    })
    .to(".text-intro", { translateX: -250 })
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Website Coffee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Topnav />

        <section className="section-padding section-01 bg-black" ref={root}>
          <div className="container max-w-full">
            <div className="grid grid-cols-12 flex-row-reverse">
              <div className="md:col-span-5 sm:col-span-8 col-span-12">
                <div className="relative">
                  <div className="ss-card ss-card-01">
                    <div className="ss-img no-hover vertical img-height">
                      <div className="img-bg" style={{backgroundImage:`url('https://w0.peakpx.com/wallpaper/844/514/HD-wallpaper-chocolate-candy-love.jpg')`}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 sm:col-span-12 col-span-12 z-10 flex flex-col h-full">
                <div className="flex ml-40">
                  <div>
                    <h1 className="fade-down text-[45px] uppercase color-white font-semibold whitespace-nowrap">
                    Chocolate that makes<br/>     
                    </h1>
                    <p className="fade-down text-3xl text-end text-yellow-700 font-bebas uppercase font-semibold">
                    your taste buds dance
                    </p>
                  </div>
                </div>
                <div className="detail-container">
                  <div className="detail-items">
                    <div className="detail-item">
                      <div className="icon">
                        <FaMapMarked />
                      </div>
                      <div className="text">
                        <p className="uppercase color-white font-light tracking-wider">
                        Castle Street, Ashoknagar,<br/>
                        Bangalore, India.
                        </p>
                      </div>
                    </div>
                    <div className="detail-item mt-9">
                      <div className="icon">
                        <FaClock />
                      </div>
                      <div className="text">
                        <p className="uppercase color-white font-light tracking-wider">
                          Sun-Thu: 12PM - 6PM<br/>
                          Fri-Sat: 12PM - 8PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-black" ref={root05}>
          <div className="container max-w-full">
            <div className="grid grid-cols-12">
              <div className="md:col-span-5 sm:col-span-6 col-span-12">
                <div className="flex justify-center items-center h-full">
                  <div className="ss-text text-center">
                    <p className="h4 font-oswald title">
                    Fantasie Fine Chocolates<br/> SINCE 2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 sm:col-span-6 col-span-12">
                <div className="relative">
                  <div className="ss-card ss-card-02 img-width card-down-03">
                    <div className="ss-img no-hover">
                      <div className="img-bg rounded-lg" style={{backgroundImage:`url('https://images8.alphacoders.com/132/1324684.png')`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-black section-02" ref={root03}>
          <div className="container max-w-full">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-7 md:col-span-12 col-span-12">
                <div className="relative card-down h-full">
                  <div className="ss-card ss-card-03 ">
                    <div className="ss-img no-hover vertical-02">
                      <div className="img-bg" style={{backgroundImage:`url('https://www.mybakingaddiction.com/wp-content/uploads/2011/10/lr-0939.jpg')`}}></div>
                    </div>
                  </div>
                  <div className="ss-card ss-card-04">
                    <div className="ss-img no-hover vertical-02">
                      <div className="img-bg" style={{backgroundImage:`url('https://st2.depositphotos.com/1177973/6087/i/450/depositphotos_60872367-stock-photo-box-filled-with-chocolates.jpg')`}}></div>
                    </div>
                  </div>
                  <div className="title-intro fade-up">
                    <h1 className="color-white whitespace-nowrap uppercase font-bold">Have a <br/>bite</h1>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 md:col-span-12 col-span-12">
                <div className="text-container">
                  <div className="wrapper">
                    <h4 className="font-semibold color-p uppercase text-3xl lg-no-br ss-title-line-left">
                    Unlock the chocolicious magic
                    </h4>
                    <p className="color-01 mt-7 leading-8">
                    <span className='text-yellow-600'>Chocolate</span> or <span className='text-yellow-600'>Cocoa</span> is a food made from roasted and ground cacao seed kernels that is available as a liquid, solid, or paste, either on its own or as a flavoring agent in other foods. Cacao has been consumed in some form for at least 5,300 years starting with the Mayo-Chinchipe culture in what is present-day Ecuador[1] and later Mesoamerican civilizations also consumed chocolate beverages before being introduced to Europe in the 16th century.
                    </p>
                    <p className="color-01 mt-7 leading-8">
                    The Cocoa bean was first domesticated at least 5,300 years ago, in equatorial South America from the Santa Ana-La Florida (SALF) site in what is present-day southeast Ecuador (Zamora-Chinchipe Province) by the Mayo-Chinchipe culture, before being introduced in Mesoamerica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding section-03 bg-black" ref={root04}>
          <div className="container max-w-full">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-6 md:col-span-5 col-span-12">
                <div className="mt-32">
                  <div className="ss-title-line-right">
                    <h4 className="font-semibold color-p uppercase">
                      Menu
                    </h4>  
                    <div className="line"></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="pattern">
                    <div className="wrapper">
                      <img src="assets/img/pattern/01.png" />
                    </div>
                  </div>
                  <div className="ss-card ss-card-05 card-down-02">
                    <div className="ss-img no-hover vertical">
                      <div className="img-bg" style={{backgroundImage:`url('https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/20_422_30W_01exlx.jpg')`}}></div>
                    </div>
                  </div>
                  <div className="ss-card ss-card-06 card-down-02">
                    <div className="ss-img no-hover vertical-02">
                      <div className="img-bg" style={{backgroundImage:`url('https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/4/3/1/-original-imagwdhg2swtetba.jpeg?q=90&crop=false')`}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 md:col-span-7 col-span-12">
                <div className="food-menu-container mt-32">
                  <div className="wrapper">
                    <div className="food-menu-img">
                      <img src="https://cdnb.artstation.com/p/assets/images/images/054/248/291/large/aswin-dairymilk-poster.jpg?1664114626" alt="Dairy Milk" />
                    </div>
                    <div className="food-menu-content">
                      <div className="wrapper">
                        <div className="title">
                          <h5 className="uppercase color-white font-medium">
                          Cadbury Dairy Milk Silk
                          </h5>
                        </div>
                        <div className="line"></div>
                        <div className="price">
                          <h6 className="color-p font-semibold">185</h6>
                        </div>
                      </div>
                      <p className="color-white">Enjoy the taste....</p>
                    </div>
                  </div>
                </div>
                <div className="food-menu-container mt-8">
                  <div className="wrapper">
                    <div className="food-menu-img">
                      <img src="https://digitalcontent.api.tesco.com/v2/media/ghs/d89e03e7-10c5-4e14-8479-6a15c8ff0f4c/82658bd6-806e-4eb0-b08f-cab985eaa802_339198976.jpeg?h=225&w=225" alt="Ferrero Rocher" />
                    </div>
                    <div className="food-menu-content">
                      <div className="wrapper">
                        <div className="title">
                          <h5 className="uppercase color-white font-medium">
                          Ferrero Rocher Hazelnut Dark
                          </h5>
                        </div>
                        <div className="line"></div>
                        <div className="price">
                          <h6 className="color-p font-semibold">389</h6>
                        </div>
                      </div>
                      <p className="color-white">Enjoy the taste....</p>
                    </div>
                  </div>
                </div>
                <div className="food-menu-titile mt-8">
                  <p className="color-white uppercase font-semibold">Classic</p>
                </div>
                <div className="food-menu-container active">
                  <div className="wrapper">
                    <div className="food-menu-img">
                      <img src="https://e0.pxfuel.com/wallpapers/267/766/desktop-wallpaper-nestle-kitkat-chocolate-bars-chocolate.jpg" alt="KitKat" />
                    </div>
                    <div className="food-menu-content">
                      <div className="wrapper">
                        <div className="title">
                          <h5 className="uppercase color-white font-medium">
                          Nestle KitKat chocolate bars 
                          </h5>
                        </div>
                        <div className="line"></div>
                        <div className="price">
                          <h6 className="color-p font-semibold">129</h6>
                        </div>
                      </div>
                      <p className="color-white">Enjoy the taste....</p>
                    </div>
                  </div>
                </div>
                <div className="food-menu-container mt-8">
                  <div className="wrapper">
                    <div className="food-menu-img">
                      <img src="https://i.fakespot.io/nmdurhi2rjnk6fr6fnb3v1ieccpx" alt="GODIVA" />
                    </div>
                    <div className="food-menu-content">
                      <div className="wrapper">
                        <div className="title">
                          <h5 className="uppercase color-white font-medium">
                          GODIVA Chocolatier Dark Chocolate
                          </h5>
                        </div>
                        <div className="line"></div>
                        <div className="price">
                          <h6 className="color-p font-semibold">675</h6>
                        </div>
                      </div>
                      <p className="color-white">Enjoy the taste....</p>
                    </div>
                  </div>
                </div>
                <div className="food-menu-container mt-8">
                  <div className="wrapper">
                    <div className="food-menu-img">
                      <img src="https://www.ghirardelli.com/media/wysiwyg/GCC_Intense_Dark_Chocolate_flavors_72.jpg" alt="Ghirardelli" />
                    </div>
                    <div className="food-menu-content">
                      <div className="wrapper">
                        <div className="title">
                          <h5 className="uppercase color-white font-medium">
                          Ghirardelli Intense Dark Bars
                          </h5>
                        </div>
                        <div className="line"></div>
                        <div className="price">
                          <h6 className="color-p font-semibold">฿99</h6>
                        </div>
                      </div>
                      <p className="color-white">Enjoy the taste....</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding section-04">
          <div className="container max-w-full">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-7 md:col-span-12 col-span-12">
                <div className="relative">
                  <div className="ss-card ss-card-07 ">
                    <div className="ss-img no-hover card-down-04">
                      <div className="img-bg" style={{backgroundImage:`url('https://medinabaking.com/wp-content/uploads/2019/02/Baking-with-Chocolate-Everything-You-Wanted-to-Know.jpg')`}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 md:col-span-12 col-span-12">
                <div className="logo">
                <img src="/assets/img/logo/chocologo2.png" className=" text-white" alt="Logo" />
                </div>
                <style jsx>{`
                  .logo img {
                    display: block; 
                    visibility: visible; 
                  }
                `}</style>
                <h4 className="font-semibold color-p uppercase lg-no-br ss-title-line-left mt-6">
                  Intro
                </h4>
                <p className=" mt-5 leading-8 text-slate-300">
                Choco Store, founded in 2023 in the vibrant city of Bangalore, India, stands as a delectable testament to the artistry of chocolate. With a passion for crafting exquisite cocoa creations, this chocolate company has quickly become a sweet haven for enthusiasts seeking unparalleled indulgence. From velvety truffles to rich bars, Choco Store blends innovation and tradition, creating a symphony of flavors that captivates taste buds. Embracing the cultural diversity of Bangalore, the company's creations reflect a fusion of global influences, resulting in a unique and irresistible chocolate experience. Committed to quality and excellence, Choco Store remains dedicated to transforming every cocoa bean into a moment of pure bliss for chocolate connoisseurs in India and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="jc-start ss-title-line-right mt-5">
              <h4 className="font-semibold color-p uppercase">
                Gallery
              </h4>  
              <div className="line"></div>
            </div>
          </div>
         
          <Swiper className="swiper-01"
             slidesPerView={3}
             breakpoints={{ 
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3, spaceBetween:40},
            }} 
            >
            <SwiperSlide>
              <div className="ss-card">
                <div className="ss-img">
                  <div className="img-bg" style={{backgroundImage:`url('https://i.pinimg.com/originals/f6/27/97/f62797f7c990d06cc2a3dfa8c98f1a76.jpg')`}}></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ss-card">
                <div className="ss-img">
                  <div className="img-bg" style={{backgroundImage:`url('https://images.alphacoders.com/133/1330495.png')`}}></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ss-card">
                <div className="ss-img">
                  <div className="img-bg" style={{backgroundImage:`url('https://w.forfun.com/fetch/7c/7c62f0071a2100ca8cca86c36ebaa598.jpeg')`}}></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ss-card">
                <div className="ss-img">
                  <div className="img-bg" style={{backgroundImage:`url('assets/img/content/img-11.jpg')`}}></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ss-card">
                <div className="ss-img">
                  <div className="img-bg" style={{backgroundImage:`url('assets/img/content/img-12.jpg')`}}></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="bg-brown-700 py-16" style={{backgroundImage:`url('https://png.pngtree.com/background/20230401/original/pngtree-dark-chocolate-sweets-background-picture-image_2252577.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-yellow-200">Contact Us</h2>
              <p className="text-slate-400">Have questions or feedback? Reach out to us!</p>
            </div>

        <div className=" bg-brown-800 flex items-center justify-center p-8 rounded-md shadow-md">
          <form className='w-[900px]'>
            <div className="mb-4">
              <label htmlFor="name" className="block text-yellow-300 border-b  font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-yellow-300 border-b  font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-yellow-300 border-b  font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-800 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

        <section className="section-05" ref={root06}>
          <div className="since card-down-04" >
            <div className="wrapper">
              <p className="h5 color-white fw-200">Since</p>
              <h4 className="color-white fw-600">2023</h4>
              <div className="cup-container">
              <img src="/assets/img/logo/chocologo2.png" className="" alt="Logo" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12">
          <div className="md:col-span-6 h-full col-span-12">
              <div className="content-left h-[420px] white-background">
                <h4 className="font-semibold text-[#76453B] px-10 mt-6 uppercase">History</h4>
                <p className="mt-12 px-10 text-black">
                Choco Store unfolded its delectable narrative in Bangalore, India. From its humble beginnings, the chocolate haven has evolved into a cherished destination, harmonizing tradition with innovation. Rooted in a commitment to quality, Choco Store's history is a delightful tale of crafting cocoa masterpieces that transcend borders, inviting enthusiasts on a flavorful exploration. This chocolate haven continues to shape its legacy, enchanting taste buds with each carefully curated creation.
                </p>
                <div className="signature px-4">
                  <img className=' w-[300px] text-white' src="assets/img/content/signature.png" alt="CUP IMAGE" />
                </div>
              </div>
              <style jsx>{`
                .signature img {
                  display: block;
                  visibility: visible; 
                }
              `}</style>
              <style jsx>{`
                .white-background {
                  background-color: white;
                  padding: 20px; /* Adjust the padding as needed */
                }
              `}</style>
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="content-right">
                <div className="img-bg" style={{backgroundImage:`url('https://w0.peakpx.com/wallpaper/398/759/HD-wallpaper-chocolate-covered-strawberries-fruit-food-good-chocolate-strawberries-covered-dessert-sweet.jpg')`}}></div> 
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding section-06">
          <div className="container max-w-full">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="content">
                  <div className="wrapper">
                    <div className="icon">
                      <img src="assets/img/icon/vintage_phone.png" alt="VINTAGE PHONE"/>
                    </div>
                    <div className="text">
                      <p className='text-yellow-700'>Opening Hours</p>
                      <p>11.30AM - 2.30PM</p>
                      <span className='text-xs font-light'>91+ 123456789</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="content">
                  <div className="wrapper">
                    <div className="icon">
                      <img src="assets/img/icon/vintage_compass.png" alt="VINTAGE COMPASS"/>
                    </div>
                    <div className="text">
                    Castle Street, Ashoknagar,<br/>
                        Bangalore, India.
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-12 col-span-12">
                <div className="content">
                  <div className="wrapper">
                    <div className="social-list text-2xl">
                      <div className="social-item hover:text-blue-800 cursor-pointer mx-2">
                      <FaFacebook />
                      </div>
                      <div className="social-item hover:text-pink-600 cursor-pointer mx-2">
                      <FaInstagram />
                      </div>
                      <div className="social-item hover:text-blue-400 cursor-pointer mx-2">
                      <FaTwitter />
                      </div>
                      <div className="social-item hover:text-green-400 cursor-pointer mx-2">
                      <FaWhatsapp />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}