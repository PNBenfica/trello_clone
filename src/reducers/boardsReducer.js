import { FETCH_BOARDS, SET_ACTIVE_BOARD } from '../actions/ActionTypes'

let initialState = {
    // boards: { boardsById: {}, allIds: [] },
    boards: getBoards(),
    // boardsDetails: { lists: { listsById: {}, allIds: [] } },
    boardsDetails: { lists: getBoardsLists() },
    fetched: false,
    activeBoardId: null
}



function getBoards(){
    const colors = ["rgba(0, 121, 191, 1)", "rgba(210, 144, 52, 1)", "rgba(81, 152, 57, 1)", "rgba(176, 70, 50, 1)", "rgba(137, 96, 158, 1)", "rgba(205, 90, 145, 1)", "rgba(75, 191, 107, 1)", "rgba(0, 174, 204, 1)", "rgba(131, 140, 145, 1)"]
    let boards = [...Array(6).keys()].map(n => { return { id: n, name: "Project " + n, color: colors[n], lists:[n, n + 10, n + 20] }} )
    boards = normalizeBoards(boards)
    return boards
}

function normalizeBoards(boards){
    let normalizedBoards = { boardsById: {}, allIds: [] }
    boards.forEach(board => {
        normalizedBoards.allIds.push(board.id)
        normalizedBoards.boardsById[board.id] = {...board}
    })
    return normalizedBoards
}

function getBoardsLists(){
    const allIds = [...Array(29).keys()]
    const listsById = {}
    allIds.forEach(n => {
        listsById[n] = { id: n, text: `List ${n}` }
    })
    return { allIds, listsById }
}


const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOARDS:
            return {...state, boards: getBoards() }
        case SET_ACTIVE_BOARD:
            return {...state, activeBoardId: action.id }
        default:
            return state
        }
    }

export default boardsReducer

/*
boards = {
    boardsById: {
        '1' : {
            name: 'Project name',
            color: '#fff'
        }
    },
    allIds: ['1']
}
*/