interface Props {
  title: string;
  description: string;
  time: string;
  link?: string;
  technologies?: string[];
}

export const ProjectCard = ({
  title,
  description,
  time,
  link,
  technologies,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">{time}</p>
          {link && (
            <a
              href={link}
              className="bg-primary-green text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-secondary-green transition-colors duration-300"
            >
              Learn More
            </a>
          )}
        </div>
        {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#6b7280]/20 text-[#6b7280] text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 hover:bg-[#6b7280]/40 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};
