"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useIsMobile } from "../hooks/useMediaQueries";

const ImageCarousel = () => {
  const isMobile = useIsMobile();

  const slidesToShow = isMobile ? 1 : 3;

  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <Box
      className="slider-container"
      sx={(theme) => ({
        "& .slick-dots li button:before": {
          color: theme.palette.text.secondary,
          opacity: 0.7,
        },
        "& .slick-dots li.slick-active button:before": {
          color: theme.palette.text.primary,
          opacity: 1,
        },
      })}
    >
      <Slider {...settings}>
        {[1, 2, 3, 4].map((n) => (
          <Box
            key={n}
            component="img"
            src={`/image${n}.png`}
            alt={`BET105 promotional offer #${n}`}
            loading="lazy"
            sx={{
              objectFit: "cover",
              width: "100%",
              height: { xs: "200px", sm: "250px" },
              borderRadius: 2,
              px: 1,
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
