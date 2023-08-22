import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import BookingTable from '../bookingTable/BookingTable'
const Sidebar = () => {
  return (
    <div>
    <div className='man_main_flex_event'>
        <div className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
       
            <NavLink className="nav-link" href="#">
            <span><i className="fa fa-user-circle-o  me-2" ></i></span>  Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">
            <span><i className="fa fa-pencil-square-o me-2" ></i></span>   Book Event
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">
            <span><i className="fa fa-line-chart me-2" ></i></span>   All Event
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">
            <span><i className="fa fa-address-book-o me-2" ></i></span>  Bookings
            </NavLink>
          </li>
        </ul>
      </div>
      <BookingTable/>
      </div>
    </div>
  )
}

export default Sidebar
