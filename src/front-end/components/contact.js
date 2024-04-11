import React, { useState } from 'react';
import Photo from '../assets/image/profile-pic.png';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer l'envoi du formulaire, par exemple en envoyant les données à une API ou en les enregistrant dans une base de données.
    console.log({ name, email, subject, message });
  };
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
    <div className="flex flex-col items-center ">
  <span className="text-2xl font-mono italic mt-4 mx-20 text-white">Email: moulremi@orange.fr</span>
  <span className="text-2xl font-mono italic mt-4 mx-20 text-white">Téléphone: 06 52 50 50 50</span>
</div>
   
    </div>
  </div>
</section>
    </div>
  );
}
export default Contact;
