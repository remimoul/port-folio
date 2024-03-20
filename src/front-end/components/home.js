import '../assets/styles/home/home.css';
import Photo from '../assets/image/profile-pic.png';

function Home() {
    return (
        <div className="m-auto py-15 lg:py-20 px-4 max-w-3xl w-full relative">
        <div className="flex items-center gap-2 w-fit">
          <img className='w-12 h-12 mr-auto' alt='remi' src={Photo}/>
          <h1 className="text-2xl font-bold text-white">Rémi Moul</h1>
          </div>
          <h1 className="text-3xl italic mt-4"> Web Developper</h1>
        {/* <div class="home-text">
          <h1>Rémi Moul</h1>
          <h4>Web Developpeur</h4>
        </div>   */}
      </div>
    );
} export default Home;