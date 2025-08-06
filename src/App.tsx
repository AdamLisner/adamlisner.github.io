import { AboutSection } from "./components/About/AboutSection";
import { HeroSection } from "./components/Hero/HeroSection";
import { Navbar } from "./components/Navbar/Navbar";
import { ProjectSection } from "./components/Projects/ProjectSection";
import { TimeLine } from "./components/TimeLine/Timeline";
import { Footer } from "./components/Footer/Footer";
import cobalogo from "./assets/cobalogo.svg";
import fitlogo from "./assets/logo_CVUT_doplnkova_verze_negativ.svg";
import galogo from "./assets/ga.svg";

function App() {
  return (
    <>
      <head>
        <title>Adam Lisner - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Adam Lisner, a software engineering student."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="antialiased font-sans bg-white text-gray-900">
        <Navbar />

        <main>
          <HeroSection />

          <AboutSection />
          <section
            id="experience"
            className="bg-gradient-to-br from-[#034085] to-[#053644] py-24"
          >
            <TimeLine
              title="Work Experience"
              experience={[
                {
                  company: "Commerzbank AG",
                  logo: cobalogo,
                  title: "Student Software Developer",
                  dates: "June 2025 - Present",
                  description:
                    "Working as a part-time Fullstack Developer in the Counterparty Risk Cluster, contributing to the development of the Loan Evaluation Application (LEAP).",
                  technologies: [
                    "Java 17",
                    "Spring Boot",
                    "TypeScript",
                    "React",
                    "CI/CD",
                    "OpenShift",
                    "REST APIs",
                    "Microservices",
                    "Financial Technologies",
                  ],
                },
              ]}
            />

            <TimeLine
              title="Education"
              experience={[
                {
                  company: "FIT CTU",
                  logo: fitlogo,
                  title: "Software Engineering / Computer Science",
                  dates: "September 2023 – Present",
                  description:
                    "Studying software engineering with a focus on Java and C++ development, algorithm design, database systems, DevOps, and cybersecurity.",
                  technologies: [
                    "Java",
                    "Spring",
                    "C/C++",
                    "PostgreSQL",
                    "Operating Systems",
                    "Algorithms",
                    "Database Systems",
                    "Software Design",
                    "Security",
                    "DevOps",
                    "Cryptography",
                    "•••",
                  ],
                },
                {
                  company: "Gymnázium Arabská",
                  logo: galogo,
                  title: "High School Diploma",
                  dates: "September 2019 – June 2023",
                  description:
                    "High school with a strong focus on Java programming, intensive English and German courses, and fundamentals of algorithm design and problem solving.",
                  technologies: [
                    "Java",
                    "Algorithm Design",
                    "English",
                    "German",
                  ],
                },
              ]}
            />
          </section>

          <ProjectSection projects={
            [
             {
              title: "Information system for company Prosaz",
              description: "A team university project to maintain and develop an information system for Prosaz. I'm working primarily as a Frontend developer, who does some Backend or DevOps when needed.",
              time: "Feb 2025 - Present",
              link: "https://www.prosaz.cz/",
              technologies: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Docker"]
             },
             {
              title: "MatKap",
              description: "First team project at high school, developing an Anroid application for learning history of literature. Not really commercially potencial, but we had great time developing it.",
              time: "Oct 2021 - Mar 2022",
              link: "https://play.google.com/store/apps/details?id=cz.matkap&pcampaignid=web_share",
              technologies: ["Java", "Android", "Firebase", "GitHub"]
             },
             {
              title: "FitExcel",
              description: "Backend for Excel-like sheets, semestral work for PA2 course at FIT CTU. Using OOP in C++ to create an AST tree to represent cells and formulas, which can be then evaluated.",
              time: "Apr 2024 - May 2024",
              link: "https://github.com/AdamLisner/PA2-velkauloha",
              technologies: ["C++", "OOP", "AST", "CMake"]
             }
            ]
          } />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
