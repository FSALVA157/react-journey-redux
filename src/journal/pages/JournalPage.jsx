import { IconButton } from "@mui/material"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"


export const JournalPage = () => {
  const dispatch = useDispatch();
  const {isSaving, active} = useSelector(state => state.journal)

  const onClickNewNote = () => {
   dispatch(startNewNote()); 
  }
  return (
    <>
      {
        active ? <NoteView /> : <NothingSelectedView />
      }
       
       

       <IconButton
        size="large"
        disabled = {isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={onClickNewNote}
        >
          <AddOutlined sx={{ fontSize: 30 }} />

       </IconButton>
    </>
  )
}
