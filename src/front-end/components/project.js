import Duck from '../assets/image/duck.jpg';
import Bird from '../assets/image/bird.jpg';
import Bird1 from '../assets/image/bird1.jpg';
import { useEffect, useState } from 'react';
import Card from '../components/card';

function Project() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('../back-end/routes/projetRoute.js/all')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div className="m-auto  max-w-3xl w-full relative pt-20">
      <div className="flex items-center gap-2 w-fit mx-20 ">
        <h1 className="text-4xl font-bold text-white">Projets</h1>
      </div>
      <p className="text-1xl italic mx-20 text-white">Voici les différents projets que j'ai crée ☺️​ : </p>

      <div className="relative mt-8 max-lg:mx-6">
        {/* THE Card */}
        <div className="gap-4"></div>
        <div className="">{data && data.map((item, index) => <Card key={index} data={item} />)}</div>
      </div>
    </div>
  );
}
export default Project;
