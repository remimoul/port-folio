import React,{useEffect,useState} from 'react';
import DataTable from './dataTable';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Toaster, toast } from 'sonner';

function TableProjet(){
    const [projets, setProjets] = useState([]);
  const [editingProjet, setEditingProjet] = useState(null);
  const [newProjet, setNewProjet] = useState({
    title: '',
    description: '',
    imageUrl: '',
    link: '',
  });

  const [open, setOpen] = useState(false);

  const inputChangeProjet = (event) => {
    if(editingProjet) {
      setEditingProjet({
        ...editingProjet,
        [event.target.name]: event.target.value,
      });
    } else {
      setNewProjet({
      ...newProjet,
      [event.target.name]: event.target.value,
    });
    }
    
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/projet/all`)
      .then(response => response.json())
      .then(data => setProjets(data));
  }, []);

  const addOneProjet = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/projet/add`, {
        method: 'POST',
        headers: {  'Content-Type': 'application/json',
        'authorization': token,},
        body: JSON.stringify(newProjet),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Rechargez les données après l'ajout
      const data = await response.json();
      setProjets([...projets, data]);
      setOpen(false);
      toast.success('Projet ajouté avec succès 🚀');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  const updateProjet = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_API_URL}/projet/update/${editingProjet._id}`, {
        method: 'PUT',
        headers: {  'Content-Type': 'application/json',
        'authorization':token,},
        body: JSON.stringify(editingProjet),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

     // Rechargez les données après la mise à jour
     const updatedProjet = await response.json();
     setProjets(projets.map(projet => projet._id === updatedProjet._id ? updatedProjet : projet));
     setOpen(false);
     setEditingProjet(null);
      toast.info('Projet modifié avec succès 🚀');
   } catch (error) {
     console.error('There has been a problem with your fetch operation:', error);
   }
  };

  const columnsProjet = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 100 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'imageUrl', headerName: 'Image URL', width: 200 },
    { field: 'link', headerName: 'Link', width: 200 },
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
              onClick={() => {setEditingProjet(params.row);
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
                  const response = await fetch(`${process.env.REACT_APP_API_URL}/projet/delete/${params.row._id}`, {
                    method: 'DELETE',
                    headers: {  'Content-Type': 'application/json',
                    'authorization':token, },
                  });
    
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
    
                  // Rechargez les données après la suppression
                  setProjets(projets.filter(projet => projet._id !== params.row._id));
                  toast.error(`Projet ${params.row.title} à été supprimé​`);
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
<h2 className="text-3xl font-mono text-white font-bold">​💡​Projets : </h2>
        <div className="ml-auto">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginBottom: 16 }}
          onClick={() => {setOpen(true);setEditingProjet(false)}}
        >
          Ajouter un projet
        </Button>
        </div>
        </div>
        <Dialog open={open} onClose={() => {setOpen(false);setEditingProjet(null)}} maxWidth='xl'>
        <DialogTitle>{editingProjet ? 'Modifier le projet' : 'Ajouter un nouveau projet'}</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            label="Title"
            value={editingProjet ? editingProjet.title : newProjet.title}
            onChange={inputChangeProjet}
            fullWidth
            margin='normal'
          />
          <TextField
            name="description"
            label="Description"
            multiline
            rows={6}
            value={editingProjet ? editingProjet.description : newProjet.description}
            onChange={inputChangeProjet}
            fullWidth
            margin='normal'
          />
          <TextField
            name="imageUrl"
            label="Image URL"
            value={editingProjet ? editingProjet.imageUrl : newProjet.imageUrl}
            onChange={inputChangeProjet}
            fullWidth
            margin='normal'
          />
          <TextField
            name="link"
            label="Lien GitHub"
            value={editingProjet ? editingProjet.link : newProjet.link}
            onChange={inputChangeProjet}
            fullWidth
            margin='normal'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setOpen(false);setEditingProjet(null)}} color='error' variant='contained'>Annuler</Button>
          <Button onClick={editingProjet ? () => updateProjet(editingProjet._id) : addOneProjet} color='success' variant='contained'>{editingProjet ? 'Modifier' : 'Ajouter'}</Button>
        </DialogActions>
      </Dialog>
  <DataTable data={projets} columns={columnsProjet} />
  <Toaster richColors position="top-left" expand={true} />
       </>
    )
} export default TableProjet;