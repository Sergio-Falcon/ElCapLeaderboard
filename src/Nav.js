import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className ='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/rules'>
          Rules
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/registration'>
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/eventinfo'>
          Event Info
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/packetpickup'>
          Packet Pickup
        </NavLink>
      </li>
    </ul>
  )
}