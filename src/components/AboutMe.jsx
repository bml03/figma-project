import { GitHubIcon, LightModeIcon } from "@/components";

export default function AboutMe() {
  return (
    <div className="flex px-20 py-24 justify-between items-start self-stretch w-[1440px]">
      <div className="flex px-8 flex-col items-center gap-12 w-[1440px]">
        <h2 className="flex px-5 py-1 justify-center items-center text-sm ">
          About me
        </h2>
        <div className="flex items-start gap-12 self-stretch w-full">
          <div className="flex  flex-col items-start self-stretch min-w-[444px] w-full h-full">
            <img src="/images/Pic.jpg" className="flex" />
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch w-min-[444px] w-full h-full ">
            <h4 className="text-3xl tracking-[-0.6px] decoration-gray-900">
              Curious about me? Here you have it:
            </h4>
            <div className="flex flex-col items-start gap-4 self-stretch">
              <p className="decoration-gray-600 text-base">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="decoration-gray-600 text-base">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="decoration-gray-600 text-base">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="decoration-gray-600 text-base">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p className="decoration-gray-600 text-base">
                Finally, some quick bits about me
              </p>
              <div className="flex items-start gap-[10px] self-stretch">
                <div className="flex flex-col items-start gap-[10px] w-full">
                  <p className="decoration-gray-600 text-base">
                    B.E. in Computer Engineering
                  </p>
                  <p className="decoration-gray-600 text-base">
                    Full time freelancer
                  </p>
                </div>
                <div className="flex flex-col items-start gap-[10px] w-full">
                  <p className="decoration-gray-600 text-base">Avid learner</p>
                  <p className="decoration-gray-600 text-base">
                    Aspiring indie hacker
                  </p>
                </div>
              </div>
              <p className="text-base decoration-red-900">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
