import {
  CypressIcon,
  ExpressJsIcon,
  FigmaIcon,
  GitIcon,
  JavascriptIcon,
  MongoDBIcon,
  NestIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgreSQlIcon,
  ReactIcon,
  ScssIcon,
  SocketIoIcon,
  StorybookIcon,
  TailwindIcon,
  TwitterIcon,
  TypescriptIcon,
} from "./icons/icon";

export default function Skills() {
  return (
    <div>
      <div>
        <div>
          <h3>Skills</h3>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div>
          <TypescriptIcon />
          <TwitterIcon />
          {/* <TailwindIcon /> */}
          <StorybookIcon />
          <SocketIoIcon />
          <ScssIcon />
          {/* <ReactIcon /> */}
          {/* <NodeJsIcon /> */}
          {/* <NextJsIcon /> */}
          {/* <NestIcon /> */}
        </div>
      </div>
    </div>
  );
}
