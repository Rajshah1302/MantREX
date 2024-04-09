import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Business from "./Business";

const Hero = () => {
  return (
    <div>
      <section id="home" className={`flex md:flex-row flex-col`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1
              className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] mt-[-10px]"
              style={{
                animationName: "slideIn",
                animationDuration: "1s",
              }}
            >
              Transforming Assets
              <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Into</span>{" "}
            </h1>

            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1
            className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
            style={{
              animationName: "slideIn",
              animationDuration: "1s",
            }}
          >
            Digital Reality
          </h1>
        </div>
        {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative sectionPic`} id="sectionPic" style={{ animation: 'bounce 15s infinite' }}>
  <img src="./hero-image.png" alt="" />
</div> */}

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
            style={{
              animation: "upDown 2s ease infinite",
            }}
          />

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          {/* <GetStarted /> */}
        </div>
      </section>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
        </div>
      </div>
    </div>
  );
};

export default Hero;
