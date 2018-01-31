import { FETCH_BOARDS, FETCH_BOARD_DETAILS, SET_ACTIVE_BOARD } from './ActionTypes';

export const fetchBoards = () => {
    return {
      type: FETCH_BOARDS,
    }
}

export const fetchBoardDetails = (id) => {
    return {
      type: FETCH_BOARD_DETAILS,
      id
    }
}

export const setActiveBoard = (id) => {
    return {
      type: SET_ACTIVE_BOARD,
      id
    }
}