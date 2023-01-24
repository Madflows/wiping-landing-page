import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <div className="h-[60vh]">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full text-center md:text-left">
          <h2 className="footer__text font-bold md:w-[15%]">Wiping</h2>
          <div className="w-full flex flex-col md:flex-row items-center justify-between my-3">
            <p
              className="text-[#212121] tracking-tighter 
            text-[14px] md:text-[21px] leading-[27px]"
            >
              Dates, Job seekers to HR, and counselors to seekers.
            </p>
            <div className="flex items-center gap-4">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />

              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>

          <div
            className="w-full
            flex flex-col md:flex-row items-center justify-between my-3"
          >
            <p
              className="font-medium md:text-2xl text-[#212121] md:w-[50%]
            text-[14px] md:leading-[27px]
            "
            >
              Find your ideal love mate and that perfect job in{' '}
              <span className="decoration-[#2F80ED] underline">real-time.</span>
            </p>
            <div className="flex flex-col md:text-right mt-4">
              <p>© 2021, Wiping</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;