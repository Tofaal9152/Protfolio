import Image from "next/image";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Feedback = () => {
  const hackathonImages = [
    "/hackathon/brachackathon.jpg",
    "/hackathon/leartnathon.jpg",
    "/hackathon/Kuet.jpg",
    "/hackathon/IEEE.jpg",
  ];

  return (
    <section id="testimonials" className="px-4 md:px-10 py-10 space-y-10">
      {/* Hackathon Section */}
      <div>
        <h1 className="heading text-center">
          <span className="text-purple">Hackathon</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {hackathonImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Hackathon ${index + 1}`}
              width={1000}
              height={1000}
              className="rounded-2xl w-full object-cover"
              priority
            />
          ))}
        </div>
      </div>

      {/* Resume Section */}
      <div>
        <h1 className="heading text-center">
          <span className="text-purple">Resume</span>
        </h1>

        <div className="w-full  mt-6">
          <iframe
            title="Resume Folder"
            src="https://drive.google.com/embeddedfolderview?id=163SFJu6pIqHM8Smj0-CfCs3Pko7FdE0s"
           
           className="w-full h-[60vh] md:h-[70vh] rounded-lg"
          />
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30rem] w-full rounded-md relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
