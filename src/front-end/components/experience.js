import { useEffect, useState } from 'react';

function Experience() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/expro/all`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div className="w-auto mx-7 pt-28">
    <div className="flex items-center gap-2 w-fit mx-20 ">
      <h1 className="text-4xl md:text-6xl font-bold text-white ">​​💼​Expériences Professionnels</h1>
    </div>
    <div className="relative mt-8 max-lg:mx-6">
{/* methode sort pour trier les données selon lannée */}
      {data && [...data].sort((a, b) => b.annee - a.annee).map((item, index) => 
        <div key={index} className='p-2 rounded-md backdrop-brightness-50 mb-4 flex flex-col md:flex-row items-center text-center'>
  <h1 className="text-2xl md:text-4xl font-bold text-white ml-8 self-start md:self-auto">{item.annee}</h1>
  <img src={item.logoUrl} alt="logo" className="w-20 h-20 mx-20"/>
  <h2 className="text-2xl md:text-3xl font-bold font-mono mx-20 text-white">{item.entreprise}</h2>
  <h3 className="text-1xl italic mx-20 text-white">{item.poste}</h3>
  <p className="text-1xl italic mx-20 text-white">{item.description}</p>
</div>
    
    )}
    </div>
  </div>
  );
}
export default Experience;
