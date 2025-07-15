import { appProjects, webProjects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <h1 className="heading mt-12">
        <span className="text-purple">(WebSite)</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-16 mt-4">
        {webProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[32.5rem] sm:w-96 w-[80vw] flex items-center justify-center"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Link href={item.link} className="">
                    <Image
                      width={1000}
                      height={1000}
                      src={item.img}
                      alt={item.title}
                      className="object-cover w-full h-full rounded-xl aspect-video"
                    />
                  </Link>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                <a href={item.link}>{item.title}</a>
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                <a href={item.link}>{item.des}</a>
              </p>
            </PinContainer>
          </div>
        ))}
      </div>
      <h1 className="heading mt-12">
        <span className="text-purple">(App)</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-16 mt-4">
        {appProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[32.5rem] sm:w-96 w-[80vw] flex items-center justify-center"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Link href={item.link} className="">
                    <Image
                      width={1000}
                      height={1000}
                      src={item.img}
                      alt={item.title}
                      className="object-cover w-full h-full rounded-xl aspect-square"
                    />
                  </Link>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                <a href={item.link}>{item.title}</a>
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                <a href={item.link}>{item.des}</a>
              </p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
