import { GitHubIcon, LightModeIcon } from "@/components";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-50">
      <div className=" bg-white flex flex-col  items-center w-[1440px] ">
        <div className="flex text-black  justify-between items-center px-20 py-4 w-[1440px] ">
          <h3 className="text-center text-3xl ">SS</h3>
          <div className="flex  gap-10 w-90 ">
            <button>About</button>
            <button>Work</button>
            <button>Testimonials</button>
            <button>Contact</button>
            <div className="flex gap-2">
              <LightModeIcon />
              <button className="flex px-4 py-1 ">Download CV</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-12  w-[1440px] px-20 py-24">
          <div className="flex  flex-col justify-center gap-12 w-full h-full min-w-[384px]">
            <div>
              <h2>Hi, I’m Sagar 👋</h2>
              <p>
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
            <div>
              <h5>Ahmedabad, India</h5>
              <h5>Available for new projects</h5>
            </div>
            <div>
              <GitHubIcon />
            </div>
          </div>
          <div className="flex min-w-[384px] flex-col justify-center items-end self-stretch">
            <img src="/images/FirstPic.jpeg" className="w-[280px] h-[320px]" />
          </div>
        </div>
        <AboutMe />
        <Skills />
        <Experience /> <Works />
      </div>
    </div>
  );
}
