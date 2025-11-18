import Image from "../Common/Image"
import heroImage1 from "../../assets/images/hero-image-1.webp"
import heroImage2 from "../../assets/images/hero-image-2.webp"
import heroImage3 from "../../assets/images/hero-image-3.webp"
import heroImage4 from "../../assets/images/hero-image-4.webp"
import heroImage5 from "../../assets/images/hero-image-5.webp"
import heroImage6 from "../../assets/images/hero-image-6.webp"
import heroImage7 from "../../assets/images/hero-image-7.webp"

const HeroSection = () => {
    return (
        <div className="grid grid-cols-12 grid-rows-24 place-content-center  max-h-screen">
            <h1 className="text-[clamp(2rem,20vw,4rem)] font-medium col-start-4  col-span-6 row-start-4 self-start">
                Discover ideas worth saving
            </h1>
            <Image
                className="col-start-2 row-start-3"
                src={heroImage1}
                alt=""
            />
            <Image
                className="col-start-3 row-start-5 "
                src={heroImage2}
                alt=""
            />
            <Image
                className="col-start-4 row-start-7"
                src={heroImage3}
                alt=""
            />
            <Image
                className="col-start-5 row-start-7"
                src={heroImage4}
                alt=""
            />
            <Image
                className="col-start-5 row-start-10"
                src={heroImage5}
                alt=""
            />
            <Image
                className="col-start-8 row-start-7"
                src={heroImage6}
                alt=""
            />
            <Image
                className="col-start-8 row-start-10"
                src={heroImage7}
                alt=""
            />
            <Image
                className="col-start-11 row-start-3"
                src={heroImage1}
                alt=""
            />
            <Image
                className="col-start-10 row-start-5 "
                src={heroImage2}
                alt=""
            />
            <Image
                className="col-start-9 row-start-7"
                src={heroImage3}
                alt=""
            />
        </div>
    )
}
export default HeroSection
