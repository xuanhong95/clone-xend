import React from 'react';
import Topbar from '../components/topbar.jsx';
import { connect } from 'react-redux';

// import {getIsLoggedIn} from '../selectors'
const TopbarContainer = (props) => <Topbar {...props} />

// const mapStateToProps = state => {
// 	return{
// 		activeTopbar: state.bar_reducer.activeTopbar,
// 		logoutSuccess: state.bar_reducer.logoutSuccess
// 	}	
// }
// const mapDispatchToProps = (dispatch) =>{
// 	return {
// 		logout: () => {
// 			dispatch(logout())
// 		},
// 		TopbarCollapse: () => {
// 			dispatch(TopbarCollapse())
// 		}
// 	}
// }
	

// export default connect(mapStateToProps, mapDispatchToProps)(TopbarContainer)
export default TopbarContainer