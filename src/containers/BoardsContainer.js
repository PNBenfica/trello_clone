import { connect } from 'react-redux'
import { fetchBoards } from '../actions/boardActions'
import PersonalBoards from '../components/personalBoards/PersonalBoards';

const mapStateToProps = (state, ownProps) => {
  return {
    boards: state.boards.boards
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBoards: () => {
      dispatch(fetchBoards())
    }
  }
}

const BoardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalBoards)

export default BoardsContainer