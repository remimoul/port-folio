import React from 'react';
import TableProjet from './tableProjet';
import TableExPro from './tableExPro';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';


function Dashboard(){

  const navigate = useNavigate();

  const logout = async () => {
    try {
      // Envoyer une requête à l'endpoint de révocation du token
      await axios.post('http://localhost:3005/user/revoke', {
        token: localStorage.getItem('token'),
      });

      // Supprimer le token du localStorage
      localStorage.removeItem('token');

      // Rediriger l'utilisateur vers la page de connexion
      navigate('/login');
    } catch (error) {
      console.error('Failed to revoke token', error);
    }
  };

    return (

  

        <div className=" w-auto mx-7 pt-28">
              
      <div className="flex items-center gap-2 w-fit">
        <h1 className="text-5xl font-bold font-mono text-white">🛠️​Paramètres</h1>
        <Button onClick={logout} color='error' variant='contained'>Déconnexion</Button>
      </div>
      <TableProjet />
      <TableExPro />
      </div>
    
    );
} export default Dashboard;