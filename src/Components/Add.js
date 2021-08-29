import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(addMovie) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const[name, setName] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");




  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <form style={modalStyle} className={classes.paper}>
      <p> Movie name:</p>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <p>Rating:</p>
      <input type="number" onChange={(e) => setRating(e.target.value)} min={1} max={5}/>
      <p>Date:</p>
      <input type="text" onChange={(e) => setDate(e.target.value)}/>
      <p>Description</p>
      <input type="text" onChange={(e) => setDescription(e.target.value)}/>
      <p>Type:</p>
      <input type="text" onChange={(e) => setType(e.target.value)}/>
      <p>Image URL:</p>
      <input type="text" onChange={(e) => setImage(e.target.value)}/> <br/>
      <input type="submit" value="Envoyer" />
    </form>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add movie
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
