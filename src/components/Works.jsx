import { DownloadIcon } from "./icons/icon";

const workData = [
  {
    header: "Fiskill",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",

    icon: <DownloadIcon />,
  },
  {
    header: "Fiskill",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",

    icon: <DownloadIcon />,
  },
  {
    header: "Fiskill",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",

    icon: <DownloadIcon />,
  },
];
const tag = [
  { tag: "React" },
  { tag: "Next.js" },
  { tag: "Typescript" },
  { tag: "Nest.js" },
  { tag: "PostgreSQL" },
  { tag: "Tailwindcss" },
  { tag: "Figma" },
  { tag: "Cypress" },
  { tag: "Storybook" },
  { tag: "Git" },
];
export default function Work() {
  return (
    <div className="flex px-20 py-24 flex-col items-center justify-center">
      <div className=" flex px-8 flex-col justify-center items-center gap-12">
        <div>
          <h3>Work</h3>
          <p>Some of the noteworthy projects I have built:</p>
        </div>
        <div>
          {workData.map((e) => (
            <div className=" ">
              <img src="/images/Picture.jpg" className="w-[280px] h-[320px]" />
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
