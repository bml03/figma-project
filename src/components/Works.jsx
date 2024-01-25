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
            <div className=" flex">
              <img
                src="/images/Picture.jpg"
                className="flex px-12 py-12 justify-center items-center w-full"
              />
              <div className="flex px-12 py-12 flex-col items-center gap-6">
                <h3>{e.header}</h3>
                <p>{e.content}</p>
                <div>
                  {tag.map((e) => (
                    <div className="flex items-start justify-start">
                      <div className=" ">{e.tag}</div>
                    </div>
                  ))}
                </div>
                <DownloadIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
