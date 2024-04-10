import { useEffect, useState } from 'react';
// import Card from '../components/card';
import CardTest from '../components/cardtest';

function Project() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3005/projet/all')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div className="w-auto mx-7 pt-28">
      <div className="flex items-center gap-2 w-fit mx-20 ">
        <h1 className="text-6xl font-bold text-white">⭐​ Projets :</h1>
      </div>
      {/* <p className="text-1xl italic mx-20 text-white">Voici les différents projets que j'ai crée ☺️​ : </p> */}

      <div className="relative mt-8 max-lg:mx-16 grid grid-cols-auto-fill">
        {/* THE Card */}
        {/* <div>{data && data.map((item, index) => <Card key={index} data={item} />)}</div> */}
        {data && data.map((item, index) => <CardTest key={index} data={item} />)}
      </div>
    </div>
  );
}
export default Project;
