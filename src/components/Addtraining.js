import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';

export default function Addtraining(props) {
	const [open, setOpen] = React.useState(false);
	const [training, setTraining] = React.useState({
		date: '', activity: '', duration: '', customer: ''
	});

  const handleClickOpen = () => {
    setTraining({...training, customer: props.customer.links[0].href})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

	const handleInputChange = (event) => {
		setTraining({...training, [event.target.name]: event.target.value})
	}

	const addTraining = () => {
    training.date = moment(training.date, "D.M.YYYY, H:mm").toISOString(true);
    props.saveTraining(training);
		handleClose();
	}

	return(
    <div>
      <Button size="small" color="primary" variant="outlined"
        onClick={handleClickOpen} startIcon={<AddIcon />}>
          Add training
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New training</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
						name="activity"
						value={training.activity}
						onChange={e => handleInputChange(e)}
            label="Activity"
            fullWidth
          />
          <TextField
            margin="dense"
						name="date"
						value={training.date}
						onChange={e => handleInputChange(e)}
            label="Date (e.g. 1.1.2020, 13:00)"
            fullWidth
          />
          <TextField
            margin="dense"
						name="duration"
						value={training.duration}
						onChange={e => handleInputChange(e)}
            label="Duration (min)"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}