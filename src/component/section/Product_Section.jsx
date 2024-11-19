import Section from "./Section";
import ProductCard from "../card/ProductCard";
import React from "react";

function Product_Section() {
  const jewelleryItems = [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/ef76/3ffd/620a5f20e2e047151536e4af8a783d15?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZDPb4OJw5ouj6OGD6UNZQ6pe~P~82NU7tMHRuDYpT9UFEkJsABWLxRZ6TkwOx7GydYYDqav4mu8qmHLeUqet7CRLfOEfvt5UFlybss3NTkEfGtBpkScY9yzQ~7dYVTt5R9StvGaqNVQDYGrS8GCdBHUgeQ08wsrbX49NoTqoQORECpDytz19lMLB8zNkSjAGuacY8LZoiupFgXlP89~Hw-klLo8g05Q3Tm2ZD5kIqyHEmCe~sEayLsRA3f4otSqsgUg8Fx3NbNaQW9XnH-T4vM9oA0dd72rYhCg3g8AECdA7vLOO~Q-QQ21PoBegv150LoRPiOf2dQc6dTrnOuKwA__",
      title: "Belts",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/eb8d/1c35/d8ac0cd72ecef4150125991ff0e8ecec?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XRKtggPeqXNMwZFfdCapcd1clJDPRxUZYI9aoz7NKbkfUz9y94mjnS0i5SD0zjngyXMh90-pDgqYw7fKVkCpUvxR5svWMS2TAfM5CydqSQRRYjijD0OREJvAXyxf3rqQ9SKz-Bz-lsObV9GiEiIal5wxXr2fd2f2fROQgryYcvp8Zidei92To8gUIob8~N0bhx5OHdMHiBmnDn9jpiXl1SRqxhi1zEPMzhBi1q18PLtTPab6YMIX9BNqKa73IkZxC~3ypo4WAvfTsZg9AW1vWl~JqpCFodz3HjFw-mrb~eel7eRwuya5-eBh-mZIH4KURjPRaJm8kAbUFB0mAulz5Q__",
      title: "Earrings",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/8e3e/0644/8d7bbc7c024cb1773a1cd7cd39ed8cb4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ChpfMXuQ0rwyeuMQZLeSCl8JKEX4VS5JxznRZAgtMdhfbmGFCr6sSWUVzgeKsXBrhYVdV2LstNb~Hgsr-vfb77DYKDpGjMy9c90BDn01y~rlz2I7GulZKdsa4DipxZW6ujzsczMW6vrQ7ivILZkqtD69bpQLoGmy4wCQuPtwsQdTplJbr6ZXnWc1taeMIvql4a9j67dO1MpGDVXdnEx7iwgGGIKLMA8VDYFXZHpDAWcr3U4rnMxnwMyDQJD55SYgoyJJnPpVZYEi79B3C~ch6SmMUXpDKt~aMAHWN8a1VGRMsvnMFpP3AmGroirDHoDM-3CMZnopdz4nuxvrewLskQ__",
      title: "Watches",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/d94c/bdf2/2432d46c4404e8912f9b49536c21af07?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o1xShgQMvG8l6CPzHikEeqLUx9OJEpUlqrJKgI1lL0CIv6vvzwAOyuLX9IuwyZL~sRk1Ygm2rZPtQvRfGnZGR6Wjd~aeBRuKMrSWD3sYnxiSArVSjMdiuQUesgNebvdmRx3XDwgB4sBWvucHzw4-qhb6KNNId5rb0jtR3jeh7Qp05oDd8CmWVknmjEZysH3QvRsFrPtrSHR3sy8Jrw5M1l4o5MD8vlNn0e~2ZzpOZtefbHbgVIX0Vnd7KCLlySj0qK4Z8gwrTeToOSLvfflblZj2nIUS7Hhynpm6G-3hziBR~kIJSSNIfZf~4itPY1onNtoN~EiPBzVsrmaF-srj2Q__",
      title: "Hand Rings",
    },
  ];
  const clothingitems = [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/4fc6/dfbd/3e650e93317d588bc64def8ddcce143d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWKd-qTCQyWkhwgZtlGVXJ9h3TZ2N8SaQ7c893jqKO18APACXfmhO5ImJoxEyMJgr8M3P11-XXgRkD1qpOBf6zmHqIliAoeoIqMOX~omM4ffbPJT7KepN4xIaOneU57hgMzvOOxXaYm59uwtj61FEKdMi6-r14PqXNfS1nOvHsnOFh4srApkVdG69849iN4xj9IH0YNqgg8c9NSpkE3208UPMNyrgr5L5CMjRgVY--ZMJY0Td2wnGRGU-3lqBcSGy6QTI52flQWfL1k~k89g1DJPwb6fDgn5E5xDvAz-RU2IvR2j0kIJrBluTZXkdwsTos5LCD40mNMPzELOgMeW9w__",
      title: "All Unisex Footwear",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/d10a/45c0/4eb507518051b13500471cd0b176616a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=deSo23ySuer7ezHBZqSh0CC5DK8EvKSZncST6gJy8QNwaTWrOYof25UkCWogHfkEG0IKWIZ-CUbiuL7hPeiHWetdvMukgdwEuOmZdRLoqOl9RfC61iS6Sm733i9GC6XJ~eVJbgjJJTjLmS1ijW2o~cLvpke17RagA3LW0rxjy6GeoyNPhT-DgOr2YsrV-si-0h5P61Kmomm8vXRRB1g7qAmYxxKPCBcOv6b9ur6qCO6rW0~T9taHDFtrP6AMFaI2B6efJH3LRTng5aYTIB0bONV~pxIzRKq~zpBpYBVujheOP8-jNJp9PzWyJp~AwEsSuxgtWbn~OPTlp5~31zchfg__",
      title: "All Sarees",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/77d1/f711/8149d664b662330726dd63dbec0f67c2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gbcm3JsFCm0F1xySTaCSQ4KjyxHAhKEUh-3Jz~XQOEBR7rxp32c78B3mAEqiRol-5L0W1F1UIZoX1e8FLb4KO8EAs7PYdfeo-Iusp08cwCIDuMAFTLAcF5x2xleNs3jBmFCzPT87bjrXWBGnuQ-ZkQKDBt9nmAR9Vf-cW9O-Q1u2OoSgvydzwbFA-FL7s~P00XAitcpfIzIk2rLaMTxFajvoQHjJHVUev30qn1cCxknICOnO4NREDZ~5HhI2wvYzuxDNTyx95M0~GmN2CFk0~yXO7Zsfo2FuaSU9lPnBKTcDpWBOHQHevGAXPA~J-5b-hCIdNrCshZiEaXgq3MEVyg__",
      title: "Bride Lehenga",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/debf/974b/ad6a552bef805de55174a53721e20983?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5oROWGXC~wOjx-Dqbtws~0rjLOKy-JYCofbPYo6rMv~SJmx~6IExFPv4~xsqiTi5RuNbfIUKYWHBfymyeeF0yqXPd9AKWz665JnR9Z0tzY2Kd~mzC4LxpCuswg~8XBgmFtJzL7btns0xEko3~-Z1vPSuxnEp-NV~TE1blT5wgEuMU9err6voNsCtQSGyV3RMpC7FL0EbJpWmAEhzSVcWcywLoL8WGFr0F3vflb-TBBRYbnfypSDTV7ohttLRBfbA0YqFF2Y13Z6TtnJdcjxJkvRXnm6e~NF94FZnd3E~6pFLtZPqtGpRIxx4FT2j5AGxzfuxknDkmelIG6MGScqxA__",
      title: "Kurtis",
    },
  ];
  const homelivingitems = [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/1fd8/af94/db961e92edde8f8b0ec5a208bbf6c9ac?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W08JeIB1KcppXGQzqemtD1c25vMlc6BASkuRROzUFF2CCGQD4zQ83JhhoG9X-0C2mkoVQF7qdWgLM8YOlVnCUGp2A~NuAueMLqvHY7FJz3xgQQonJuEn4UnAKE3XrAFXJ~~EKoVp2EjJu~XuErSsC0LyGtYW9Fo-mJkn33rXi2JNGjbjTeNaCF3XlvYpoGPyTtuuwzjhFwlAKt1c7FDUhpxQUdza9m~yOuNaq1R8mZp-XNqS-xHtCOrItGWrzDuFX3OUOxS0GMIkrFVIXR1KO5mFZQb~NyxWC~YloVTAv3M6ki70J0LyQeTpmP4tc-nOWExknDbP9-7jWBxyJkRWrQ__",
      title: "Showpiece",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/5d22/102c/f7619e3ed091d93c9a5f83c3fbd2acc7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mE8961whdd44ymgFHOXsm1iuPiNcwweg5aU6jyW53I-pD69Yaf9dmREfz9I-q3in7QbIdXvJoUFL9GBEvnAXDGkAKfyen3x2tIaZu~cmZGsoh7mKk9YW9aaonkdtH0SqIyLwXGK0CfxHv265V4oc9G45BQDFUVVaTY26BwrcXrbi~Covd79Y3YHm0ZlkwWWASEbQTkOZlVi4Qn71BQX2HUvkb2XKVxXmutWFQ1FG7a-1TmHVH7ejeYtINwTYsO05STOWI2Ct~hvpYAPyjW56KOPLXzPZLxBVr2XhNjNWQVIg4lcP6GN1VoI~dZkBJMs1EAZ4zZL~JFPKwIf0YFDQDQ__",
      title: "Clock",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/53cb/723d/d684c70f53c7853ffdcaabd92ca5c263?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rn4M9PkasDKHtKTMME1wOVsykBt~oU1D2NIy9mCGpn5J1GJNjDLOdxxdk1438oVPv8YBnP8w2zwmEBfboLmhE72lebMUZAj416N4dQv~iJIgBnBC19qdbYHRdvGR~VH4DoeRSxTquFYqFi0EOU5x1QVDuubaUZalvk~8q2RJNBJNy3oBf9f0ljkeshe9OTLp9-Cp1UNvCwIQ9iNXD3SMEsZ6cD~MMmMB2z~-MPBcRLnJpcg~rcmaZk~qlbInUntQR9WA1d5XXT~g66pdWgCANYdmBzbiPsAdtlNTeXOrBMLb2sp0Xe9b3HQ6~tnTkoVO3--wWEnHLvrUY4HPOQOH~Q__",
      title: "Handicrafts",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/5d22/102c/f7619e3ed091d93c9a5f83c3fbd2acc7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mE8961whdd44ymgFHOXsm1iuPiNcwweg5aU6jyW53I-pD69Yaf9dmREfz9I-q3in7QbIdXvJoUFL9GBEvnAXDGkAKfyen3x2tIaZu~cmZGsoh7mKk9YW9aaonkdtH0SqIyLwXGK0CfxHv265V4oc9G45BQDFUVVaTY26BwrcXrbi~Covd79Y3YHm0ZlkwWWASEbQTkOZlVi4Qn71BQX2HUvkb2XKVxXmutWFQ1FG7a-1TmHVH7ejeYtINwTYsO05STOWI2Ct~hvpYAPyjW56KOPLXzPZLxBVr2XhNjNWQVIg4lcP6GN1VoI~dZkBJMs1EAZ4zZL~JFPKwIf0YFDQDQ__",
      title: "Cookware",
    },
  ];

  const products = [
    {
      title: "Pure Banarasi Silk Saree",
      originalPrice: "1280",
      discountedPrice: "780",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/820f/83f7/e192ed33e4d08af0533795d099117d59?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Unr4l3HZVDDsRvhXXW67JJmb8TjN0-xKFi8dhGNtuvR7iaCsU1g8JOuRbUWwKGrvck~9BOypaa6ziM-mzhkFdYDBHaazBOGfaPDao11E2HZyX9fN87jMm9bdJJQVo0uGsn5Rv9szd0pc2UD65fSxWFjHz7ZcU3-zKn6oNq23DedtvjAA7wQtVX52GrpqQ2vl9C4vzcNkGN6DvtOpsoZ6s2iLeGwwrkW31O14dr5-CTf8sCBhwPvd73r7-~6Fr46ofEHSSNL6WCKP5wzngdTX5E-AGSAnc7tpNX556nDRmd-feTAqToUaXyaJWGDggXjss2D84IKHddJaiGnfloFbBw__",
      altText: "Pure Banarasi Silk Saree",
    },
    {
      title: "Shree Ram Lalla Idol Ayodhya Murti",
      originalPrice: "1599",
      discountedPrice: "499",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/4776/6065/80979ff98e4f9d36214a18cf658ef267?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Np0cBwFU6ru4bjR~9Vqj4~I95OO4wkOqk2jXjGstNoh-FSutOyl2dmxWCb-oNtaO3KFuggUGgRtJGEtmthcRc1Tk3k-OZ1jVKU-IuH1i8g8FwQzWEcK6SgLevzGFrDBPErcNIxOVbVUSZcDlzh6c6hPzoQD5w74H0fIsxIz7bUVQVkAFn5RFfqVKutJ1B1wnN-QfedPTTGrNG~5Twy4QOE0d7YxMl1L7s1n7J1Y2Mxx2jPU2LByhB76828xHoscIJWm0gpmYWjZtsAjmdcZ7VUPisJ9T3k8KE663W3bGgrggtXlTlRmI4RUFBRmWEoFeIK27Ii7hqGylCnZwGOx8bg__",
      altText: "Shree Ram Lalla Idol Ayodhya Murti",
    },
    {
      title: "Handmade Macrame Basket set of 3 Storage Box",
      originalPrice: "1999",
      discountedPrice: "1299",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/b3dc/f986/2ded47f08709a3576aa3389ae7c0b9a2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9W~So05fZTD-d-Y5BhSPwtBZXRFONDmwvYkzfKNzOGWt1Q7vx75ERUHxZBSo3NXl-LguGyiI0Zax2-2MBSQLphKZ64nk~uCo1B35BVI-R0ec7N-HxflQ~Hl6l80haTIHNzrWdBKr2~TA2zLsh4e~z22v-uauXVe1MRTXGO-n-HmYoSJcBBUX3GADvu1BvGdofaEx6~08MiAWMd08HlP9byiDpVU~p69PQ6S6BLardFJfvc8hJwfeZ49o8kVixIXwZ4CmLZi~D-1F0BBxNR-InebvkN9RIVoPCWYYZ4Ti15kR3zEY5xyOEvIXIfbjuQxdS~oYCRa-Fs9Ub7uCg~XYw__",
      altText: "Handmade Macrame Basket set",
    },
    {
      title: "Carved Feather Shaped Wall Décor Decorative MDF Tray",
      originalPrice: "1999",
      discountedPrice: "1299",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/a591/7290/2a3d297fb4a0a2a577cb13e1d6a5b767?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2Rw7o4x-SvrGSdo4OKljqMafhLBfB2Z1vTHxu9VaH~owj4LFHk0UqHSJAy1EX50zbdAVhe8w9iktRhMgZEU4Hewjn0EVgaiMOdmARUQVxbRonQ5D3FPONP6SHntCXAY~S9zVe1VDrR1z3V1sf9eRWC7n9pQXW8iFi4uoEms0YCDBbOxDbI3bC8Dd5SyXjrnCW6crU9P08LivSTrBGEnkiYm-4fWWehKZOELO-LmoKt-~m47VU5LWVdEYA5qhBpXa8~sHWVCqrw60NVdO15NbjBABjOcarnb-DKH4wBB1j6iBdy2u4JZVrlA6Xxm6cbv9h8Ilkw5l-86wZnBBhjeoQ__",
      altText: "Carved Feather Shaped Wall Décor",
    },
  ];
  const handmadeitem = [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/eb9b/fe9a/e2bf1b5e89629103922679f180eac167?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dqSK5K~0HLRupvNDEupOJ20B8LNWw1hBYAZulut6wqu8ujmCd6JqznsH8vQsP98xwxP-OvJ6z5SSzwqfr0VutY2eBBgKl027FAYI~uDcOXG4xux~zn~Hz5E2V6YmFbKeO8WnFCYgo6pWeEV3K75TUOppVk1IwRMd06iozf4mjRZUhht34SoIqAoNKpt79SBWBGXHoukSaz3aQKYuEKDEIplOZROyV9jwri--BtdLrWN2GfRCoMeV-qfu-dgb65X~sH0-d8uLjvpGx-mphXJBNwKpugZZ7QIbM7eyAwm-jX9BPZyhXVdOXb0E78KbnN3CEJvkktkqWwC4XeAKKmJO-w__",
      title: "Handbags",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/164c/c1b8/7882aa78097eff872cfa44b03e36196e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fd6eifb3z8hlnMJuB1hIc0Sgc~F04XEUWV25BQ4Dz0IA2XO5x1gtL6DDaVL2quL1GqOJIUUUprrS8qnFLn3vmUVuWod7Cf9CPNMx8K0kzA9VU01QYjFxWJVtrzK7D~0YoNTvVNnKv1dhwWg4Wp8ON2Ae3oEjjXNHj44PAXI-k0cHZG0Qoqimrsj88rz-DkiAqK6a2yItRxe-s2WaNVwOXVKVQOORyaaHgiEBeqt0GbJmyQAybqa2slAqxqbpfnVf8QAlTecD9JmnA5CLKiWDUdJKMYS3-HFUSt-yEUqgxLBMILoYFUffmIzfp2JFy1tDBDt75YPea5Qi22HBTlYijw__",
      title: "Wallets",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/fc8a/bfcd/b8bd6f15f3cb1bb642a49cb4e2dca394?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RbbksQ2aTMc18KGNeuk5lKjZsVnLevS4ml~eEJb1iIVbxCDqDAgMuR~zwbspg6Gbzy7zg~C3C6rKMWb543mGHfLMAjfY4Ai4SXk-7REpwRBiuZRrDW-vSgGy3MSlHCP8e5vMpbVFkfKNhDuhx911PqDikJAwv~-o-qMjPsSYslR2Alwd2ZNC6ikGmqmUjTFEO4MVXTlcoiiCHJ9~nit5D1O88V7Cw0ByXlWlNex3lnkEj-cqzw-w~m9xYaXAJhuM6C22jql5S8PPqdjJt1IOSF9PE9vvTTBkbTfYua~q-n8UuhvR~Myi1bXNgR5BBxS25RK0UuspBwjLkjbFnGk7ZQ__",
      title: "Baranasi Saree",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/d54f/679d/70bea9e3f51f9a6f56cf56455985d2d5?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bZlHfINYFflNLkHwMuPU9DuA0hwmT55jXtvUQvErFcgdccrlP7v-Qxt9JAJv~lCh-b6AfS5V6VMp3zdnddBXx0uaTMXrPnoedQJVjV4r0ewKAqTtoRXdoTeVFBSxy-NKJseqEC5jQhL2JTJv6qk5Bf3Cq3nF3JrwG7jrTLlll6E8rM9gasCtY2oZbVhQbesNFrh38TkxR6IWsjV8QkFb4cG3RJ1wnZwnsMwZQoVNEwCWOjGJpGcnOU~YqVi2ArHaAIswWbXcMLiiL-Oe5rPpVAXkB0v4VzGflWwf4YlBfBWNAYWcj1IMS~jkVX6ngLl6sNiFWjjYxvmJnqFQoUePMA__",
      title: "Bag’s",
    },
  ];

  return (
    <div>
      <div className="section_first">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="sectionfirst_left">
                <div className="row">
                  <div className="col-md-6">
                    <Section
                      title="Jewellery & Accessories"
                      items={jewelleryItems}
                    />
                  </div>
                  <div className="col-md-6">
                    <Section title="Clothing & Shoes" items={clothingitems} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Section
                      title="Home & Living | Up to 12% off"
                      items={homelivingitems}
                    />
                  </div>
                  <div className="col-md-6">
                    <Section
                      title="Handmade Products | Flat 20% off"
                      items={handmadeitem}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="sectionfirst_right">
                <div className="sectionfirst_right_title">Latest Products</div>
                <div className="row">
                  {products.map((product, index) => (
                    <ProductCard
                      key={index}
                      title={product.title}
                      originalPrice={product.originalPrice}
                      discountedPrice={product.discountedPrice}
                      imageSrc={product.imageSrc}
                      altText={product.altText}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Section;
