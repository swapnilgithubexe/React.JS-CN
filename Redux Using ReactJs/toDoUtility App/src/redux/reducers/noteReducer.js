import { ADD_NOTE, DELETE_NOTE } from "../actions/noteAction"

const initialState = {
  notes: [{ text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", createdOn: new Date() }, {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    createdOn: new Date()
  }]
}

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            "text": action.text,
            createdOn: new Date()
          }
        ]
      }

    case DELETE_NOTE:
      state.notes.splice(action.index, 1)
      return {
        ...state,
        notes: state.notes
      }

    default:
      return state
  }
}