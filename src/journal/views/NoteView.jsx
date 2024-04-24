import { DeleteOutline, SaveOutlined, UploadFileOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useMemo, useEffect, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startUpdatingNote, startUploadingFiles, startDeletingNote } from "../../store/journal/thunks";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";


export const NoteView = () => {
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { title, date, body, imageUrls, onInputChange, formState } =
    useForm(note);
  const dispatch = useDispatch();

  const onSaveNote = () => {
    dispatch(startUpdatingNote());
  };

  const newDate = useMemo(() => new Date(date).toUTCString(), [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const inputFileUploadRef = useRef();

  const onUploadFileChange = (event) => {
    if (event.target.files === 0) return;
    const files = event.target.files;
    
    dispatch(startUploadingFiles(files))
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="animate__animated animate__fadeIn animate__faster"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {newDate.toLocaleString()}
        </Typography>
      </Grid>

      <Grid item>
        <input
          ref={inputFileUploadRef}
          style={{ display: "none" }}
          onChange={onUploadFileChange}
          type="file"
          multiple
        />

        <IconButton 
            disabled={isSaving}
            color="primary"
            onClick={() => inputFileUploadRef.current.click()}
            >
          <UploadFileOutlined />
        </IconButton>
        <Button
          disabled={isSaving}
          color="primary"
          sx={{ padding: 3 }}
          onClick={onSaveNote}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          value={title}
          name="title"
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué pasó el dia de hoy?"
          minRows={5}
          value={body}
          name="body"
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent="end">
        <Button
          onClick={onDelete}
          sx={{ mt: 2 }}
          color="error"          
          >
          <DeleteOutline />
        </Button>
      </Grid>

      <ImageGallery  imageUrls={note.imageUrls}/>
    </Grid>
  );
};
