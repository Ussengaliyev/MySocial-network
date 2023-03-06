import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
console.log(s);

const Navbar = () => {
  return (<nav className={s.nav}>
    <div className={s.item}>
      <NavLink to = '/profile' >Profile</NavLink>
    </div>
    <div className={s.active}>
      <NavLink to = '/dialogs'>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to = '/news'>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to = '/music'>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to = '/settings'>Settings</NavLink>
    </div>
  </nav >);
}

// у кого в конце 21го не работает activeClassName - необходимо заменить на 
// className = { navData => navData.isActive ? s.active : s.item }
// + пишем правило в css для .active {color: gold;} + там же переименовываем ".item a" просто в ".item"
// <div className={s.item}> тоже можно заменить на просто <div>, от класснэйма тут толку не будет

export default Navbar;