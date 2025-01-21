import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  {
    title: "Case title",
    subtitle: "Case sous-titre",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/slide1.jpg", // Replace with your image paths
  },
  {
    title: "Case title",
    subtitle: "Case sous-titre",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/slide2.jpg",
  },
  {
    title: "Case title",
    subtitle: "Case sous-titre",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/slide3.jpg",
  },
  {
    title: "Case title",
    subtitle: "Case sous-titre",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/slide4.jpg",
  },
];

const CustomCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: "orange" }}>
        TITRE
      </Typography>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <Card key={index} sx={{ margin: "0 8px" }}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.subtitle}
            />
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                {item.title}
              </Typography>
              <Typography variant="h6">{item.subtitle}</Typography>
              <Typography variant="body2" color="textSecondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomCarousel;