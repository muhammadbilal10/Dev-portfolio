import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  ChevronsRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const socials = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/bilalsaddique09/?hl=en",
      icon: <Instagram />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/muhammad-bilal-9b6b9a1b3/",
      icon: <Linkedin />,
    },
    {
      name: "Github",
      link: "",
      icon: <Github />,
    },
    {
      name: "Twitter",
      link: "",
      icon: <Twitter />,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center gap-10">
        <div className="flex-1 flex flex-col gap-10 ">
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
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hi, I'm <span className="text-primary">Muhammad Bilal</span>
          </h1>
          <p className="mt-4 text-gray-500">Full Stack developer</p>
          <p className="mt-8 text-gray-700">
            I am a passionate and creative developer who loves to build web
            applications using modern technologies. I enjoy learning new skills
            and exploring new challenges.
          </p>
          <Button className="mt-8">
            Get in touch
            <ChevronsRight className="ml-2" />
          </Button>
        </div>

        <div>
          <Image
            src="/Profile/profile.svg"
            alt="Profile Picture"
            width={350}
            height={350}
          />
        </div>
      </div>
    </main>
  );
}
