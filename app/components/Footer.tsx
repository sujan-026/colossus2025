import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-hackathon-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Hackathon 2023</h3>
            <p className="text-sm">Join us for an exciting coding adventure!</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Schedule", "Speakers", "Sponsors", "Previous Hackathon", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-hackathon-purple transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li key="register">
                <a
                  href="https://unstop.com/hackathons/colossus-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-hackathon-purple transition-colors duration-300"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a key={social} href="#" className="hover:text-hackathon-purple transition-colors duration-300">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">© 2023 Hackathon. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

