import { LightModeIcon } from "@/components";

export default function Home() {
  return (
    <div className=" bg-white    w-full ">
      <div className="flex text-black  justify-between items-center px-20 py-4">
        <h3 className="text-center text-3xl ">SS</h3>
        <div className="flex  gap-10 w-90">
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
      <div className="flex justify-center">
        <div className="flex max-w-3xl flex-col justify-center gap-12">
          <div>
            <h2>Hi, I’m Sagar 👋</h2>
            <p>
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div>
            <h5>Ahmedabad, India</h5>
            <h5>Available for new projects</h5>
          </div>
          <div></div>
        </div>
        <img src="/images/FirstPic.jpeg" className="h-80 w-72" />
      </div>
    </div>
  );
}
