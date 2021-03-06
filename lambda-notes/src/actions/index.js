import axios from "axios";

// getNotes
export const GETTING_NOTES = "GETTING_NOTES";
export const GOT_NOTES = "GOT_NOTES";
export const GET_NOTES_ERROR = "GET_NOTES_ERROR";
// getNote
export const GETTING_NOTE = "GETTING_NOTE";
export const GOT_NOTE = "GOT_NOTE";
export const GET_NOTE_ERROR = "GET_NOTE_ERROR";
//addNote
export const ADDING_NOTE = "ADDING_NOTE";
export const ADDED_NOTE = "ADDED_NOTE";
export const ADD_NOTE_ERROR = "ADD_NOTE_ERROR";
// deleteNote
export const DELETING_NOTE = "DELETING_NOTE";
export const DELETED_NOTE = "DELETED_NOTE";
export const DELETE_NOTE_ERROR = "DELETE_NOTE_ERROR";
// editNote
export const UPDATING_NOTE = "UPDATING_NOTE";
export const UPDATED_NOTE = "UPDATED_NOTE";
export const UPDATE_NOTE_ERROR = "UPDATE_NOTE_ERROR";
// redirect
export const SET_REDIRECT = "SET_REDIRECT";
export const RESET_REDIRECT = "RESET_REDIRECT";

// Loading message tester
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: GETTING_NOTES });

    axios
      .get("https://ls-back-end-project-week.herokuapp.com/api/notes/")

      .then(async ({ data }) => {
        await sleep(1000);
        dispatch({ type: GOT_NOTES, payload: data });
      })

      .catch(error => dispatch({ type: GET_NOTES_ERROR, payload: error }));
  };
};

export const getNote = id => {
  return dispatch => {
    dispatch({ type: GETTING_NOTE });

    axios
      .get(`https://ls-back-end-project-week.herokuapp.com/api/notes/${id}`)

      .then(async ({ data }) => {
        await sleep(1000);
        dispatch({ type: GOT_NOTE, payload: data });
      })

      .catch(error => dispatch({ type: GET_NOTE_ERROR, payload: error }));
  };
};

export const addNote = note => {
  return dispatch => {
    dispatch({ type: ADDING_NOTE });

    axios
      .post("https://ls-back-end-project-week.herokuapp.com/api/notes/", note)

      .then(async () => {
        await sleep(1000);
        dispatch({ type: ADDED_NOTE });
      })

      .catch(error => dispatch({ type: ADD_NOTE_ERROR, payload: error }));
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: DELETING_NOTE });

    axios
      .delete(`https://ls-back-end-project-week.herokuapp.com/api/notes/${id}`)

      .then(async () => {
        await sleep(1000);
        dispatch({ type: DELETED_NOTE, payload: {} });
      })

      .then(async () => {
        await sleep(1000);
        dispatch({ type: SET_REDIRECT, payload: "/" });
      })

      .catch(error => dispatch({ type: DELETE_NOTE_ERROR, payload: error }));
  };
};

export const updateNote = updatedNote => {
  return dispatch => {
    dispatch({ type: UPDATING_NOTE });

    axios
      .put(
        `https://ls-back-end-project-week.herokuapp.com/api/notes/${
          updatedNote.id
        }`,
        updatedNote
      )

      .then(async ({ data }) => {
        await sleep(1000);
        dispatch({ type: UPDATED_NOTE, payload: data });
      })

      .catch(error => dispatch({ type: UPDATE_NOTE_ERROR, payload: error }));
  };
};

// This feels so hacky but every other solution involved adding new libraries and middleware
export const setRedirect = url => {
  return dispatch => {
    dispatch({ type: SET_REDIRECT, payload: url });
  };
};

export const resetRedirect = () => {
  return dispatch => {
    dispatch({ type: RESET_REDIRECT });
  };
};
