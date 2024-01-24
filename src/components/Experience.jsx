import UpworkComponent from "./icons/UpworkIcon";
const data = [
  {
    upwork: <UpworkComponent />,
    head: "Sr. Frontend Developer",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    text3: "Sed quis justo ac magna.",
    text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Nov 2021-present",
  },
  {
    upwork: <UpworkComponent />,
    head: "Team Lead",
    text1: "Sed quis justo ac magna.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text3: "Sed quis justo ac magna.",
    text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Jul 2017 - Oct 2021",
  },
  {
    upwork: <UpworkComponent />,
    head: "Full Stack Developer",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "Nov 2021-present",
  },
];
export default function Experience() {
  return (
    <div className="flex py-24 px-20 justify-center items-center bg-gray-50">
      <div className="flex flex-col items-center px-8  gap-12 self-stretch">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <h3 className="flex py-1 px-5 justify-center items-center rounded-xl bg-slate-200">
            Experience
          </h3>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="flex items-start gap-12 flex-col">
          {data.map((e) => (
            <div className="flex w-[896px] px-8 py-8 flex-col items-start rounded-xl bg-white">
              <div className="flex items-start gap-12 self-stretch">
                <div className=" w-[206px]">{e.upwork}</div>
                <div className="flex w-[385px] flex-col items-start gap-4">
                  <h3 className="w-full">{e.head}</h3>
                  <div>
                    <p>{e.text1}</p>
                    <p>{e.text2}</p>
                    <p>{e.text3}</p>
                    <p>{e.text4}</p>
                  </div>
                </div>
                <div className=" ">
                  <p>{e.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
