import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../redux/profiile-reducer';
import { compose } from 'redux';
import { getStatus } from '../../redux/profiile-reducer';
import { updateStatus } from '../../redux/profiile-reducer';

export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
    
  }

  render() {
    return (
      <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} 
      updateStatus = {this.props.updateStatus}/>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth

});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer);







