// Component Image

import aboutCardImg1 from "@/assets/images/aboutUs/collection-69.jpg"

const AboutCard1 = ()=>{
return(
    <section className="flat-spacing-23 flat-image-text-section">
    <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
            <div className="tf-image-wrap">
                <img className="lazyload w-100" src={aboutCardImg1} alt="collection-img"/>
            </div>
            <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
                <div>
                    <div className="heading">Established - 1995</div>
                    <div className="text">
                        Ecomus was founded in 1995 by Jane Smith, a fashion lover with a <br className="d-xl-block d-none"/>
                        passion for timeless style. Jane had always been drawn to classNameic <br className="d-xl-block d-none"/>
                        pieces that could be worn season after season, and she believed that <br className="d-xl-block d-none"/>
                        there was a gap in the market for a store that focused solely on classNameic <br className="d-xl-block d-none"/>
                        women's clothing. She opened the first store in a small town in New <br className="d-xl-block d-none"/>
                        England, where it quickly became a local favorite.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>)




}
export default AboutCard1