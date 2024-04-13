import '../assets/styles/home/home.css';
import Photo from '../assets/image/profile-pic.png';
import ReactLogo from '../assets/image/react.webp';
import NodeLogo from '../assets/image/nodejs.webp';
import MongoLogo from '../assets/image/mongodb.png';
import TailwindLogo from '../assets/image/tailwind.png';
import GithubLogo from '../assets/image/github.png';
import GitlabLogo from '../assets/image/gitlab.png';

function Home() {
  return (
    <div className="m-auto  max-w-7xl w-full relative pt-32">
      <div className="flex items-center gap-2 w-fit mx-20 ">
        <img className="w-15 h-16 mr-auto" alt="remi" src={Photo} />
        <h1 className="text-3xl font-bold font-mono text-white">Rémi Moul</h1>
      </div>
      <h1 className="text-6xl font-bold font-mono italic mt-4 mx-20 text-white">Developpeur Web Full-Stack</h1>
      <section className="text-2xl font-mono italic mt-4 mx-5 md:ml-20 text-white">
  “ Salutations ! Je m'apelle Rémi, un développeur web passionné basé en région parisienne.
  <br/>Reconnu pour ma positivité, ma persévérance et mon ambition par ceux qui me connaissent, je trouve mon épanouissement dans la productivité et la créativité.
  <br/>C’est cette passion pour la création qui m’a conduit sur le chemin du développement web.
  <br/>Actuellement, je suis en train d’approfondir mes compétences en développement full-stack à la MyDigitalSchool. ”
</section>

      <h2 className="text-5xl font-bold font-mono italic mt-16 mx-20 text-white flex ">Skill</h2>
      <div className="flex md:justify-start justify-center mt-10 mb-12 md:mb-0">
  <img className="w-15 h-16 mx-2 md:mr-auto" alt="react" src={ReactLogo} />
  <img className="w-15 h-16 mx-2 md:mr-auto" alt="node" src={NodeLogo} />
  <img className="w-15 h-16 mx-2 md:mr-auto" alt="mongo" src={MongoLogo} />
  <img className="w-15 h-16 mx-2 md:mr-auto" alt="tailwind" src={TailwindLogo} />
  <img className="w-15 h-16 mx-2 md:mr-auto" alt="github" src={GithubLogo} />
  <img className="w-15 h-16 mx-2 md:mr-auto" alt="gitlab" src={GitlabLogo} />
</div>
    </div>
  );
}
export default Home;
