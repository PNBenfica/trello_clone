import { connect } from 'react-redux'
import { setActiveBoard } from '../actions/boardActions'
import BoardPage from '../components/boardPage/BoardPage';

const mapStateToProps = (state, ownProps) => {
    const { activeBoardId, boards, boardsDetails } = state.boards
    if (activeBoardId === null)
        return { board: {}, fetching: true, lists: []}
    const board = boards.boardsById[activeBoardId]
    const lists = board.lists.map(listId => boardsDetails.lists.listsById[listId])
    return {
        activeBoardId,
        board,
        lists
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setActiveBoard: (id) => {
        dispatch(setActiveBoard(+id))
    }
  }
}

const ActiveBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage)

export default ActiveBoardContainer