
const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export const Navbar = () => {
    return (
        <nav className="bg-dark-bg backdrop-blur-2xl sticky top-0 z-50 shadow-md">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <a href="#hero" className="text-white font-bold text-lg">
              Adam Lisner
            </a>
            <ul className="hidden md:flex space-x-6 text-gray-400 font-medium">
                {sections.map((section) => (
                    <li key={section.id}>
                    <a
                        href={`#${section.id}`}
                        className="hover:text-white transition-colors duration-300"
                    >
                        {section.label}
                    </a>
                    </li>
                ))}
            </ul>
            {/* Mobile menu button can be added here */}
          </div>
        </nav>
    );
};