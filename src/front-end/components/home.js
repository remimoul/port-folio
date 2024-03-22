import '../assets/styles/home/home.css';
import Photo from '../assets/image/profile-pic.png';

function Home() {
  return (
    <div className="m-auto  max-w-3xl w-full relative pt-32">
      <div className="flex items-center gap-2 w-fit mx-20 ">
        <img className="w-12 h-12 mr-auto" alt="remi" src={Photo} />
        <h1 className="text-3xl font-bold text-white">Rémi Moul</h1>
      </div>
      <h1 className="text-2xl font-bold italic mt-4 mx-20 text-white">Developpeur WEB</h1>
      <p className="text-1xl italic mt-4 mx-20 text-white">
        Développeur web et mobile en reconversion. Passionné par la création d'applications dans le développement web.
      </p>
    </div>
  );
}
export default Home;
