import NextComponent from "./icons/NextJsIcon";
import NodeComponent from "./icons/NodeJsIcon";
import PostgreSQLComponent from "./icons/PostgreSQLIcon";
import Reactcomponent from "./icons/ReactIcon";
import {
  CypressIcon,
  ExpressJsIcon,
  FigmaIcon,
  GitIcon,
  JavascriptIcon,
  MongoDBIcon,
  NestIcon,
  ScssIcon,
  SocketIoIcon,
  StorybookIcon,
  TailwindIcon,
  TypescriptIcon,
} from "./icons/icon";
const iconData = [
  {
    icon: <JavascriptIcon />,
    name: "Javascipt",
  },
  {
    icon: <TypescriptIcon />,
    name: "Typescript",
  },
  {
    icon: <Reactcomponent />,
    name: "React",
  },
  {
    icon: <NextComponent />,
    name: "Next",
  },
  {
    icon: <NodeComponent />,
    name: "Node.js",
  },
  {
    icon: <ExpressJsIcon />,
    name: "Express.js",
  },
  {
    icon: <NestIcon />,
    name: "Nest.js",
  },
  {
    icon: <SocketIoIcon />,
    name: "Socket.io",
  },
  {
    icon: <PostgreSQLComponent />,
    name: "PostgreSQl",
  },
  {
    icon: <MongoDBIcon />,
    name: "MongoDB",
  },
  {
    icon: <ScssIcon />,
    name: "Sass/Scss",
  },
  {
    icon: <TailwindIcon />,
    name: "Tailwindcss",
  },
  {
    icon: <FigmaIcon />,
    name: "Figma",
  },
  {
    icon: <CypressIcon />,
    name: "Cypress",
  },
  {
    icon: <StorybookIcon />,
    name: "Storybook",
  },
  {
    icon: <GitIcon />,
    name: "Git",
  },
];

export default function Skills() {
  return (
    <div className="flex px-[80px] py-24 flex-col justify-center items-center self-stretch max-w-[1440px]">
      <div className="flex px-8 flex-col items-start gap-12 self-stretch">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <h3 className="">Skills</h3>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="flex flex-col items-start gap-12 self-stretch">
          <div className="flex flex-wrap  justify-between items-center self-stretch gap-y-10 gap-x-12 ">
            {iconData.map((e) => (
              <div className=" flex flex-col justify-center items-center text-center m-auto ">
                {e.icon}
                {e.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
