import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="p-4 w-3/5 mx-auto">
      <div className="flex gap-10 items-center">
        <div>
          {/* <Image
            className=""
            src={"/hexagon.svg"}
            width={800}
            height={800}
            alt="hexagon"
          /> */}

          <Image
            src={"/Profile/profilePic.png"}
            width={500}
            height={500}
            alt="profilePic"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">
            About <span className="text-primary">Me</span>
          </h1>
          <h1 className="text-xl font-bold mb-4">Full Stack Developer!</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra augue. Sed non mauris vitae erat consequat
            auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
