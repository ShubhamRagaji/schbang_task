import Head from "next/head";
import SideHeader from "../components/SideHeader";
import {
  AppleBadge,
  Booking,
  Delivery,
  DeliveryHr,
  FreeFood,
  FreeFoodHr,
  Hr,
  Location,
  ServiceArrow,
} from "../images/Images";
import styles from "../styles/Home.module.scss";
import mobile from "../assets/mobile.png";
import Image from "next/image";
import SliderDots from "../assets/sliderDots.png";
import foodPlate from "../assets/foodplate.png";
import foodPlate2 from "../assets/foodplate2.png";
import foodPlate3 from "../assets/foodplate3.png";
import googlePlayBadge from "../assets/googlePlayBadge.png";
import sliderArrow from "../assets/sliderArrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const sliderRef = useRef();
  const sloganRef = useRef();
  
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [ref, inView] = useInView({
    threshold: 0.6,
  });

  const [ref1, inView1] = useInView({
    threshold: 0.4,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.6,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.2,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.8,
  });

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      sliderRef.current.slickGoTo(next);
    },
  };

  var sloganSettings = {
    dots: false,
    arrows: false,
    speed: 1200,
    fade: true,
    beforeChange: (current, next) => {
      sloganRef.current.slickGoTo(next);
    },
  };

  const ids = (id) => document.getElementById(id);

  useEffect(() => {
    // Animations //
    ids("sideHeader").style.opacity = "0";
    ids("serviceInfo").style.opacity = "0";

    if (inView) {
      ids("sideHeader").classList.add("fadeInLeft");
      ids("serviceInfo").classList.add("fadeInRight");
    }

    ids("bookingInfo").style.opacity = "0";
    ids("bookingSubInfo").style.opacity = "0";
    ids("deliveryCard").style.opacity = "0";
    ids("bookingCard").style.opacity = "0";

    if (inView1) {
      ids("bookingCard").classList.add("fadeInLeft");
      ids("deliveryCard").classList.add("fadeInRight");
      ids("bookingInfo").classList.add("fadeInDown");

      setTimeout(() => {
        ids("bookingSubInfo").classList.add("fadeInDown");
      }, 200);
    }

    ids("freeFoodCard").style.opacity = "0";
    ids("freeFoodInfo").style.opacity = "0";
    ids("deliveryInfo").style.opacity = "0";
    ids("deliverySubInfo").style.opacity = "0";

    if (inView2) {
      ids("freeFoodInfo").classList.add("fadeInLeft");
      ids("freeFoodSubInfo").classList.add("fadeInDown");

      setTimeout(() => {
        ids("freeFoodCard").classList.add("fadeInUp");
        ids("deliveryInfo").classList.add("fadeInDown");
      }, 200);

      setTimeout(() => {
        ids("deliverySubInfo").classList.add("fadeInDown");
      }, 500);
    }

    if (windowSize.width > 600) {
      ids("appSection").style.opacity = "0";
      ids("appInfo").style.opacity = "0";
      ids("mobile").style.opacity = "0";

      if (inView3) {
        ids("appSection").classList.add("fadeInLeft");

        setTimeout(() => {
          ids("appInfo").classList.add("fadeInDown");
          ids("mobile").style.opacity = "1";
          ids("mobile").classList.add("fadeInRight");
        }, 500);
      }
    }

    if (inView4) {
      ids("playStoreBtn").style.opacity = "1";
      ids("appStoreBtn").style.opacity = "1";

      setTimeout(() => {
        ids("playStoreBtn").classList.add("tada");
        ids("appStoreBtn").classList.add("tada");
      }, 500);
    }
  }, [inView, inView1, inView2, inView3, inView4]);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const onScroll = (e) => {
      let scrollValue = e.target.documentElement.scrollTop;
      if (scrollValue > 0) {
        ids("navbarWrapper").style.background = "#fff5ec";
        ids("dropdownArrow").style.filter = "brightness(0.5)";
        ids("user").style.color = "#2e266f";
      } else {
        ids("navbarWrapper").style.background = "transparent";
        ids("dropdownArrow").style.filter = "none";
        ids("user").style.color = "#ffffff";
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.home_wrapper}>
      {windowSize.width > 600 ? (
        <div className={styles.slider}>
          <div className={styles.slider_leftwrapper}>
            <div className={styles.sublabel_search}>
              <h4 className={styles.slider_mainlabel}>Food</h4>
              <Slider {...sloganSettings} ref={sliderRef}>
                <p className={styles.sublabel}>
                  Discover Restaurant &#38; Delicious Food
                </p>
                <p className={styles.sublabel}>
                  We Are Always Here To Serve You.
                </p>
                <p className={styles.sublabel}>
                  Hundreds Of Flavors Under One Roof.
                </p>
              </Slider>
              <div className={`${styles.search_wrapper} fadeInDown`}>
                <input
                  type="text"
                  className={styles.search_input}
                  placeholder="Search restaurant / food"
                />
                <button className={styles.go_btn}>GO</button>
              </div>

              <div className={styles.location_wrapper}>
                <p className={styles.loc_icon}>{Location()}</p>
                <p className={styles.loc_name}>Hyderabad</p>
              </div>
            </div>
            <div className={styles.slider_dots}>
              {typeof window !== "undefined" && window.innerWidth >= 600 && (
                <Image src={SliderDots} width={380} height={822} alt="dots" />
              )}
            </div>
          </div>

          <div className={styles.slider_rightwrapper}>
            <div className={`${styles.main_slider} fadeIn`}>
              <Slider {...settings} ref={sloganRef}>
                <Image
                  src={foodPlate}
                  width={922}
                  height={1145}
                  alt="foodPlate"
                />
                <div className={styles.food_plate2}>
                  <Image
                    src={foodPlate2}
                    width={650}
                    height={850}
                    alt="foodPlate"
                  />
                </div>
                <div className={styles.food_plate3}>
                  <Image
                    src={foodPlate3}
                    width={660}
                    height={660}
                    alt="foodPlate"
                  />
                </div>
              </Slider>
            </div>

            <div className={styles.prev_next_arrow}>
              <div
                className={styles.prev_arrow}
                onClick={() => sliderRef.current.slickPrev()}
              >
                <Image src={sliderArrow} width={75} height={46} alt="arrow" />
              </div>

              <div
                className={styles.next_arrow}
                onClick={() => sliderRef.current.slickNext()}
              >
                <Image src={sliderArrow} width={75} height={46} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.mob_slider_wrapper}>
          <div className={styles.mob_search} id="mobSearch">
            <div className={`${styles.search_wrapper} fadeInDown`}>
              <input
                type="text"
                className={styles.search_input}
                placeholder="Search restaurant / food"
              />
              <button className={styles.go_btn}>GO</button>
            </div>
          </div>
          <div className={styles.location_wrapper}>
            <p className={styles.loc_icon}>{Location()}</p>
            <p className={styles.loc_name}>Hyderabad</p>
          </div>
          <div className={styles.mob_slider}>
            <Slider {...settings} ref={sliderRef}>
              <div className={styles.slide1}>
                <div className={styles.plate1}>
                  <Image
                    src={foodPlate}
                    width={922}
                    height={1145}
                    alt="foodPlate"
                  />
                </div>
                <p className={styles.slider_sublabel}>
                  Discover Restaurant &#38; Delicious Food
                </p>
              </div>
              <div className={styles.slide2}>
                <Image
                  src={foodPlate2}
                  width={500}
                  height={650}
                  alt="foodPlate"
                />
                <p className={styles.slider_sublabel}>
                  We Are Always Here To Serve You.
                </p>
              </div>
              <div className={styles.slide3}>
                <div className={styles.plate3}>
                  <Image
                    src={foodPlate3}
                    width={600}
                    height={600}
                    alt="foodPlate"
                  />
                </div>
                <p className={styles.slider_sublabel3}>
                  Hundreds Of Flavors Under One Roof.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      )}
      <div className={styles.middle_wrapper} id="middleWrapper">
        <div className={styles.left_header}>
          <div ref={ref} id="sideHeader">
            <SideHeader label="Our" next_label="Services" />
          </div>

          <p className={styles.intro} id="serviceInfo" ref={ref}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className={styles.services}>
          <div className={styles.services_leftwrapper}>
            <div className={styles.image_info_wrapper}>
              <div className={styles.wrappers}>
                <div className={styles.card_image} id="bookingCard" ref={ref1}>
                  <p className={styles.booking_image} id="bookingImage">
                    {Booking()}{" "}
                  </p>
                  <p className={styles.card_arrow}>{ServiceArrow()} </p>
                </div>

                <div className={styles._info} id="bookingInfo" ref={ref1}>
                  <p className={styles._header}>Advanced table booking</p>
                  <p className={styles.serv_hr}>{Hr()} </p>
                  <p className={styles._subinfo} id="bookingSubInfo" ref={ref1}>
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
              </div>
              <div className={`${styles.wrappers} ${styles.food_free_wrapper}`}>
                <div className={styles._info} id="freeFoodInfo" ref={ref2}>
                  <p className={styles._header}>Food for free</p>
                  <div className={styles.hr_time}>
                    <p className={styles.hr}>{FreeFoodHr()} </p>
                    <p className={styles.time}>24/7</p>
                  </div>
                  <p
                    className={styles._subinfo}
                    id="freeFoodSubInfo"
                    ref={ref2}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>

                <div className={styles.card_image} id="freeFoodCard" ref={ref2}>
                  <p className={`${styles.booking_image} ${styles.free_food}`}>
                    {FreeFood()}{" "}
                  </p>
                  <p className={styles.card_arrow}>{ServiceArrow()} </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.services_rightwrapper}
            id="deliveryCard"
            ref={ref1}
          >
            <div className={styles.delivery_wrapper}>
              <div className={styles.delivery_icon}>{Delivery()} </div>
              <p
                className={`${styles._header} ${styles.rightcard_header}`}
                id="deliveryInfo"
                ref={ref1}
              >
                Free home delivery at your door steps
              </p>
              <p className={styles._subinfo} id="deliverySubInfo" ref={ref1}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <div className={styles.delivery_hr}>{DeliveryHr()}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_wrapper}>
        <div className={styles.bottom_left_wrapper}>
          <div ref={ref3} id="appSection" className={styles.side_header}>
            {typeof window !== "undefined" && windowSize.width > 600 ? (
              <SideHeader
                label="Download app for"
                next_label="Exciting Deals"
              />
            ) : (
              <SideHeader label="Download app for exciting deals" />
            )}
          </div>
          <p className={styles.app_intro} ref={ref3} id="appInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className={styles.store_btns}>
            <a
              target="_blank"
              className={styles.play_badge}
              ref={ref4}
              id="playStoreBtn"
            >
              <div className={styles.pl_badge}>
                <Image
                  src={googlePlayBadge}
                  width={240}
                  height={112}
                  alt="badge"
                />
              </div>
            </a>
            <a
              target="_blank"
              className={styles.apple_badge}
              ref={ref4}
              id="appStoreBtn"
            >
              <div className={styles.app_badge}>{AppleBadge()}</div>
            </a>
          </div>
        </div>
        <div className={styles.bottom_right_wrapper} ref={ref3} id="mobile">
          <Image src={mobile} width={652} height={900} alt="mobile" />
        </div>
      </div>
    </div>
  );
}
