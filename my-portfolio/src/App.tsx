function App() {
  return (
    // Set Inter font and a default background color
    <div className="antialiased font-sans bg-white text-gray-900">
      {/* ============================================= */}
      {/* Navigation Bar                             */}
      {/* ============================================= */}
      <nav className="bg-dark-bg backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="#hero" className="text-white font-bold text-lg">
            Adam Lisner
          </a>
          <ul className="hidden md:flex space-x-6 text-gray-400 font-medium">
            <li>
              <a
                href="#hero"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-white transition-colors duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile menu button can be added here */}
        </div>
      </nav>

      <main>
        {/* ============================================= */}
        {/* Hero Section                                */}
        {/* ============================================= */}
        <section
          id="hero"
          className="relative flex items-center justify-center h-screen bg-gradient-to-r from-primary-green to-secondary-green overflow-hidden"
        >
          <div className="z-10 text-center text-white p-4">
            <h1 className="text-5xl font-bold mb-4">Adam Lisner</h1>
            <p className="text-2xl font-light">Software Engineering Student</p>
            <div className="mt-8">
              <a
                href="#projects"
                className="bg-white text-primary-green px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* About Section                               */}
        {/* ============================================= */}
        <section id="about" className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-600 mb-4">
                  Hi, I&apos;m Adam Lisner 👋, a software engineering student
                  passionate about building innovative solutions 💡. I&apos;m
                  currently pursuing my degree at FIT ČVUT 🎓, where I&apos;m
                  focusing on Java, C/C++, algorithms, functional programming,
                  and more 🚀.
                </p>
                <p className="text-gray-600 mb-4">
                  In addition to my studies, I&apos;ve gained practical
                  experience as a student software developer at Commerzbank AG
                  💼, where I&apos;ve been working on a Loan Evaluation Application using technologies like Java 17, TypeScript,
                  React, OpenShift and many more⚙️.
                </p>
                <p className="text-gray-600">
                  I&apos;m a strong communicator 🗣️, a team player 🤝, and a
                  dedicated worker 💪, always striving to expand my knowledge
                  and skills 📚. I&apos;m excited to apply my expertise to
                  real-world projects and contribute to the growth of the tech
                  industry 🌱✨.
                </p>
              </div>
              <div className="flex justify-center items-center">
                {/* The "Adam Lisner" name tag above the image */}
                <div className="text-center">
                  <p className="font-bold">Adam Lisner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Projects Section                            */}
        {/* ============================================= */}
        <section id="projects" className="bg-gray-100 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4">Project 1</p>
                  <h3 className="text-xl font-bold mb-2">
                    Informační systém pro Prosaz
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A team university project to develop an information system
                    for Prosaz.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Feb 2025 - Present</p>
                    <a
                      href="#"
                      className="bg-primary-green text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-secondary-green transition-colors duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              {/* Add more project cards here */}
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Experience Section                          */}
        {/* ============================================= */}
        <section id="experience" className="bg-white py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Work Experience
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 text-left md:text-right">
                  <h3 className="text-xl font-bold">Commerzbank AG</h3>
                  <p className="text-gray-500">Student Software Developer</p>
                  <p className="text-gray-400 text-sm mt-1">
                    June 2025 - Present
                  </p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    Developing a credit evaluation application using Java 17,
                    TypeScript, React, CI/CD, and Kubernetes in the Counterparty
                    Risk Cluster.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      Java 17
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      TypeScript
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      React
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      CI/CD
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      Kubernetes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* Contact Section                             */}
        {/* ============================================= */}
        <section id="contact" className="bg-dark-bg py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">
                Get in Touch
              </h2>
            </div>
            <div className="max-w-2xl mx-auto bg-dark-card rounded-lg shadow-lg p-8">
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-400 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-dark-input border border-gray-600 text-white rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-400 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-dark-input border border-gray-600 text-white rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-gray-400 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="bg-dark-input border border-gray-600 text-white rounded-md py-3 px-4 w-full resize-none focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-6 w-full rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================= */}
      {/* Footer                                      */}
      {/* ============================================= */}
      <footer id="footer" className="bg-dark-bg py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Adam Lisner. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/AdamLisner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/adam-lisner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
