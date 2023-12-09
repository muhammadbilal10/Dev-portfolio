import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Brush } from "lucide-react";

interface ServiceCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  icon?: string;
}

const ProjectCard = ({ title, description }: ServiceCardProps) => {
  return (
    <Card
      className={cn(
        "lg:w-[350px] text-center w-[320px] md:w-[300px] shadow-lg"
      )}
    >
      <CardHeader className={cn("items-center")}>
        <Brush size={64} />
        <CardTitle>Graphic Designer</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className={cn("transition-all duration-300")}>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          elit libero, a pharetra augue. Sed non mauris vitae erat consequat
          auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>
      </CardContent>
      <CardFooter className={cn("justify-center")}>
        <Button className={cn("rounded-3xl")}>Read more</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
