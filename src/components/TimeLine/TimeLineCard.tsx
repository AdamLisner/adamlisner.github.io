import type { ExperienceRecord } from "./Timeline";

interface Props {
    index: number;
    job: ExperienceRecord;
}
export const TimeLineCard = ({index, job} : Props)=> {
    return (
        <div key={index} className="pl-16 relative">

              <div className="absolute left-4 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-white/30 border-2 border-[#006FEE] shadow-lg">
                <div className="absolute inset-0 rounded-full bg-[#006FEE] blur-sm animate-pulse"></div>
              </div>
              <div className="z-10 text-white p-8 rounded-3xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 text-left">
                     <div className="flex items-center gap-3 m-2 pr-2">
                      {job.logo && (
                        <img
                          src={job.logo}
                          className="w-8 h-8 object-contain flex-shrink-0"
                        />
                        
                      )}
                    <h4 className="text-xl font-bold text-white drop-shadow-md">
                      {job.company}
                    </h4>
                    </div>

                    <p className="text-blue-200 font-light mt-1">{job.title}</p>
                    <p className="text-white/50 text-sm mt-2">{job.dates}</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-white/80 mb-6 font-light">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {job.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white/20 text-blue-100 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}