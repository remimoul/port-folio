import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DataTable from './dataTable';
import React,{useEffect,useState} from 'react';

function TableExPro(){
    const [experiences, setExperiences] = useState([]);
    const [editExp, setEditExp] = useState(null);
    const [newExp, setNewExp] = useState({
      entreprise: '',
      description: '',
      poste: '',
      logoUrl: '',
      annee: '',
    });
  
    const [open, setOpen] = useState(false);
  
    const inputChangeExp = (event) => {
      if(editExp) {
        setEditExp({
          ...editExp,
          [event.target.name]: event.target.value,
        });
      } else {
        setNewExp({
        ...newExp,
        [event.target.name]: event.target.value,
      });
      }
      
    };
  
    useEffect(() => {
      fetch('http://localhost:3005/expro/all')
        .then(response => response.json())
        .then(data => setExperiences(data));
    }, []);
  
    const addOneExp = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3005/expro/add', {
          method: 'POST',
          headers: {  'Content-Type': 'application/json',
          'authorization': token,
         },
          body: JSON.stringify(newExp),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        // Rechargez les données après l'ajout
        const data = await response.json();
        setExperiences([...experiences, data]);
        setOpen(false);
      } catch (error) {
        console.error('Le token est expiré: Reconnecte toi ou Degage 😈​', error);
      }
    };
  
    const updateExp = async (id) => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3005/expro/update/${editExp._id}`, {
          method: 'PUT',
          headers: {  'Content-Type': 'application/json','authorization':token, },
          body: JSON.stringify(editExp),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
       // Rechargez les données après la mise à jour
       const updatedExp = await response.json();
       setExperiences(experiences.map(projet => projet._id === updatedExp._id ? updatedExp : projet));
       setOpen(false);
       setEditExp(null);
     } catch (error) {
       console.error('There has been a problem with your fetch operation:', error);
     }
    };
  
    const columnsExp = [
      { field: '_id', headerName: 'ID', width: 100 },
      { field: 'annee', headerName: 'Année', width: 100 },
      { field: 'poste', headerName: 'Poste', width: 200},
      { field: 'entreprise', headerName: 'Entreprise', width: 100 },
      { field: 'description', headerName: 'Description', width: 200 },
      { field: 'logoUrl', headerName: 'Logo URL', width: 200 },

      {
          field: 'actions',
          headerName: 'Actions',
          width: 250,
          renderCell: (params) => (
            <strong>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => {setEditExp(params.row);
                  setOpen(true);}}
              >
                Modifier
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={async () => {
                  try {
                    const token = localStorage.getItem('token');
                    const response = await fetch(`http://localhost:3005/expro/delete/${params.row._id}`, {
                      method: 'DELETE',
                      headers: {  'Content-Type': 'application/json','authorization':token, },
                    });
      
                    if (!response.ok) {
                      throw new Error('Network response was not ok');
                    }
      
                    // Rechargez les données après la suppression
                    setExperiences(experiences.filter(projet => projet._id !== params.row._id));
                  } catch (error) {
                    console.error('There has been a problem with your fetch operation:', error);
                  }
                }
                }
              >
                Supprimer
              </Button>
            </strong>
          ),
        },
      { field: 'createdAt', headerName: 'Created At', width: 200 },
      { field: 'updatedAt', headerName: 'Updated At', width: 200 },
  
  ];

    return (
        <>
             <div className='flex mt-8'>   
<h2 className="text-3xl font-mono text-white font-bold">​💼​Expériences Professionnels : </h2>
        <div className="ml-auto">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginBottom: 16 }}
          onClick={() => {setOpen(true);setEditExp(false)}}
        >
          Ajouter une expérience
        </Button>
        </div>
        </div>
        <Dialog open={open} onClose={() => {setOpen(false);setEditExp(null)}} maxWidth='xl'>
        <DialogTitle>{editExp ? '🔧 Modifier lexpérience 🔧' : '🔥​ Ajouter une nouvelle expérience 🔥​'}</DialogTitle>
        <DialogContent>
          <TextField
            name="entreprise"
            label="Entreprise"
            value={editExp ? editExp.entreprise : newExp.entreprise}
            onChange={inputChangeExp}
            fullWidth
            margin='normal'
          />
            <TextField
            name="poste"
            label="Poste"
            value={editExp ? editExp.poste : newExp.poste}
            onChange={inputChangeExp}
            fullWidth
            margin='normal'
          />
          <TextField
            name="description"
            label="Description du poste occupé"
            multiline
            rows={6}
            value={editExp ? editExp.description : newExp.description}
            onChange={inputChangeExp}
            fullWidth
            margin='normal'
          />
          <TextField
            name="logoUrl"
            label="Logo de l'entreprise (URL)"
            value={editExp ? editExp.logoUrl : newExp.logoUrl}
            onChange={inputChangeExp}
            fullWidth
            margin='normal'
          />
          <TextField
            name="annee"
            label="Année de l'expérience"
            value={editExp ? editExp.annee : newExp.annee}
            onChange={inputChangeExp}
            fullWidth
            margin='normal'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setOpen(false);setEditExp(null)}} color='error' variant='contained'>Annuler</Button>
          <Button onClick={editExp ? () => updateExp(editExp._id) : addOneExp} color='success' variant='contained'>{editExp ? 'Modifier' : 'Ajouter'}</Button>
        </DialogActions>
      </Dialog>
  <DataTable data={experiences} columns={columnsExp} />
       </>
        
    )
} export default TableExPro;