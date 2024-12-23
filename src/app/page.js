import Header from "./components/header.js";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faDocker, faGithub, faInstagram, faJs, faLinkedin, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <Header />
      {/* Hero Section */}
      <div className="flex flex-row justify-between my-40 mx-20 items-center">
        <div>
          <h2 className="text-white text-6xl font-extrabold">
            ÍTALO <br /> CORDEIRO
          </h2>
          <p className="text-white">Full-stack Developer - Data Analyst</p>
        </div>
        <Image src="/avatar.svg" alt="Profile" width={400} height={400} />
        <div>
          <a
            className="font-semibold text-purple-400 p-4 bg-purple-700 bg-opacity-40 rounded-xl hover:bg-purple-500"
            href=""
          >
            📄 Baixar CV
          </a>
        </div>
      </div>
      {/* Portfolio Section */}
      <div className="flex flex-row justify-center py-28 border-t-purple-700 border-b-purple-700 border-t border-b">
        <div className="grid grid-cols-3 gap-8 mx-20">
          <div className="bg-purple-700 bg-opacity-40 p-6 rounded-xl hover:bg-purple-500 transition-all cursor-pointer">
            <Image
              src="/project1.png"
              alt="Project 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-white text-xl font-bold mt-4">Project 1</h3>
            <p className="text-gray-300">Description of project 1</p>
          </div>
          <div className="bg-purple-700 bg-opacity-40 p-6 rounded-xl hover:bg-purple-500 transition-all cursor-pointer">
            <Image
              src="/project2.png"
              alt="Project 2"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-white text-xl font-bold mt-4">Project 2</h3>
            <p className="text-gray-300">Description of project 2</p>
          </div>
          <div className="bg-purple-700 bg-opacity-40 p-6 rounded-xl hover:bg-purple-500 transition-all cursor-pointer">
            <Image
              src="/project3.png"
              alt="Project 3"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-white text-xl font-bold mt-4">Project 3</h3>
            <p className="text-gray-300">Description of project 3</p>
          </div>
          <div className="bg-purple-700 bg-opacity-40 p-6 rounded-xl hover:bg-purple-500 transition-all cursor-pointer col-span-3">
            <Image
              src="/project4.png"
              alt="Project 4"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-white text-xl font-bold mt-4">Project 4</h3>
            <p className="text-gray-300">Description of project 4</p>
          </div>
        </div>
      </div>
      {/* About Me Section */}
      <section className="my-20 mx-20">
        <h2 className="text-4xl font-extrabold text-center mb-8">Sobre Mim</h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto">
          Sou um desenvolvedor Full-stack e analista de dados apaixonado por
          criar soluções digitais inovadoras. Tenho experiência em várias
          tecnologias modernas e estou sempre em busca de aprender mais.
        </p>
      </section>
      {/* Skills Section */}
      <section className="my-20 mx-20">
        <h2 className="text-4xl font-extrabold text-center mb-8">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "JavaScript", icon: faJs },
            { name: "React", icon: faReact },
            { name: "Next.js", icon: faCodepen },
            { name: "Python", icon: faPython },
            { name: "Power-BI", icon: faChartBar },
            { name: "Docker", icon: faDocker }
          ].map((skill) => (
              <span
                key={skill.name}
                className="bg-purple-700 bg-opacity-40 text-white px-6 py-3 rounded-full hover:bg-purple-500 transition-all flex items-center gap-2"
              >
                <FontAwesomeIcon icon={skill.icon} className="w-5 h-5" />
                {skill.name}
              </span>
            )
          )}
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-zinc-800 py-6 text-center">
        <p className="text-gray-400">
          Desenvolvido por Ítalo Cordeiro | Todos os direitos reservados
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-white hover:text-purple-400 flex flex-col items-center">
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            LinkedIn
          </a>
          <a href="#" className="text-white hover:text-purple-400 flex flex-col items-center">
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            GitHub
          </a>
          <a href="#" className="text-white hover:text-purple-400 flex flex-col items-center">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
