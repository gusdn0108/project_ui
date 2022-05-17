import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSilder = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

  return (
    <div style={{ marginTop: 100 }}>
    <h2> Single Item</h2>
    <Slider {...settings}>
        {[<img src="https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg" alt="" />, 
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg" alt="" />, 
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(135).jpg" alt="" />,
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(136).jpg" alt="" />, 
        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" alt="" />, ].map((item, index) => {
            return <div key={index}>{item}</div>
        })}
    </Slider>
</div>

  )
}

export default ImageSilder