import { connect } from 'react-redux'
import NavBar from '../components/nav/NavBar';

const mapStateToProps = (state, ownProps) => {
    const { activeBoardId, boards } = state.boards
    let color = null;
    if (activeBoardId !== null)
        color = boards.boardsById[activeBoardId].color.replace("1)", "0.8)")
    return {
        color
    }
}

const NavBarContainer = connect(
  mapStateToProps
)(NavBar)

export default NavBarContainer