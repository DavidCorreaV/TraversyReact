import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Spinner from "./Spinner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

const Slider = () => {
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState(null);
  const navigation = useNavigate();
  useEffect(() => {
    const fetchListing = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);

      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({ id: doc.id, data: doc.data() });
      });
      setListing(listings);
      setLoading(false);
    };
    fetchListing();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (listing.length === 0) {
    return <></>;
  }
  return (
    listing && (
      <>
        <p className="exploreHeading">Recommended Places</p>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
        >
          {listing.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigation(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  height: "300px",
                  background: `url(${data.imgUrls[0]}}) center/cover no-repeat`,
                }}
                className="swiperSlideDiv"
              >
                <p className="swiperSlideText">{data.name}</p>
                <p className="swiperSlidePrice">
                  ${data.discountedPrice ?? data.regularPrice}
                  {data.type === "rent" && " per Month"}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </>
    )
  );
};

export default Slider;
