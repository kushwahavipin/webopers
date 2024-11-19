import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";

// image section start

import bannerone from "./image/banner_one.png";
import bannertwo from "./image/banner_two.png";
import bannerthree from "./image/banner_three.jpg";
import bannerfour from "./image/banner_four.png";
import bottomimage from "./image/bottom_image.png";

export default function Home() {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: false,
    dots: true,
  };

  return (
    <>
      {/* <!--------------------- topheader section start -----------------------> */}

      <div className="topheader">
        Get Up to <strong>40% OFF</strong> New-Season Styles <span>Men</span>
        <span>Women</span> <label>* Limited time only.</label>
        <i className="fa-regular fa-circle-xmark"></i>
      </div>

      {/* <!--------------------- topheader section end -------------------------> */}

      {/* <!--------------------- navbar section start --------------------------> */}

      <div className="navbarsection">
        <div className="navbar_logosection">
          <img
            src="https://s3-alpha-sig.figma.com/img/91b6/c22b/cb4cdf460396a7065bb567bd874f7821?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WlwhwJ6E06yJ7buBeqCCCqeVjnF5gveG7FgHwq9tKO1t-E-JUc-DDnLRHbvHlniMb9keuY59NeB8O52qAXgyYGvby87cNsS0OLDZ1XYoHU3DLgcrw5~~Dy1tZslAjkp7ZVuegoghEoJZCDKyRICGBV9H7SE08Y0NFRCCTEg8SpOiKbuUD6dMXvUtcBYCbtYLJRmZVBncYevrU8q0Xw0vWen5a4uN8-qdJUml0AL6w6d4kl6xmW0Vs4VljnY0~e9Cy1vv1yku~MXn7fqJIOBk9aPSlXATMWX2r2N-FD5HF8A-P8-WTPRJLAzzVYO74aWu1o0hNpu~wY7yVk2AOto50Q__"
            alt=""
          />
        </div>
        <div className="navbar_inputsection">
          <div className="navbarcategory_subsection">
          <li>Jewellery & Accessories</li>
          <li>Clothing & Shoes</li>
          <li>Home & Living</li>
          <li>Craft Supplies</li>
          <li>Gifts & Craft</li>
          <li>Handmade Products</li>
          <li>Offer Zone</li>
          </div>
          <div className="navbar_inputfirst">
            <span>
              All Categories<i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
          <div className="navbar_inputsecond">
            <input type="text" placeholder="Search...." />
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <div className="navbar_rightsection">
          <div className="navbar_rightsection_first">
            <i className="fa-regular fa-user"></i> Profile
          </div>
          <div className="navbar_rightsection_second">
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </div>
          <div className="navbar_rightsection_first">
            <i className="fa-solid fa-shop"></i> Become a Supplier
          </div>
        </div>
      </div>

      {/* <!--------------------- navbar section end ----------------------------> */}

      {/* <!--------------------- menu section start ----------------------------> */}

      <div className="menusection">
        <div className="menu_content">
          <li>Jewellery & Accessories</li>
          <li>Clothing & Shoes</li>
          <li>Home & Living</li>
          <li>Craft Supplies</li>
          <li>Gifts & Craft</li>
          <li>Handmade Products</li>
          <li>Offer Zone</li>
        </div>
      </div>

      {/* <!--------------------- menu section end ------------------------------> */}

      {/* <!--------------------- slider section start ------------------------------> */}

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/purchasing-shop-buying-selling-teade_53876-134043.jpg?t=st=1731914492~exp=1731918092~hmac=05854b4b02bd76d42048ef7a0a06ec575c44a132f256aa768098e26514e9d6c2&w=1060"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/women-taking-selfie-shop_23-2147786850.jpg?t=st=1731914538~exp=1731918138~hmac=ca85853bc251f941e574d40cdd9a2eaa83657b4cf44c28317865929e15154646&w=826"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/crop-hand-with-paper-bags-credit-card_23-2147786759.jpg?w=826"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!--------------------- slider section end --------------------------------> */}

      {/* <!--------------------- first section start --------------------------------> */}

      <div className="section_first">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="sectionfirst_left">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sectionfirst_left_one">
                      <div className="sectionfirst_left_one_title">
                        <label>Jewellery & Accessfories</label>
                        <div className="row">
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/ef76/3ffd/620a5f20e2e047151536e4af8a783d15?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZDPb4OJw5ouj6OGD6UNZQ6pe~P~82NU7tMHRuDYpT9UFEkJsABWLxRZ6TkwOx7GydYYDqav4mu8qmHLeUqet7CRLfOEfvt5UFlybss3NTkEfGtBpkScY9yzQ~7dYVTt5R9StvGaqNVQDYGrS8GCdBHUgeQ08wsrbX49NoTqoQORECpDytz19lMLB8zNkSjAGuacY8LZoiupFgXlP89~Hw-klLo8g05Q3Tm2ZD5kIqyHEmCe~sEayLsRA3f4otSqsgUg8Fx3NbNaQW9XnH-T4vM9oA0dd72rYhCg3g8AECdA7vLOO~Q-QQ21PoBegv150LoRPiOf2dQc6dTrnOuKwA__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Belts
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/eb8d/1c35/d8ac0cd72ecef4150125991ff0e8ecec?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XRKtggPeqXNMwZFfdCapcd1clJDPRxUZYI9aoz7NKbkfUz9y94mjnS0i5SD0zjngyXMh90-pDgqYw7fKVkCpUvxR5svWMS2TAfM5CydqSQRRYjijD0OREJvAXyxf3rqQ9SKz-Bz-lsObV9GiEiIal5wxXr2fd2f2fROQgryYcvp8Zidei92To8gUIob8~N0bhx5OHdMHiBmnDn9jpiXl1SRqxhi1zEPMzhBi1q18PLtTPab6YMIX9BNqKa73IkZxC~3ypo4WAvfTsZg9AW1vWl~JqpCFodz3HjFw-mrb~eel7eRwuya5-eBh-mZIH4KURjPRaJm8kAbUFB0mAulz5Q__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Earrings
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/8e3e/0644/8d7bbc7c024cb1773a1cd7cd39ed8cb4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ChpfMXuQ0rwyeuMQZLeSCl8JKEX4VS5JxznRZAgtMdhfbmGFCr6sSWUVzgeKsXBrhYVdV2LstNb~Hgsr-vfb77DYKDpGjMy9c90BDn01y~rlz2I7GulZKdsa4DipxZW6ujzsczMW6vrQ7ivILZkqtD69bpQLoGmy4wCQuPtwsQdTplJbr6ZXnWc1taeMIvql4a9j67dO1MpGDVXdnEx7iwgGGIKLMA8VDYFXZHpDAWcr3U4rnMxnwMyDQJD55SYgoyJJnPpVZYEi79B3C~ch6SmMUXpDKt~aMAHWN8a1VGRMsvnMFpP3AmGroirDHoDM-3CMZnopdz4nuxvrewLskQ__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Watches
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/8e3e/0644/8d7bbc7c024cb1773a1cd7cd39ed8cb4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ChpfMXuQ0rwyeuMQZLeSCl8JKEX4VS5JxznRZAgtMdhfbmGFCr6sSWUVzgeKsXBrhYVdV2LstNb~Hgsr-vfb77DYKDpGjMy9c90BDn01y~rlz2I7GulZKdsa4DipxZW6ujzsczMW6vrQ7ivILZkqtD69bpQLoGmy4wCQuPtwsQdTplJbr6ZXnWc1taeMIvql4a9j67dO1MpGDVXdnEx7iwgGGIKLMA8VDYFXZHpDAWcr3U4rnMxnwMyDQJD55SYgoyJJnPpVZYEi79B3C~ch6SmMUXpDKt~aMAHWN8a1VGRMsvnMFpP3AmGroirDHoDM-3CMZnopdz4nuxvrewLskQ__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Hand Rings
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sectionfirst_left_one">
                      <div className="sectionfirst_left_one_title">
                        <label>Clothing & Shoes</label>
                        <div className="row">
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/4fc6/dfbd/3e650e93317d588bc64def8ddcce143d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWKd-qTCQyWkhwgZtlGVXJ9h3TZ2N8SaQ7c893jqKO18APACXfmhO5ImJoxEyMJgr8M3P11-XXgRkD1qpOBf6zmHqIliAoeoIqMOX~omM4ffbPJT7KepN4xIaOneU57hgMzvOOxXaYm59uwtj61FEKdMi6-r14PqXNfS1nOvHsnOFh4srApkVdG69849iN4xj9IH0YNqgg8c9NSpkE3208UPMNyrgr5L5CMjRgVY--ZMJY0Td2wnGRGU-3lqBcSGy6QTI52flQWfL1k~k89g1DJPwb6fDgn5E5xDvAz-RU2IvR2j0kIJrBluTZXkdwsTos5LCD40mNMPzELOgMeW9w__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                All Unisex Footwear
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/d10a/45c0/4eb507518051b13500471cd0b176616a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deSo23ySuer7ezHBZqSh0CC5DK8EvKSZncST6gJy8QNwaTWrOYof25UkCWogHfkEG0IKWIZ-CUbiuL7hPeiHWetdvMukgdwEuOmZdRLoqOl9RfC61iS6Sm733i9GC6XJ~eVJbgjJJTjLmS1ijW2o~cLvpke17RagA3LW0rxjy6GeoyNPhT-DgOr2YsrV-si-0h5P61Kmomm8vXRRB1g7qAmYxxKPCBcOv6b9ur6qCO6rW0~T9taHDFtrP6AMFaI2B6efJH3LRTng5aYTIB0bONV~pxIzRKq~zpBpYBVujheOP8-jNJp9PzWyJp~AwEsSuxgtWbn~OPTlp5~31zchfg__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                All Sarees
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/77d1/f711/8149d664b662330726dd63dbec0f67c2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gbcm3JsFCm0F1xySTaCSQ4KjyxHAhKEUh-3Jz~XQOEBR7rxp32c78B3mAEqiRol-5L0W1F1UIZoX1e8FLb4KO8EAs7PYdfeo-Iusp08cwCIDuMAFTLAcF5x2xleNs3jBmFCzPT87bjrXWBGnuQ-ZkQKDBt9nmAR9Vf-cW9O-Q1u2OoSgvydzwbFA-FL7s~P00XAitcpfIzIk2rLaMTxFajvoQHjJHVUev30qn1cCxknICOnO4NREDZ~5HhI2wvYzuxDNTyx95M0~GmN2CFk0~yXO7Zsfo2FuaSU9lPnBKTcDpWBOHQHevGAXPA~J-5b-hCIdNrCshZiEaXgq3MEVyg__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Bride Lehenga
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/debf/974b/ad6a552bef805de55174a53721e20983?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5oROWGXC~wOjx-Dqbtws~0rjLOKy-JYCofbPYo6rMv~SJmx~6IExFPv4~xsqiTi5RuNbfIUKYWHBfymyeeF0yqXPd9AKWz665JnR9Z0tzY2Kd~mzC4LxpCuswg~8XBgmFtJzL7btns0xEko3~-Z1vPSuxnEp-NV~TE1blT5wgEuMU9err6voNsCtQSGyV3RMpC7FL0EbJpWmAEhzSVcWcywLoL8WGFr0F3vflb-TBBRYbnfypSDTV7ohttLRBfbA0YqFF2Y13Z6TtnJdcjxJkvRXnm6e~NF94FZnd3E~6pFLtZPqtGpRIxx4FT2j5AGxzfuxknDkmelIG6MGScqxA__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Kurtis
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="sectionfirst_left_one">
                      <div className="sectionfirst_left_one_title">
                        <label>Home & Living | Up to 12% off</label>
                        <div className="row">
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/1fd8/af94/db961e92edde8f8b0ec5a208bbf6c9ac?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W08JeIB1KcppXGQzqemtD1c25vMlc6BASkuRROzUFF2CCGQD4zQ83JhhoG9X-0C2mkoVQF7qdWgLM8YOlVnCUGp2A~NuAueMLqvHY7FJz3xgQQonJuEn4UnAKE3XrAFXJ~~EKoVp2EjJu~XuErSsC0LyGtYW9Fo-mJkn33rXi2JNGjbjTeNaCF3XlvYpoGPyTtuuwzjhFwlAKt1c7FDUhpxQUdza9m~yOuNaq1R8mZp-XNqS-xHtCOrItGWrzDuFX3OUOxS0GMIkrFVIXR1KO5mFZQb~NyxWC~YloVTAv3M6ki70J0LyQeTpmP4tc-nOWExknDbP9-7jWBxyJkRWrQ__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Showpiece
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/5d22/102c/f7619e3ed091d93c9a5f83c3fbd2acc7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mE8961whdd44ymgFHOXsm1iuPiNcwweg5aU6jyW53I-pD69Yaf9dmREfz9I-q3in7QbIdXvJoUFL9GBEvnAXDGkAKfyen3x2tIaZu~cmZGsoh7mKk9YW9aaonkdtH0SqIyLwXGK0CfxHv265V4oc9G45BQDFUVVaTY26BwrcXrbi~Covd79Y3YHm0ZlkwWWASEbQTkOZlVi4Qn71BQX2HUvkb2XKVxXmutWFQ1FG7a-1TmHVH7ejeYtINwTYsO05STOWI2Ct~hvpYAPyjW56KOPLXzPZLxBVr2XhNjNWQVIg4lcP6GN1VoI~dZkBJMs1EAZ4zZL~JFPKwIf0YFDQDQ__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Clocks
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/53cb/723d/d684c70f53c7853ffdcaabd92ca5c263?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rn4M9PkasDKHtKTMME1wOVsykBt~oU1D2NIy9mCGpn5J1GJNjDLOdxxdk1438oVPv8YBnP8w2zwmEBfboLmhE72lebMUZAj416N4dQv~iJIgBnBC19qdbYHRdvGR~VH4DoeRSxTquFYqFi0EOU5x1QVDuubaUZalvk~8q2RJNBJNy3oBf9f0ljkeshe9OTLp9-Cp1UNvCwIQ9iNXD3SMEsZ6cD~MMmMB2z~-MPBcRLnJpcg~rcmaZk~qlbInUntQR9WA1d5XXT~g66pdWgCANYdmBzbiPsAdtlNTeXOrBMLb2sp0Xe9b3HQ6~tnTkoVO3--wWEnHLvrUY4HPOQOH~Q__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Handicrafts
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/9b61/5a16/0174df86a758f13686201ec848c33d37?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYQr9ayEPqtr7kKHn2Wv5auzfJ38IJKLo6-EuvLybzadCgRLeQ2BaHjruMqpyJp39ccC9igEToSNiDLgwH3kscCn1aNOuit~RU3MJd~tSf4LY9dWo3b6I4~I-tOaSuxD03GHUeVwOjofgQny~kM3h5RPlATrGak5qGXdKqPUZdka2Fe1IBvQVtieeeOqLAZn64GErqBGHZUDqbwuJ3G35tcf-6W1gsG-iPOmfEsJPoBAI0ybjt1~lQ5AfbNNkD~~HwxaWU4CygKhjLYd~rYLeQpsQzKhhHdoYlcx7o7PRcKDp0-ZypPcrjsHu~pqvg9GPtViV1tG2iQG2w5o0AAVCw__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Cookware
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sectionfirst_left_one">
                      <div className="sectionfirst_left_one_title">
                        <label>Handmade Products | Flat 20% off</label>
                        <div className="row">
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/eb9b/fe9a/e2bf1b5e89629103922679f180eac167?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dqSK5K~0HLRupvNDEupOJ20B8LNWw1hBYAZulut6wqu8ujmCd6JqznsH8vQsP98xwxP-OvJ6z5SSzwqfr0VutY2eBBgKl027FAYI~uDcOXG4xux~zn~Hz5E2V6YmFbKeO8WnFCYgo6pWeEV3K75TUOppVk1IwRMd06iozf4mjRZUhht34SoIqAoNKpt79SBWBGXHoukSaz3aQKYuEKDEIplOZROyV9jwri--BtdLrWN2GfRCoMeV-qfu-dgb65X~sH0-d8uLjvpGx-mphXJBNwKpugZZ7QIbM7eyAwm-jX9BPZyhXVdOXb0E78KbnN3CEJvkktkqWwC4XeAKKmJO-w__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Handbags
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/164c/c1b8/7882aa78097eff872cfa44b03e36196e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fd6eifb3z8hlnMJuB1hIc0Sgc~F04XEUWV25BQ4Dz0IA2XO5x1gtL6DDaVL2quL1GqOJIUUUprrS8qnFLn3vmUVuWod7Cf9CPNMx8K0kzA9VU01QYjFxWJVtrzK7D~0YoNTvVNnKv1dhwWg4Wp8ON2Ae3oEjjXNHj44PAXI-k0cHZG0Qoqimrsj88rz-DkiAqK6a2yItRxe-s2WaNVwOXVKVQOORyaaHgiEBeqt0GbJmyQAybqa2slAqxqbpfnVf8QAlTecD9JmnA5CLKiWDUdJKMYS3-HFUSt-yEUqgxLBMILoYFUffmIzfp2JFy1tDBDt75YPea5Qi22HBTlYijw__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Wallets
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/fc8a/bfcd/b8bd6f15f3cb1bb642a49cb4e2dca394?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RbbksQ2aTMc18KGNeuk5lKjZsVnLevS4ml~eEJb1iIVbxCDqDAgMuR~zwbspg6Gbzy7zg~C3C6rKMWb543mGHfLMAjfY4Ai4SXk-7REpwRBiuZRrDW-vSgGy3MSlHCP8e5vMpbVFkfKNhDuhx911PqDikJAwv~-o-qMjPsSYslR2Alwd2ZNC6ikGmqmUjTFEO4MVXTlcoiiCHJ9~nit5D1O88V7Cw0ByXlWlNex3lnkEj-cqzw-w~m9xYaXAJhuM6C22jql5S8PPqdjJt1IOSF9PE9vvTTBkbTfYua~q-n8UuhvR~Myi1bXNgR5BBxS25RK0UuspBwjLkjbFnGk7ZQ__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Baranasi Saree
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div className="sectionfirst_left_card">
                              <div className="sectionfirst_left_card_image">
                                <img
                                  src="https://s3-alpha-sig.figma.com/img/d54f/679d/70bea9e3f51f9a6f56cf56455985d2d5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bZlHfINYFflNLkHwMuPU9DuA0hwmT55jXtvUQvErFcgdccrlP7v-Qxt9JAJv~lCh-b6AfS5V6VMp3zdnddBXx0uaTMXrPnoedQJVjV4r0ewKAqTtoRXdoTeVFBSxy-NKJseqEC5jQhL2JTJv6qk5Bf3Cq3nF3JrwG7jrTLlll6E8rM9gasCtY2oZbVhQbesNFrh38TkxR6IWsjV8QkFb4cG3RJ1wnZwnsMwZQoVNEwCWOjGJpGcnOU~YqVi2ArHaAIswWbXcMLiiL-Oe5rPpVAXkB0v4VzGflWwf4YlBfBWNAYWcj1IMS~jkVX6ngLl6sNiFWjjYxvmJnqFQoUePMA__"
                                  alt=""
                                />
                              </div>
                              <div className="sectionfirst_left_card_title">
                                Bag’s
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sectionfirst_right">
                <div className="sectionfirst_right_title">Latest Products</div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="sectionfirst_right_card">
                      <div className="sectionfirst_right_card_image">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/820f/83f7/e192ed33e4d08af0533795d099117d59?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Unr4l3HZVDDsRvhXXW67JJmb8TjN0-xKFi8dhGNtuvR7iaCsU1g8JOuRbUWwKGrvck~9BOypaa6ziM-mzhkFdYDBHaazBOGfaPDao11E2HZyX9fN87jMm9bdJJQVo0uGsn5Rv9szd0pc2UD65fSxWFjHz7ZcU3-zKn6oNq23DedtvjAA7wQtVX52GrpqQ2vl9C4vzcNkGN6DvtOpsoZ6s2iLeGwwrkW31O14dr5-CTf8sCBhwPvd73r7-~6Fr46ofEHSSNL6WCKP5wzngdTX5E-AGSAnc7tpNX556nDRmd-feTAqToUaXyaJWGDggXjss2D84IKHddJaiGnfloFbBw__"
                          alt=""
                        />
                      </div>
                      <div className="sectionfirst_right_card_content">
                        <div className="row">
                          <div className="col-md-8 col-8">
                            <div className="sectionfirst_right_card_content_title">
                              Pure Banarasi <br />
                              Silk Saree
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="sectionfirst_right_card_content_price">
                              <del>₹ 1280</del>
                              <br />
                              <span>₹ 780</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sectionfirst_right_card">
                      <div className="sectionfirst_right_card_image">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/4776/6065/80979ff98e4f9d36214a18cf658ef267?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Np0cBwFU6ru4bjR~9Vqj4~I95OO4wkOqk2jXjGstNoh-FSutOyl2dmxWCb-oNtaO3KFuggUGgRtJGEtmthcRc1Tk3k-OZ1jVKU-IuH1i8g8FwQzWEcK6SgLevzGFrDBPErcNIxOVbVUSZcDlzh6c6hPzoQD5w74H0fIsxIz7bUVQVkAFn5RFfqVKutJ1B1wnN-QfedPTTGrNG~5Twy4QOE0d7YxMl1L7s1n7J1Y2Mxx2jPU2LByhB76828xHoscIJWm0gpmYWjZtsAjmdcZ7VUPisJ9T3k8KE663W3bGgrggtXlTlRmI4RUFBRmWEoFeIK27Ii7hqGylCnZwGOx8bg__"
                          alt=""
                        />
                      </div>
                      <div className="sectionfirst_right_card_content">
                        <div className="row">
                          <div className="col-md-8 col-8">
                            <div className="sectionfirst_right_card_content_title">
                              Shree Ram Lalla Idol
                              <br /> Ayodhya Murti
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="sectionfirst_right_card_content_price">
                              <del>₹ 1599</del>
                              <br />
                              <span>₹ 499</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sectionfirst_right_card">
                      <div className="sectionfirst_right_card_image">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/b3dc/f986/2ded47f08709a3576aa3389ae7c0b9a2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9W~So05fZTD-d-Y5BhSPwtBZXRFONDmwvYkzfKNzOGWt1Q7vx75ERUHxZBSo3NXl-LguGyiI0Zax2-2MBSQLphKZ64nk~uCo1B35BVI-R0ec7N-HxflQ~Hl6l80haTIHNzrWdBKr2~TA2zLsh4e~z22v-uauXVe1MRTXGO-n-HmYoSJcBBUX3GADvu1BvGdofaEx6~08MiAWMd08HlP9byiDpVU~p69PQ6S6BLardFJfvc8hJwfeZ49o8kVixIXwZ4CmLZi~D-1F0BBxNR-InebvkN9RIVoPCWYYZ4Ti15kR3zEY5xyOEvIXIfbjuQxdS~oYCRa-Fs9Ub7uCg~XYw__"
                          alt=""
                        />
                      </div>
                      <div className="sectionfirst_right_card_content">
                        <div className="row">
                          <div className="col-md-8 col-8">
                            <div className="sectionfirst_right_card_content_title">
                              Handmade <br />
                              Macrame Basket set
                              <br /> of 3 Storage Box
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="sectionfirst_right_card_content_price">
                              <del>₹ 1999</del>
                              <br />
                              <span>₹ 1299</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sectionfirst_right_card">
                      <div className="sectionfirst_right_card_image">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/a591/7290/2a3d297fb4a0a2a577cb13e1d6a5b767?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2Rw7o4x-SvrGSdo4OKljqMafhLBfB2Z1vTHxu9VaH~owj4LFHk0UqHSJAy1EX50zbdAVhe8w9iktRhMgZEU4Hewjn0EVgaiMOdmARUQVxbRonQ5D3FPONP6SHntCXAY~S9zVe1VDrR1z3V1sf9eRWC7n9pQXW8iFi4uoEms0YCDBbOxDbI3bC8Dd5SyXjrnCW6crU9P08LivSTrBGEnkiYm-4fWWehKZOELO-LmoKt-~m47VU5LWVdEYA5qhBpXa8~sHWVCqrw60NVdO15NbjBABjOcarnb-DKH4wBB1j6iBdy2u4JZVrlA6Xxm6cbv9h8Ilkw5l-86wZnBBhjeoQ__"
                          alt=""
                        />
                      </div>
                      <div className="sectionfirst_right_card_content">
                        <div className="row">
                          <div className="col-md-8 col-8">
                            <div className="sectionfirst_right_card_content_title">
                              Carved Feather <br />
                              Shaped Wall Décor <br />
                              Decorative MDF Tray
                            </div>
                          </div>
                          <div className="col-md-4 col-4">
                            <div className="sectionfirst_right_card_content_price">
                              <del>₹ 1999</del>
                              <br />
                              <span>₹ 1299</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------------- first section end ----------------------------------> */}

      {/* <!--------------------- second section start ----------------------------------> */}

      <div className="sectionsecond">
        <div className="container">
          <div className="secondsection_image">
            <img src={bannerone} alt="" />
          </div>
        </div>
      </div>

      {/* <!--------------------- second section end ------------------------------------> */}

      {/* <!--------------------- third section start ----------------------------------> */}

      <div className="sectionthird">
        <div className="container">
          <div className="thirdsection_image">
            <img src={bannertwo} alt="" />
          </div>
        </div>
      </div>

      {/* <!--------------------- third section end ------------------------------------> */}

      {/* <!--------------------- forth section start ------------------------------------> */}

      <div className="sectionforth">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="sectionforth_left">
                <div className="sectionforth_leftimage">
                  <img src={bannerthree} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sectionforth_right">
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={20}
                  autoplay
                  {...options}
                >
                  <div className="item">
                    <div className="sectionforth_rightimage">
                      <img src={bannerfour} alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="sectionforth_rightimage">
                      <img src={bannerfour} alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="sectionforth_rightimage">
                      <img src={bannerfour} alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="sectionforth_rightimage">
                      <img src={bannerfour} alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="sectionforth_rightimage">
                      <img src={bannerfour} alt="" />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------------- forth section end --------------------------------------> */}

      {/* <!--------------------- fifth section start ------------------------------------> */}

      <div className="section_fifth">
        <div className="container">
          <div className="sectionfifth_card">
            <div className="sectionfifth_card_title">Verified Product</div>
            <div className="row">
              <div className="col-md-3">
                <div className="sectionfifth_firstcard">
                  <div className="sectionfifth_firstcard_image">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/1fd8/af94/db961e92edde8f8b0ec5a208bbf6c9ac?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W08JeIB1KcppXGQzqemtD1c25vMlc6BASkuRROzUFF2CCGQD4zQ83JhhoG9X-0C2mkoVQF7qdWgLM8YOlVnCUGp2A~NuAueMLqvHY7FJz3xgQQonJuEn4UnAKE3XrAFXJ~~EKoVp2EjJu~XuErSsC0LyGtYW9Fo-mJkn33rXi2JNGjbjTeNaCF3XlvYpoGPyTtuuwzjhFwlAKt1c7FDUhpxQUdza9m~yOuNaq1R8mZp-XNqS-xHtCOrItGWrzDuFX3OUOxS0GMIkrFVIXR1KO5mFZQb~NyxWC~YloVTAv3M6ki70J0LyQeTpmP4tc-nOWExknDbP9-7jWBxyJkRWrQ__"
                      alt=""
                    />
                  </div>
                  <div className="sectionfifth_firstcard_title">Showpiece</div>
                  <div className="sectionfifth_firstcard_price">
                    Rs. <del>895</del> <span>499/-</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sectionfifth_firstcard">
                  <div className="sectionfifth_firstcard_image">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/cced/275e/1eb4796d139e2e08fc0a86165fc58161?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE54KcXfq-pGLUL8q1qO-f3pwpKXYWSDPx9zxtBEomXyCLtLsDsMZdDPZCA~gg8~QZva-FlZm7GrT~XWzDAp11f1B7uUEyu2pS~9uyf-ahYNLoeotpvdRcnB0CqqaMFuPIlBMSy8xUEOJ5oxbULj9Rjcx~k3dBw6H72KsBJU267sgJNS69i3iwWvU2lNd97oRdHlZXwRLXS5li9E47ouTVxBHE-dPFFVVoeV0sNvAM7G~415RZGwe2HbtCBZD9e9fEHd8tEyt8lNv~apkeN~Gv8YoNshkNFVzORCq6wUJrCiLCnZ9jEvzAkY-QMrTwWE8GY~0FbFXpPXUifyLeWmvA__"
                      alt=""
                    />
                  </div>
                  <div className="sectionfifth_firstcard_title">
                    Apple Sarees
                  </div>
                  <div className="sectionfifth_firstcard_price">
                    Rs. <del>1599</del> <span>960/-</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sectionfifth_firstcard">
                  <div className="sectionfifth_firstcard_image">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/a95e/46cc/cb894c6902f3a9917da9de76dbfd3348?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4IH2J0iHSnuRFC6so3NKnKeJg9-u4yyhKjcjZ9mO4Y3qRXfiIIljSareRlIiQvcJzjOSHR~WuQaFMTmwC1HkaBGtcvQL3~gME033hjWl6fHHgajp4LU5u-xrkkeRt~dgRyfeAOLuABpbYONc3d9rfafXMLMRT8SPj~odhVM7ffwgnK~JZu6iEWq2hTAAcg8Pax2oBpCpf5mwiSiBnGf1Z48DPzBDfmJStR3n78TzXR1oyOqY4Yqj5LC1n72omQ7p78LJZG29v4N40qs3hdZz8y0yy34yrhBI2SRYyPxfpZLNsZ2b2zbw5jO18C9zhvx-Dw0HRAgyB7cnlzK3w4raA__"
                      alt=""
                    />
                  </div>
                  <div className="sectionfifth_firstcard_title">Clover</div>
                  <div className="sectionfifth_firstcard_price">
                    Rs. <del>895</del> <span>499/-</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sectionfifth_firstcard">
                  <div className="sectionfifth_firstcard_image">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/8e3e/0644/8d7bbc7c024cb1773a1cd7cd39ed8cb4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ChpfMXuQ0rwyeuMQZLeSCl8JKEX4VS5JxznRZAgtMdhfbmGFCr6sSWUVzgeKsXBrhYVdV2LstNb~Hgsr-vfb77DYKDpGjMy9c90BDn01y~rlz2I7GulZKdsa4DipxZW6ujzsczMW6vrQ7ivILZkqtD69bpQLoGmy4wCQuPtwsQdTplJbr6ZXnWc1taeMIvql4a9j67dO1MpGDVXdnEx7iwgGGIKLMA8VDYFXZHpDAWcr3U4rnMxnwMyDQJD55SYgoyJJnPpVZYEi79B3C~ch6SmMUXpDKt~aMAHWN8a1VGRMsvnMFpP3AmGroirDHoDM-3CMZnopdz4nuxvrewLskQ__"
                      alt=""
                    />
                  </div>
                  <div className="sectionfifth_firstcard_title">Hand Ring</div>
                  <div className="sectionfifth_firstcard_price">
                    Rs. <del>895</del> <span>499/-</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sectionfifth_firstcard">
                  <div className="sectionfifth_firstcard_image">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/1fd8/af94/db961e92edde8f8b0ec5a208bbf6c9ac?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W08JeIB1KcppXGQzqemtD1c25vMlc6BASkuRROzUFF2CCGQD4zQ83JhhoG9X-0C2mkoVQF7qdWgLM8YOlVnCUGp2A~NuAueMLqvHY7FJz3xgQQonJuEn4UnAKE3XrAFXJ~~EKoVp2EjJu~XuErSsC0LyGtYW9Fo-mJkn33rXi2JNGjbjTeNaCF3XlvYpoGPyTtuuwzjhFwlAKt1c7FDUhpxQUdza9m~yOuNaq1R8mZp-XNqS-xHtCOrItGWrzDuFX3OUOxS0GMIkrFVIXR1KO5mFZQb~NyxWC~YloVTAv3M6ki70J0LyQeTpmP4tc-nOWExknDbP9-7jWBxyJkRWrQ__"
                      alt=""
                    />
                  </div>
                  <div className="sectionfifth_firstcard_title">Showpiece</div>
                  <div className="sectionfifth_firstcard_price">
                    Rs. <del>895</del> <span>499/-</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sectionfifth_firstcard">
                  <div className="sectionfifth_firstcard_image">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/cced/275e/1eb4796d139e2e08fc0a86165fc58161?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE54KcXfq-pGLUL8q1qO-f3pwpKXYWSDPx9zxtBEomXyCLtLsDsMZdDPZCA~gg8~QZva-FlZm7GrT~XWzDAp11f1B7uUEyu2pS~9uyf-ahYNLoeotpvdRcnB0CqqaMFuPIlBMSy8xUEOJ5oxbULj9Rjcx~k3dBw6H72KsBJU267sgJNS69i3iwWvU2lNd97oRdHlZXwRLXS5li9E47ouTVxBHE-dPFFVVoeV0sNvAM7G~415RZGwe2HbtCBZD9e9fEHd8tEyt8lNv~apkeN~Gv8YoNshkNFVzORCq6wUJrCiLCnZ9jEvzAkY-QMrTwWE8GY~0FbFXpPXUifyLeWmvA__"
                      alt=""
                    />
                  </div>
                  <div className="sectionfifth_firstcard_title">
                    Apple Sarees
                  </div>
                  <div className="sectionfifth_firstcard_price">
                    Rs. <del>1599</del> <span>960/-</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sectionfifth_firstcard">
                  <div className="sectionfifth_firstcard_image">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/a95e/46cc/cb894c6902f3a9917da9de76dbfd3348?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A4IH2J0iHSnuRFC6so3NKnKeJg9-u4yyhKjcjZ9mO4Y3qRXfiIIljSareRlIiQvcJzjOSHR~WuQaFMTmwC1HkaBGtcvQL3~gME033hjWl6fHHgajp4LU5u-xrkkeRt~dgRyfeAOLuABpbYONc3d9rfafXMLMRT8SPj~odhVM7ffwgnK~JZu6iEWq2hTAAcg8Pax2oBpCpf5mwiSiBnGf1Z48DPzBDfmJStR3n78TzXR1oyOqY4Yqj5LC1n72omQ7p78LJZG29v4N40qs3hdZz8y0yy34yrhBI2SRYyPxfpZLNsZ2b2zbw5jO18C9zhvx-Dw0HRAgyB7cnlzK3w4raA__"
                      alt=""
                    />
                  </div>
                  <div className="sectionfifth_firstcard_title">Clover</div>
                  <div className="sectionfifth_firstcard_price">
                    Rs. <del>895</del> <span>499/-</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sectionfifth_firstcard">
                  <div className="sectionfifth_firstcard_image">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/8e3e/0644/8d7bbc7c024cb1773a1cd7cd39ed8cb4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ChpfMXuQ0rwyeuMQZLeSCl8JKEX4VS5JxznRZAgtMdhfbmGFCr6sSWUVzgeKsXBrhYVdV2LstNb~Hgsr-vfb77DYKDpGjMy9c90BDn01y~rlz2I7GulZKdsa4DipxZW6ujzsczMW6vrQ7ivILZkqtD69bpQLoGmy4wCQuPtwsQdTplJbr6ZXnWc1taeMIvql4a9j67dO1MpGDVXdnEx7iwgGGIKLMA8VDYFXZHpDAWcr3U4rnMxnwMyDQJD55SYgoyJJnPpVZYEi79B3C~ch6SmMUXpDKt~aMAHWN8a1VGRMsvnMFpP3AmGroirDHoDM-3CMZnopdz4nuxvrewLskQ__"
                      alt=""
                    />
                  </div>
                  <div className="sectionfifth_firstcard_title">Hand Ring</div>
                  <div className="sectionfifth_firstcard_price">
                    Rs. <del>895</del> <span>499/-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------------- fifth section end --------------------------------------> */}

      {/* <!--------------------- sixth section start ------------------------------------> */}

      <div className="section_sixth">
        <div className="container">
          <div className="sectionsixth_title">Brand Directory</div>
          <div className="sectionsixth_content">
            Photo frames | MDF crafts | tribal crafts | resin products |
            banarasi saree | Kolhapuri sandals | artificial plants| leather
            products | bean bag | macrame products | ram darbar statue | metal
            crafts | jewelry | leather bags | ladies purse | wooden ram mandir |
            religious decor | cotton curtains | bedsheets | blackout curtains |
            ottoman stools | photo frames | womens dress | mens dress
          </div>
        </div>
      </div>

      {/* <!--------------------- sixth section end --------------------------------------> */}

      {/* <!--------------------- footer section start -----------------------------------> */}

      <div className="footersection">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer_first">
                <div className="footer_first_title">
                  Registered Office Address:
                </div>
                <div className="footer_first_content">
                  <p>
                    Clan Business Private Limited. A-49 Engine House, Mohan
                    Estate Mathura Road, Badarpur, New Delhi, Pincode: 110044
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="footer_second">
                <div className="footer_second_title">Customer Policies:</div>
                <div className="footer_secnod_content">
                  <li>
                    <u>Cancellation & Returns</u>
                  </li>
                  <li>
                    <u>Shipments</u>
                  </li>
                  <li>
                    <u>Privacy policy</u>
                  </li>
                  <li>
                    <u>Terms & Conditions</u>
                  </li>
                  <li>
                    <u>FAQ</u>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="footer_third">
                <div className="footer_third_title">Category:</div>
                <div className="footer_third_content">
                  <li>
                    <u>Jewellery & Accessories</u>
                  </li>
                  <li>
                    <u>Clothing & Shoes</u>
                  </li>
                  <li>
                    <u>Home & living</u>
                  </li>
                  <li>
                    <u>Craft Supplies</u>
                  </li>
                  <li>
                    <u>Gift & Craft</u>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_forth">
                <div className="footer_forth_title">Connect with Us:</div>
                <div className="footer_third_content">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Linkdin</li>
                  <li>Twitter</li>
                  <li>
                    <div className="footer_image">
                      <img src={bottomimage} alt="" />
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="subfootersection">
            <div className="subfooter_first">
              <div className="subfooter_third_first">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_22_559)">
                    <path
                      d="M5.04492 11.47C4.8993 11.47 4.78125 11.588 4.78125 11.7336V12.2083C4.78125 12.3539 4.8993 12.4719 5.04492 12.4719C5.19054 12.4719 5.30859 12.3539 5.30859 12.2083V11.7336C5.30859 11.588 5.19054 11.47 5.04492 11.47Z"
                      fill="#ECC62D"
                    />
                    <path
                      d="M17.1672 14.9713H16.7403V7.65569C17.4475 7.53053 17.9864 6.91196 17.9864 6.16942V5.15425C17.9864 5.14908 17.9859 5.14402 17.9857 5.13892C17.9855 5.13607 17.9855 5.13323 17.9852 5.13038C17.9843 5.11997 17.9828 5.10974 17.9807 5.09976C17.9806 5.09916 17.9804 5.0986 17.9803 5.09804C17.9782 5.08844 17.9755 5.07909 17.9724 5.06991C17.9716 5.06759 17.9707 5.06527 17.9699 5.06298C17.967 5.05511 17.9637 5.04745 17.9601 5.03996C17.9594 5.03859 17.959 5.03714 17.9583 5.03581L16.7925 2.71729V1.50461C16.7925 1.19165 16.5379 0.937012 16.2249 0.937012H4.23478C4.08916 0.937012 3.97111 1.05507 3.97111 1.20068C3.97111 1.3463 4.08916 1.46436 4.23478 1.46436H16.2249C16.2471 1.46436 16.2651 1.48243 16.2651 1.50461V2.51866H1.73486V1.50461C1.73486 1.48243 1.75293 1.46436 1.77511 1.46436H3.00797C3.15359 1.46436 3.27164 1.3463 3.27164 1.20068C3.27164 1.05507 3.15359 0.937012 3.00797 0.937012H1.77511C1.46215 0.937012 1.20751 1.19165 1.20751 1.50461V2.71729L0.0416953 5.03581C0.0410273 5.03718 0.0405703 5.03862 0.0399375 5.03996C0.0363164 5.04745 0.033082 5.05511 0.0301641 5.06298C0.0293203 5.0653 0.0284063 5.06759 0.0276328 5.06991C0.0245391 5.07909 0.021832 5.08844 0.0197578 5.09804C0.0196172 5.0986 0.0194414 5.09916 0.0193008 5.09976C0.0171914 5.10978 0.0157148 5.11997 0.0148008 5.13038C0.0145547 5.13323 0.0145547 5.13607 0.0143789 5.13892C0.0140977 5.14402 0.0136055 5.14908 0.0136055 5.15425V6.16942C0.0136055 6.91192 0.552551 7.53053 1.25972 7.65569V14.9713H0.832781C0.37357 14.9713 0 15.3449 0 15.8041V16.6381C0 16.8725 0.190652 17.0631 0.425004 17.0631H17.575C17.8093 17.0631 18 16.8725 18 16.6381V15.8041C18 15.3449 17.6264 14.9713 17.1672 14.9713ZM17.4591 6.16946C17.4591 6.71118 17.0183 7.1519 16.4766 7.1519C15.9349 7.1519 15.4942 6.71118 15.4942 6.16946V5.41796H17.4591V6.16946ZM16.3675 3.046L17.295 4.89058H15.416L14.7535 3.046H16.3675ZM14.1931 3.046L14.8556 4.89058H12.9512L12.5537 3.046H14.1931ZM14.9669 5.41792V6.16942C14.9669 6.71114 14.5261 7.15186 13.9844 7.15186C13.4427 7.15186 13.002 6.71114 13.002 6.16942V5.41792H14.9669ZM12.0143 3.046L12.4118 4.89058H10.4915L10.359 3.046H12.0143ZM12.4746 5.41792V6.16942C12.4746 6.71114 12.0339 7.15186 11.4922 7.15186C10.9505 7.15186 10.5098 6.71114 10.5098 6.16942V5.41792H12.4746ZM8.16968 3.046H9.83029L9.96279 4.89058H8.03718L8.16968 3.046ZM8.01756 5.41792H9.98244V6.16942C9.98244 6.71114 9.54172 7.15186 9 7.15186C8.45828 7.15186 8.01756 6.71114 8.01756 6.16942V5.41792ZM9 7.67921C9.51694 7.67921 9.97386 7.41796 10.2461 7.02066C10.5184 7.41796 10.9753 7.67921 11.4922 7.67921C12.0092 7.67921 12.4661 7.41796 12.7383 7.02066C13.0106 7.41796 13.4675 7.67921 13.9844 7.67921C14.5014 7.67921 14.9583 7.41796 15.2305 7.02066C15.4554 7.34881 15.8064 7.58372 16.213 7.65569V14.9713H6.2872V9.11204C6.2872 8.84161 6.0672 8.62161 5.79677 8.62161H2.74841C2.47799 8.62161 2.25798 8.84161 2.25798 9.11204V14.9713H1.78706V7.65569C2.19368 7.58372 2.54464 7.34881 2.7695 7.02066C3.04175 7.41796 3.49868 7.67921 4.01562 7.67921C4.53255 7.67921 4.98948 7.41796 5.26173 7.02066C5.53398 7.41796 5.99091 7.67921 6.50781 7.67921C7.02471 7.67921 7.48167 7.41796 7.75392 7.02066C8.02614 7.41796 8.48306 7.67921 9 7.67921ZM5.75986 9.14895V14.9713H2.78532V9.14895H5.75986ZM3.03314 6.16946V5.41796H4.99802V6.16946C4.99802 6.71118 4.5573 7.1519 4.01558 7.1519C3.47386 7.1519 3.03314 6.71114 3.03314 6.16946ZM5.98574 3.046H7.64096L7.50846 4.89058H5.58823L5.98574 3.046ZM5.52537 5.41792H7.49021V6.16942C7.49021 6.71114 7.0495 7.15186 6.50777 7.15186C5.96605 7.15186 5.52537 6.71114 5.52537 6.16942V5.41792ZM5.44627 3.046L5.04875 4.89058H3.14434L3.80682 3.046H5.44627ZM1.63248 3.046H3.2465L2.58402 4.89058H0.704988L1.63248 3.046ZM0.540949 6.16946V5.41796H2.50583V6.16946C2.50583 6.71118 2.06511 7.1519 1.52339 7.1519C0.981668 7.1519 0.540949 6.71114 0.540949 6.16946ZM0.527344 16.5358V15.8041C0.527344 15.6357 0.664348 15.4987 0.832781 15.4987H17.1672C17.3356 15.4987 17.4726 15.6357 17.4726 15.8041V16.5358H0.527344Z"
                      fill="#ECC62D"
                    />
                    <path
                      d="M15.0037 8.62158H11.7795C11.6338 8.62158 11.5158 8.73964 11.5158 8.88525C11.5158 9.03087 11.6338 9.14893 11.7795 9.14893H14.9669V13.2986H7.36523V9.14893H10.5381C10.6837 9.14893 10.8018 9.03087 10.8018 8.88525C10.8018 8.73964 10.6837 8.62158 10.5381 8.62158H7.32832C7.0579 8.62158 6.83789 8.84155 6.83789 9.11201V13.3355C6.83789 13.606 7.0579 13.826 7.32832 13.826H15.0037C15.2742 13.826 15.4942 13.606 15.4942 13.3355V9.11201C15.4942 8.84159 15.2742 8.62158 15.0037 8.62158Z"
                      fill="#ECC62D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_559">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="subfooter_third_second">Become a Resellars</div>
            </div>

            <div className="subfooter_second">
              <div className="subfooter_third_first">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50039 0C4.25542 0 0.000366211 4.24969 0.000366211 9.49501C0.000366211 14.7453 4.25542 19 9.50034 19C14.7482 19 18.9996 14.7453 18.9996 9.49501C18.9997 4.24969 14.7482 0 9.50039 0ZM10.1774 14.7811C9.95672 14.9774 9.70101 15.0761 9.41134 15.0761C9.11164 15.0761 8.85021 14.9792 8.62706 14.785C8.40356 14.5911 8.29159 14.3197 8.29159 13.971C8.29159 13.6617 8.39995 13.4013 8.61598 13.1903C8.832 12.9793 9.09699 12.8738 9.41134 12.8738C9.72068 12.8738 9.98105 12.9793 10.1924 13.1903C10.4034 13.4013 10.5093 13.6616 10.5093 13.971C10.5089 14.3147 10.3984 14.5848 10.1774 14.7811ZM12.9286 7.96042C12.7591 8.27477 12.5577 8.54583 12.3242 8.77439C12.0914 9.00291 11.6726 9.387 11.0682 9.92701C10.9015 10.0794 10.7674 10.2131 10.6669 10.3283C10.5665 10.4438 10.4914 10.5492 10.4423 10.6451C10.393 10.7409 10.3551 10.8368 10.3283 10.9326C10.3014 11.0281 10.261 11.1966 10.2063 11.4372C10.1133 11.9479 9.82117 12.2032 9.33012 12.2032C9.07477 12.2032 8.8602 12.1199 8.68531 11.9529C8.51113 11.7859 8.42424 11.5381 8.42424 11.2091C8.42424 10.7967 8.48825 10.4394 8.61593 10.1373C8.7429 9.83505 8.91278 9.57006 9.12378 9.34155C9.33514 9.11303 9.61979 8.84193 9.9785 8.52757C10.2928 8.25255 10.52 8.04515 10.6598 7.90529C10.7999 7.76512 10.9176 7.60919 11.0131 7.43752C11.1093 7.2655 11.1565 7.07917 11.1565 6.87785C11.1565 6.48483 11.011 6.15367 10.7185 5.88366C10.4263 5.61366 10.0493 5.47846 9.58763 5.47846C9.04727 5.47846 8.64959 5.61471 8.39423 5.88723C8.13888 6.15974 7.92325 6.56098 7.74621 7.09136C7.57885 7.64642 7.26199 7.9239 6.79598 7.9239C6.52096 7.9239 6.28888 7.82698 6.0997 7.63313C5.91087 7.43928 5.81645 7.22938 5.81645 7.00337C5.81645 6.53701 5.9663 6.06422 6.26565 5.58537C6.56535 5.10651 7.00237 4.70989 7.57705 4.39588C8.15138 4.08153 8.82197 3.92416 9.58763 3.92416C10.2997 3.92416 10.928 4.05575 11.473 4.31863C12.0181 4.58111 12.4393 4.9384 12.7365 5.39042C13.0334 5.84209 13.1821 6.33313 13.1821 6.8635C13.1828 7.28019 13.0981 7.64606 12.9286 7.96042Z"
                    fill="#ECC62D"
                  />
                </svg>
              </div>
              <div className="subfooter_third_second">Help Center</div>
            </div>
            <div className="subfooter_third">
              <div className="subfooter_third_first">
                <svg
                  width="32"
                  height="20"
                  viewBox="0 0 32 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.9984 0.499514C4.86579 0.500045 4.73882 0.553224 4.64542 0.647356C4.55202 0.741487 4.49984 0.868864 4.50035 1.00147V5.01709C4.5001 5.08308 4.5129 5.14847 4.53804 5.20948C4.56317 5.27049 4.60014 5.32593 4.6468 5.37259C4.69347 5.41925 4.74891 5.45622 4.80993 5.48135C4.87094 5.50649 4.93633 5.5193 5.00232 5.51904L5.49255 5.51508C5.92909 5.51205 6.32608 5.69587 6.60191 5.99848H1.00133C0.935345 5.99822 0.869957 6.01104 0.808943 6.03617C0.747929 6.06131 0.69251 6.09827 0.645849 6.14493C0.599187 6.19159 0.562218 6.24703 0.537081 6.30804C0.511945 6.36906 0.499142 6.43444 0.499393 6.50043V10.5161C0.499138 10.5823 0.512022 10.6479 0.537341 10.7091C0.56266 10.7703 0.599885 10.8259 0.646858 10.8726C0.693831 10.9193 0.749636 10.9562 0.81099 10.9812C0.872343 11.0061 0.93804 11.0186 1.00427 11.018L1.49549 11.014C2.32621 11.0082 2.99061 11.6677 2.99061 12.4984V13.0004C2.99061 13.8311 2.32617 14.4898 1.49549 14.4838L1.00427 14.4798C0.93804 14.4792 0.872343 14.4917 0.81099 14.5166C0.749636 14.5416 0.693831 14.5785 0.646858 14.6252C0.599885 14.6719 0.56266 14.7275 0.537341 14.7887C0.512022 14.8499 0.499138 14.9155 0.499393 14.9818V18.9974C0.499142 19.0634 0.511945 19.1287 0.537081 19.1898C0.562218 19.2508 0.599187 19.3062 0.645849 19.3529C0.69251 19.3995 0.747929 19.4365 0.808943 19.4616C0.869957 19.4868 0.935345 19.4996 1.00133 19.4993H6.99843C7.03957 19.4995 7.08056 19.4945 7.12049 19.4846L8.99941 19.0129L10.8783 19.4846C10.9179 19.4944 10.9586 19.4994 10.9994 19.4993H26.9995C27.0652 19.4992 27.1303 19.4861 27.1909 19.4608C27.2516 19.4355 27.3067 19.3984 27.353 19.3518C27.3994 19.3052 27.4361 19.2499 27.461 19.1891C27.486 19.1283 27.4987 19.0631 27.4985 18.9974V14.9818C27.4987 14.9158 27.4859 14.8504 27.4608 14.7894C27.4356 14.7284 27.3987 14.6729 27.352 14.6263C27.3053 14.5796 27.2499 14.5426 27.1889 14.5175C27.1279 14.4924 27.0625 14.4795 26.9965 14.4798L26.4945 14.4838C26.0517 14.487 25.657 14.3004 25.3842 14.0004H31.0014C31.134 13.9998 31.261 13.9467 31.3544 13.8525C31.4478 13.7584 31.4999 13.631 31.4994 13.4984V9.48279C31.4997 9.4168 31.4869 9.35142 31.4618 9.2904C31.4366 9.22939 31.3996 9.17395 31.353 9.12729C31.3063 9.08063 31.2509 9.04367 31.1899 9.01853C31.1289 8.9934 31.0635 8.98058 30.9975 8.98084L30.4995 8.98481C29.6668 8.99085 29.0004 8.33019 29.0004 7.4975V7.00238C29.0004 6.16966 29.6667 5.50916 30.4995 5.51508L30.9975 5.51904C31.0635 5.5193 31.1288 5.50649 31.1899 5.48135C31.2509 5.45622 31.3063 5.41925 31.353 5.37259C31.3996 5.32593 31.4366 5.27049 31.4618 5.20948C31.4869 5.14847 31.4997 5.08308 31.4994 5.01709V1.00147C31.4999 0.868864 31.4478 0.741487 31.3544 0.647356C31.261 0.553224 31.134 0.500045 31.0014 0.499514H15.0004C14.9596 0.499464 14.9189 0.504414 14.8793 0.514254L13.0004 0.983005L11.1215 0.514254C11.0815 0.504337 11.0405 0.499386 10.9994 0.499514H4.9984ZM5.50036 1.49952H10.9369L12.5101 1.89112C12.5026 1.92609 12.4988 1.96178 12.4988 1.99757V2.49952C12.499 2.56519 12.5122 2.63017 12.5376 2.69074C12.5629 2.75132 12.6 2.8063 12.6466 2.85255C12.6932 2.8988 12.7485 2.93542 12.8092 2.9603C12.87 2.98518 12.9351 2.99785 13.0008 2.99757C13.1327 2.99709 13.2591 2.94447 13.3524 2.85117C13.4457 2.75787 13.4983 2.63146 13.4988 2.49952V1.99757C13.4988 1.96211 13.495 1.92675 13.4875 1.8921L15.0597 1.49952H30.4992V4.51808C29.1275 4.51316 28.0002 5.62973 28.0002 7.00245V7.49757C28.0002 8.87027 29.1275 9.98596 30.4992 9.98097V13.0005H24.9992V12.4985C24.9992 11.6678 25.6635 11.0083 26.4943 11.0142L26.9963 11.0181C27.0622 11.0184 27.1276 11.0056 27.1886 10.9804C27.2497 10.9553 27.3051 10.9183 27.3517 10.8717C27.3984 10.825 27.4354 10.7696 27.4605 10.7086C27.4856 10.6476 27.4984 10.5822 27.4982 10.5162V6.50056C27.4984 6.43482 27.4857 6.36968 27.4608 6.30886C27.4358 6.24803 27.3991 6.19273 27.3528 6.14611C27.3064 6.09949 27.2513 6.06246 27.1907 6.03715C27.13 6.01184 27.0649 5.99874 26.9992 5.99861H10.9992C10.9584 5.99856 10.9177 6.00351 10.878 6.01335L8.99915 6.486L7.85752 6.19889C7.51684 5.20555 6.57243 4.51748 5.5001 4.51823L5.50036 1.49952ZM13.0004 3.99854C12.9344 3.99826 12.869 4.01105 12.8079 4.03618C12.7469 4.0613 12.6915 4.09827 12.6448 4.14493C12.5981 4.1916 12.5612 4.24704 12.536 4.30807C12.5109 4.3691 12.4981 4.4345 12.4984 4.50049V5.00244C12.4981 5.06844 12.5109 5.13384 12.536 5.19487C12.5612 5.25589 12.5981 5.31134 12.6448 5.358C12.6915 5.40467 12.7469 5.44163 12.8079 5.46676C12.869 5.49189 12.9344 5.50468 13.0004 5.5044C13.066 5.50416 13.131 5.49099 13.1916 5.46563C13.2521 5.44028 13.3071 5.40323 13.3534 5.35662C13.3997 5.31 13.4362 5.25473 13.4611 5.19396C13.486 5.13319 13.4987 5.06811 13.4984 5.00244V4.50049C13.4987 4.43482 13.486 4.36975 13.4611 4.30898C13.4362 4.2482 13.3997 4.19293 13.3534 4.14632C13.3071 4.0997 13.2521 4.06266 13.1916 4.0373C13.131 4.01194 13.066 3.99877 13.0004 3.99854ZM1.49938 6.99854H6.93591L8.51209 7.39405C8.50472 7.42807 8.50089 7.46276 8.50073 7.49757V7.99952C8.50047 8.06518 8.51315 8.13025 8.53804 8.19101C8.56293 8.25178 8.59955 8.30704 8.6458 8.35365C8.69205 8.40026 8.74703 8.43731 8.8076 8.46267C8.86816 8.48803 8.93311 8.50122 8.99878 8.50148C9.06444 8.50122 9.12942 8.48803 9.18998 8.46267C9.25055 8.43731 9.30553 8.40026 9.35178 8.35365C9.39803 8.30704 9.43462 8.25178 9.45951 8.19101C9.4844 8.13025 9.49708 8.06518 9.49682 7.99952V7.49757C9.49728 7.46283 9.49413 7.42813 9.48739 7.39405L11.0626 6.99854H26.4981V10.0142C25.1261 10.0064 23.9991 11.1261 23.9991 12.4985V13.0005C23.9991 14.373 25.1261 15.4927 26.4981 15.4849V18.4995H11.0626L9.48739 18.105C9.49413 18.0709 9.49728 18.0362 9.49682 18.0015V17.4995C9.49708 17.4338 9.4844 17.3688 9.45951 17.308C9.43462 17.2473 9.39803 17.192 9.35178 17.1454C9.30553 17.0988 9.25055 17.0617 9.18998 17.0364C9.12942 17.011 9.06444 16.9978 8.99878 16.9976C8.93311 16.9978 8.86816 17.011 8.8076 17.0364C8.74703 17.0617 8.69205 17.0988 8.6458 17.1454C8.59955 17.192 8.56293 17.2473 8.53804 17.308C8.51315 17.3688 8.50047 17.4338 8.50073 17.4995V18.0015C8.50089 18.0363 8.50472 18.071 8.51209 18.105L6.93591 18.4995H1.49938V15.481C2.86738 15.484 3.99059 14.37 3.99059 13.0005V12.4985C3.99059 11.129 2.86738 10.0152 1.49938 10.0181V6.99854ZM8.99938 9.49756C8.93372 9.49782 8.86877 9.51101 8.8082 9.53637C8.74764 9.56174 8.69265 9.59878 8.64641 9.64539C8.60016 9.692 8.56354 9.74727 8.53865 9.80803C8.51376 9.86879 8.50108 9.93386 8.50133 9.99952V10.5015C8.50108 10.5671 8.51376 10.6322 8.53865 10.693C8.56354 10.7537 8.60016 10.809 8.64641 10.8556C8.69265 10.9022 8.74764 10.9393 8.8082 10.9646C8.86877 10.99 8.93372 11.0032 8.99938 11.0034C9.06504 11.0032 9.13002 10.99 9.19059 10.9646C9.25115 10.9393 9.30614 10.9022 9.35238 10.8556C9.39863 10.809 9.43522 10.7537 9.46011 10.693C9.485 10.6322 9.49768 10.5671 9.49743 10.5015V9.99952C9.49768 9.93386 9.485 9.86879 9.46011 9.80803C9.43522 9.74727 9.39863 9.692 9.35238 9.64539C9.30614 9.59878 9.25115 9.56174 9.19059 9.53637C9.13002 9.51101 9.06504 9.49782 8.99938 9.49756ZM8.99938 12.0005C8.86745 12.001 8.74108 12.0536 8.64779 12.1469C8.5545 12.2402 8.50185 12.3666 8.50133 12.4985V13.0044C8.50185 13.1363 8.5545 13.2627 8.64779 13.356C8.74108 13.4493 8.86745 13.5019 8.99938 13.5024C9.13131 13.5019 9.25771 13.4493 9.351 13.356C9.44429 13.2627 9.49691 13.1363 9.49743 13.0044V12.4985C9.49691 12.3666 9.44429 12.2402 9.351 12.1469C9.25771 12.0536 9.13131 12.001 8.99938 12.0005ZM8.99938 14.4985C8.93372 14.4988 8.86877 14.512 8.8082 14.5373C8.74764 14.5627 8.69265 14.5998 8.64641 14.6464C8.60016 14.693 8.56354 14.7482 8.53865 14.809C8.51376 14.8698 8.50108 14.9348 8.50133 15.0005V15.5024C8.50159 15.6345 8.55412 15.7612 8.64744 15.8547C8.74076 15.9482 8.86728 16.001 8.99938 16.0015C9.13148 16.001 9.25803 15.9482 9.35135 15.8547C9.44466 15.7612 9.49717 15.6345 9.49743 15.5024V15.0005C9.49768 14.9348 9.485 14.8698 9.46011 14.809C9.43522 14.7482 9.39863 14.693 9.35238 14.6464C9.30614 14.5998 9.25115 14.5627 9.19059 14.5373C9.13002 14.512 9.06504 14.4988 8.99938 14.4985Z"
                    fill="#ECC62D"
                  />
                </svg>
              </div>
              <div className="subfooter_third_second">Promocodes</div>
            </div>
            <div className="subfooter_forth">
              Copyright 2024-25 <span>Clan business</span>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------------- footer section end -------------------------------------> */}
    </>
  );
}
