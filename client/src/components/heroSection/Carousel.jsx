// import React from "react";
// import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// import Slider from "react-slick";

// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 3000,
//   autoplaySpeed: 4000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// const Carousel = () => {
//   // const [slider, setSlider] = (React.useState < Slider) | (null > null);
//   const top = useBreakpointValue({ base: "90%", md: "50%" });
//   const side = useBreakpointValue({ base: "30%", md: "10px" });

//   const cards = [
//     "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
//     "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
//     "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
//   ];
//   return (
//     <Box
//       position={"relative"}
//       height={"600px"}
//       width={"full"}
//       overflow={"hidden"}
//       borderRadius="5px"
//     >
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       {/* <IconButton
//         aria-label="left-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         // onClick={() => slider?.slickPrev()}
//       >
//         <BiLeftArrowAlt />
//       </IconButton> */}
//       {/* Right Icon */}
//       {/* <IconButton
//         aria-label="right-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         // onClick={() => slider?.slickNext()}
//       >
//         <BiRightArrowAlt />
//       </IconButton> */}
//       {/* Slider */}
//       <Slider
//         {...settings}
//         // ref={(slider) => setSlider(slider)}
//       >
//         {cards.map((url, index) => (
//           <Box
//             key={index}
//             height={"6xl"}
//             w="100%"
//             // borderRadius="5px"
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url(${url})`}
//           />
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null > null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://assets.ajio.com/cms/AJIO/WEB/27022023-UHP-D-MainBanner-P3-ArrowUSPA-upto50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/27022023-UHP-D-MainBanner-P4-WomenWestern-LevisUSPA-Min40.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/27022023-UHP-D-MainBanner-P7-Soigne-RituKumarMasaba-Starting2499.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/27022023-UHP-D-MainBanner-P5-ComfyBottomwear-IvocGilto-Starting599ExtraUpto35.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AppEntryPoint-1440x470.gif",
  ];

  return (
    <Box
      position={"relative"}
      // height={"400px"}
      width={"100%"}
      overflow={"hidden"}
      borderRadius={"3px"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="unstyled"
        color="white"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt fontSize={"25px"} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // colorScheme="messenger"
        variant="unstyled"
        color="white"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt fontSize={"25px"} />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          // <Box
          //   key={index}
          //   height={"6xl"}
          //   position="relative"
          //   backgroundPosition="center"
          //   backgroundRepeat="no-repeat"
          //   backgroundSize="cover"
          //   backgroundImage={`url(${url})`}
          // />
          <Image key={index} src={url} alt="img-slider" h={"auto"} w={"full"} />
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
