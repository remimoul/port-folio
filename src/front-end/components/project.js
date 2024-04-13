import { useEffect, useState } from 'react';
import Card from '../components/card';

function Project() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/projet/all`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);
  return (
    <div className="w-auto mx-7 pt-28">
      <div className="flex items-center gap-2 w-fit mx-20 ">
        <h1 className="text-6xl font-bold text-white">⭐​ Projets :</h1>
      </div>
      <div className="relative mt-8 max-lg:mx-16 grid grid-cols-auto-fill">
        {data && data.map((item, index) => <Card key={index} data={item} />)}
      </div>
    </div>
  );
}
export default Project;
