import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl my-8 font-bold">
        Latest <span className="text-primary">Projects</span>
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
