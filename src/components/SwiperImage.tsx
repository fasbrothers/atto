import React, { useEffect } from "react";
const Image_1 = "https://media.istockphoto.com/id/1302436594/video/loading-circle-icon-animation-on-white-background-4k-video-loopable-preloader.jpg?s=640x640&k=20&c=JQzv8UsXNfUnqQSULYW8B858UOM2O5CoXRgG9a0hRFk=";
const BrokenImage =
  "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png";

interface Props {
  image: string;
  id: number;
}

const defaultImage:Record<"Loading" | "Error" | "Loaded", string> = {
  Loading : Image_1,
  Error : BrokenImage,
  Loaded: ""
}

function SwiperImage({ image, id }: Props) {
  const [currentState, setCurrentState] = React.useState<keyof typeof defaultImage>("Loading");

  useEffect(()=>{
    const imageNew = new Image();
    imageNew.src = image;
    imageNew.onload = () => {
      setCurrentState("Loaded");
    };
    imageNew.onerror = () => {
      setCurrentState("Error");
    };
  }, [image])

  return (
    <div key={id}>
      <img
        className="w-full h-[250px] max-[768px]:h-[350px] md:h-[450px] object-cover"
        src={defaultImage[currentState] || image}
        alt=""
      />
    </div>
  );
}

export default SwiperImage;
