import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/constants";
import { ChevronsRight } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <div className="flex md:items-center justify-center gap-10 md:flex-row flex-col">
        <div className="md:mr-20 flex flex-row gap-10 md:flex-col">
          {socials.map((social) => (
            <Link
              href="https://www.instagram.com/bilalsaddique09/?hl=en"
              className="hover:text-primary"
              key={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <div className="w-96">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            Hi, I'm <span className="text-primary">Muhammad</span>
          </h1>
          <p className="mt-4 text-gray-500">Full Stack developer</p>
          <p className="mt-8 text-gray-700">
            I am a passionate and creative developer who loves to build web
            applications using modern technologies. I enjoy learning new skills
            and exploring new challenges.
          </p>
          <Button className="mt-8" asChild>
            <Link href="#contact">
              Get in touch
              <ChevronsRight className="ml-2" />
            </Link>
          </Button>
        </div>

        <div>
          {/* <Image
            src="/Profile/profile.svg"
            alt="Profile Picture"
            width={350}
            height={350}
          /> */}
          <Image
            src="/Profile/profilePic.png"
            alt="Profile Picture"
            width={350}
            height={350}
            className="rounded-bl-[700px] rounded-tl-[700px] rounded-tr-[600px] border-4 w-72 h-72 lg:h-96 lg:w-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
