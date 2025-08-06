import { TimeLineCard } from "./TimeLineCard";

export interface ExperienceRecord {
  company: string;
  logo?: string; // Optional logo URL
  title: string;
  dates: string;
  description: string;
  technologies: string[];
}

interface Props {
  title: string;
  experience: ExperienceRecord[];
}

export const TimeLine = ({ title, experience }: Props) => {
  return (
    <div className="container mx-auto px-6 py-10">
     <div className="flex items-center justify-center mb-16">
        <div className="flex-grow border-t border-white/20"></div>
        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg mx-8 flex-shrink-0">
          {title}
        </h2>
        <div className="flex-grow border-t border-white/20"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
       
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/10"></div>

        <div className="flex flex-col gap-12">
          {experience.map((job, index) => (
            <TimeLineCard index={index} job={job} key={index} />            
          ))}
        </div>
      </div>
    </div>
  );
};
