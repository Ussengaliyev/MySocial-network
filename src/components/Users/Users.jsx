import React from 'react';
import style from './users.module.css';

const Users = (props) => {

    React.useEffect(() => {
    props.setUsers( [
        {id: 1, photoUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*oC1wQeImbqzcfO3jixK2oQ.jpeg', 
        followed: false, fullName: 'Einstein', status: 'Everything is relative...', location: {city: 'New Jersey', country:'USA'} },
        {id: 2, photoUrl: 'https://e0.pxfuel.com/wallpapers/706/523/desktop-wallpaper-gojo-satoru-jujutsu-kaisen-thumbnail.jpg', 
        followed: true, fullName: 'Martyn', status: 'I am a person, who if full of enthusiasm :)', 
        location: {city: 'Almaty', country:'Kazakhstan'} },
        {id: 3, photoUrl: 'https://assets.htmlacademy.ru/img/tutors/main-tutor.svg?cs=97d327c3fa1f68e8ad6046d6869b9f495b7975da',
        followed: false, fullName: 'Eldan', status: "Don't be afraid to ask questions, but I won't really answer them.", 
        location: {city: 'Barselona', country:'Spain'} } ]
    
)
  }, []) 
    return <div>
        {
            props.users.map(  u => <div key = {u.id}>
                <span>
                    <div>
                        <img src = {u.photoUrl} className = {style.userPhoto}/>
                    </div>
                    <div>
                        { u.followed 
                        ? <button onClick = { () => {props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick = { () => {props.follow(u.id)}}>Follow</button> }
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div> 
}

export default Users;