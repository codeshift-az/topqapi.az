// Component Image

import sliderImg from "@/assets/images/aboutUs/about-banner-01.jpg"

const AboutBanner=()=>{


return(

    <section className="tf-slideshow about-us-page position-relative">
    <div className="banner-wrapper">
        <img className="lazyload" src={sliderImg}  alt="image-collection"/>
        <div className="box-content text-center">
            <div className="container">
                <div className="text text-white">Empowering women to achieve <br className="d-xl-block d-none"/> fitness goals with style</div>
            </div>
        </div>
    </div>
</section>
)

}
export default AboutBanner;