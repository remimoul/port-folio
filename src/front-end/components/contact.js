import React, { useState,useEffect } from 'react';
import Photo from '../assets/image/profile-pic.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/infoperso/all`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);
  return (

    <div className='w-auto mx-7 pt-28 flex justify-center items-center'>
      <section className="w-full h-full flex flex-col justify-center items-center my-12">
  <div className="contact-container max-w-full max-w-[960px] grid grid-cols-2 gap-1 md:gap-0 shadow-lg shadow-black rounded-lg navbar md:mx-auto md:w-90 lg:w-auto">
    <div className="form-container w-full md:w-1/2 px-2">
      <h3 className="mx-2 my-2 font-bold text-slate-50">VOTRE MESSAGE</h3>
      <form action="" className="contact-form">
        <input type="text" placeholder="Votre Nom" required className="mx-auto my-2 rounded-sm" />
        <input type="email" name="" id="" placeholder="Entrez votre Email" required className="mx-auto rounded-sm" />
        <br />
        <textarea name="" id="" cols="30" rows="10" placeholder="Ecrivez votre message ! :)" required className="mx-auto my-2 rounded-sm"></textarea>
        <button type="submit" className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
      </form>
    </div>
    <div className="map h-400 md:h-auto">
    <img className="w-15 h-16 mr-auto" alt="remi" src={Photo} />
    <h1 className="text-2xl font-bold font-mono italic mt-4 mx-20 text-white">Mes coordonnées</h1>
    
      {data && data.map((item, index) => (
<div key={index} className="flex flex-col items-center ">
      <span  className="text-2xl font-mono italic mt-4 mx-20 text-white">Email: {item.email}</span>
      <span className="text-2xl font-mono italic mt-4 mx-20 text-white">Téléphone: {item.phone}</span>
      <span className="text-2xl font-mono italic mt-4 mx-20 text-white">
       <a href={item.github} target="_blank" rel="noreferrer">
        <FaGithub />
      </a></span>
      <span className="text-2xl font-mono italic mt-4 mx-20 text-white">  <a href={item.linkedin} target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a></span>
</div>
     ))}
    </div>
  </div>
</section>
    </div>
  );
}
export default Contact;
