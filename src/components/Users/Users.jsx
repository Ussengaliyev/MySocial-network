import React from 'react';
import style from './users.module.css';
import userPhoto from '../../assets/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
    let pages = [];
    for (let i=1; i<= 30; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to = {'/profile/'+ u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                                props.toggleFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'f0aa194c-383e-4e82-96da-6ee69595de5d'
                                } 
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });

                             }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                                props.toggleFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'f0aa194c-383e-4e82-96da-6ee69595de5d'
                                } 
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id) 
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });

                                
                                
                                }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;