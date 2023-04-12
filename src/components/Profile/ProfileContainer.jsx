import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profiile-reducer';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
       return(props)=>{
  
           const match  = {params: useParams()};
           return <Children {...props}  match = {match}/>
       }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                .then (response => {
                    this.props.setUserProfile(response.data);
                });
  }

  render() {
    return (
      <Profile {...this.props} profile = {this.props.profile}/>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);


// У кого не работает, продублирую путь решения
// 1.  import { useParams } from 'react-router-dom'; - нужно это просто сверху импортировать
// 2. export function withRouter(Children){
//      return(props)=>{

//         const match  = {params: useParams()};
//         return <Children {...props}  match = {match}/>
//     }
//   } - добавить это перед классовой компонентой 
// Остальное делаем как Димыч
// Как я понял, суть решения в том, что мы используем Хук - UseParams, он позволяет достучаться до url 
// Но так как нельзя хуки и классы мешать, мы берем и заворачиваем наш хук в функцию, далее из функции, которая как раз совпадает с нерабочим withRouter

