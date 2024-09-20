/**
 * @copyright 2024 James Boac
 * @license Apache-2.0
 */

import pic from '../assets/pic.png';
import pic1 from '../assets/pic1.jpg';
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="md:mb-11">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src={pic1}
                alt="pic"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Hi, My name is James Boac
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download Resume" icon="download" />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure>
            <img
              src={pic}
              alt="pic"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
