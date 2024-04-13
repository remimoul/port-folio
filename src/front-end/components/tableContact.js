import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DataTable from './dataTable';
import React,{useEffect,useState} from 'react';
import { Toaster, toast } from 'sonner';

function TableContact(){
    const [contacts, setContacts] = useState([]);
    const [editContact, setEditContact] = useState(null);
    const [newContact, setNewContact] = useState({
      email: '',
      phone: '',
      github: '',
      linkedin: '',
    });
  
    const [open, setOpen] = useState(false);
  
    const inputChangeContact = (event) => {
      if(editContact) {
        setEditContact({
          ...editContact,
          [event.target.name]: event.target.value,
        });
      } else {
        setNewContact({
        ...newContact,
        [event.target.name]: event.target.value,
      });
      }
      
    };
  
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/infoperso/all`)
        .then(response => response.json())
        .then(data => setContacts(data));
    }, []);
  
    const addContact = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch( `${process.env.REACT_APP_API_URL}/infoperso/add`, {
          method: 'POST',
          headers: {  'Content-Type': 'application/json',
          'authorization': token,
         },
          body: JSON.stringify(newContact),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        // Rechargez les données après l'ajout
        const data = await response.json();
        setContacts([...contacts, data]);
        setOpen(false);
        toast.success('Contact ajouté avec succès');
      } catch (error) {
        console.error('Le token est expiré: Reconnecte toi ou Degage 😈​', error);
      }
    };
  
    const updateContact = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_API_URL}/infoperso/update/${editContact._id}`, {
          method: 'PUT',
          headers: {  'Content-Type': 'application/json','authorization':token, },
          body: JSON.stringify(editContact),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
       // Rechargez les données après la mise à jour
       const updatedContact = await response.json();
       setContacts(contacts.map(contact => contact._id === updatedContact._id ? updatedContact : contact));
       setOpen(false);
       setEditContact(null);
        toast.info('Contact modifié avec succès');
     } catch (error) {
       console.error('There has been a problem with your fetch operation:', error);
     }
    };
  
    const columnsContact = [
      { field: '_id', headerName: 'ID', width: 100 },
      { field: 'email', headerName: 'Email', width: 100 },
      { field: 'phone', headerName: 'Mobile', width: 200},
      { field: 'github', headerName: 'GitHub', width: 200 },
      { field: 'linkedin', headerName: 'LinkedIn', width: 200 },

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
                onClick={() => {setEditContact(params.row);
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
                    const response = await fetch(`${process.env.REACT_APP_API_URL}/infoperso/delete/${params.row._id}`, {
                      method: 'DELETE',
                      headers: {  'Content-Type': 'application/json','authorization':token, },
                    });
      
                    if (!response.ok) {
                      throw new Error('Network response was not ok');
                    }
      
                    // Rechargez les données après la suppression
                    setContacts(contacts.filter(projet => projet._id !== params.row._id));
                    toast.error(`Contact ${params.row.email} à été supprimé​`);
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
<h2 className="text-3xl font-mono text-white font-bold">​📲​ Contact : </h2>
        <div className="ml-auto">
        <Button
          variant="contained"
          color="secondary"
          style={{ marginBottom: 16 }}
          onClick={() => {setOpen(true);setEditContact(false)}}
        >
          Ajouter un contact
        </Button>
        </div>
        </div>
        <Dialog open={open} onClose={() => {setOpen(false);setEditContact(null)}} maxWidth='xl'>
        <DialogTitle>{editContact ? '🔧 Modifier Contact 🔧' : '​Ajouter les informations personelles​ ➕​'}</DialogTitle>
        <DialogContent>
          <TextField
            name="email"
            label="Email"
            value={editContact ? editContact.email : newContact.email}
            onChange={inputChangeContact}
            fullWidth
            margin='normal'
          />
            <TextField
            name="phone"
            label="Téléphone"
            value={editContact ? editContact.phone : newContact.phone}
            onChange={inputChangeContact}
            fullWidth
            margin='normal'
          />
          <TextField
            name="github"
            label="GitHub (URL)"
            value={editContact ? editContact.github : newContact.github}
            onChange={inputChangeContact}
            fullWidth
            margin='normal'
          />
          <TextField
            name="linkedin"
            label="LinkedIn (URL)"
            value={editContact ? editContact.linkedin : newContact.linkedin}
            onChange={inputChangeContact}
            fullWidth
            margin='normal'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setOpen(false);setEditContact(null)}} color='error' variant='contained'>Annuler</Button>
          <Button onClick={editContact ? () => updateContact(editContact._id) : addContact} color='success' variant='contained'>{editContact ? 'Modifier' : 'Ajouter'}</Button>
        </DialogActions>
      </Dialog>
  <DataTable data={contacts} columns={columnsContact} />
  <Toaster richColors position="top-left" expand={true} />
       </>
    )
} export default TableContact;