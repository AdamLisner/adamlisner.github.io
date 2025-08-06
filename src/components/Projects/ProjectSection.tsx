import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  time: string;
  link?: string; // Optional link to the project
  technologies?: string[]; // Optional technologies used
}
interface Props {
  projects: Project[];
}
export const ProjectSection = ({ projects }: Props) => {
  return (
    <section id="projects" className="bg-gray-100 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-gray-400 text-sm mb-12 text-center">
          Something larger that is not really commercial
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              time={project.time}
              link={project.link}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-12 text-center">
        And many more semestral works from high school or university...
      </p>
    </section>
  );
};
