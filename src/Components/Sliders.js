import { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import img1 from "../images/ac.jpg";
import img2 from "../images/fridge.jpg";
import img3 from "../images/microwave.jpg";
import img4 from "../images/wash.jpg";

export default function Sliders() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://uploads.codesandbox.io/uploads/user/bf150887-1b84-4fc5-9c07-9edbc4193892/jv67-slide1.jpg",
    "https://uploads.codesandbox.io/uploads/user/bf150887-1b84-4fc5-9c07-9edbc4193892/fxIR-slide2.jpg",
    "https://uploads.codesandbox.io/uploads/user/bf150887-1b84-4fc5-9c07-9edbc4193892/SOy1-slide3.jpg",
    "https://uploads.codesandbox.io/uploads/user/bf150887-1b84-4fc5-9c07-9edbc4193892/Pz_H-slide4.jpg",
    "https://uploads.codesandbox.io/uploads/user/bf150887-1b84-4fc5-9c07-9edbc4193892/kcwi-slide5.jpg",
    "https://uploads.codesandbox.io/uploads/user/bf150887-1b84-4fc5-9c07-9edbc4193892/mhtg-slide6.jpg",
    "https://uploads.codesandbox.io/uploads/user/bf150887-1b84-4fc5-9c07-9edbc4193892/OW6m-slide7.jpg",
  ];

  function leftClick() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  function rightClick() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <>
      <div className="sliders">
        <div className="image-div">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <div className="leftSlide" onClick={leftClick}>
            <ArrowBackIosNewIcon className="icon-arrow" />
          </div>
          <div className="rightSlide" onClick={rightClick}>
            <ArrowForwardIosIcon className="icon-arrow" />
          </div>
        </div>
      </div>

      <div className="slider-content">
        <div className="slider-content1">
          <div className="content-header">
            <span>Appliances for your home | Up to 55% off</span>
          </div>
          <div className="content-body">
            <div className="image-container1">
              <div className="img-sub1">
                <img src={img1} />
              </div>
              <div className="img-sub2">Air Conditioners</div>
            </div>
            <div className="image-container2">
              <div className="img-sub1">
                <img src={img2} />
              </div>
              <div className="img-sub2">Refrigerators</div>
            </div>
            <div className="image-container1">
              <div className="img-sub1">
                <img src={img3} />
              </div>
              <div className="img-sub2">Microwaves</div>
            </div>
            <div className="image-container2">
              <div className="img-sub1">
                <img src={img4} />
              </div>
              <div className="img-sub2">Washing Machines</div>
            </div>
          </div>
          <div className="content-footer">
            <button>see more</button>
          </div>
        </div>

        <div className="slider-content1">
          <div className="content-header">
            <span>Revamp your home in style</span>
          </div>
          <div className="content-body">
            <div className="image-container1">
              <div className="img-sub1">
                <img src={img1} />
              </div>
              <div className="img-sub2">Cushion covers, bedsheets & more</div>
            </div>
            <div className="image-container2">
              <div className="img-sub1">
                <img src={img2} />
              </div>
              <div className="img-sub2">Figurines, vases & more</div>
            </div>
            <div className="image-container1">
              <div className="img-sub1">
                <img src={img3} />
              </div>
              <div className="img-sub2">Home storage</div>
            </div>
            <div className="image-container2">
              <div className="img-sub1">
                <img src={img4} />
              </div>
              <div className="img-sub2">Lighting solutions</div>
            </div>
          </div>
          <div className="content-footer">
            <button>see more</button>
          </div>
        </div>

        <div className="slider-content1">
          <div className="content-header">
            <span>Starting ₹149 | Headphones</span>
          </div>
          <div className="content-body">
            <div className="image-container1">
              <div className="img-sub1">
                <img src={img1} />
              </div>
              <div className="img-sub2">Starting ₹249 | boAt</div>
            </div>
            <div className="image-container2">
              <div className="img-sub1">
                <img src={img2} />
              </div>
              <div className="img-sub2">Starting ₹349 | boult</div>
            </div>
            <div className="image-container1">
              <div className="img-sub1">
                <img src={img3} />
              </div>
              <div className="img-sub2">Starting ₹649 | Noise</div>
            </div>
            <div className="image-container2">
              <div className="img-sub1">
                <img src={img4} />
              </div>
              <div className="img-sub2">Starting ₹149 | Zebronics</div>
            </div>
          </div>
          <div className="content-footer">
            <button>see more</button>
          </div>
        </div>

        <div className="slider-content1">
          <div className="content-header">
            <span>AppStarting ₹199 | Amazon Brands & more</span>
          </div>
          <div className="content-body">
            <div className="image-container1">
              <div className="img-sub1">
                <img src={img1} />
              </div>
              <div className="img-sub2">Starting ₹199 | Bedsheets</div>
            </div>
            <div className="image-container2">
              <div className="img-sub1">
                <img src={img2} />
              </div>
              <div className="img-sub2">Starting ₹199 | Curtains</div>
            </div>
            <div className="image-container1">
              <div className="img-sub1">
                <img src={img3} />
              </div>
              <div className="img-sub2">
                Minimun 40% off | Ironing board & more
              </div>
            </div>
            <div className="image-container2">
              <div className="img-sub1">
                <img src={img4} />
              </div>
              <div className="img-sub2">Up to 60% off | Home decor</div>
            </div>
          </div>
          <div className="content-footer">
            <button>see more</button>
          </div>
        </div>
      </div>
    </>
  );
}
