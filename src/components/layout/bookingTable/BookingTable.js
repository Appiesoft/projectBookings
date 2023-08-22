import React from "react";
import { NavLink } from "react-router-dom";
import './BookingTable.css'
const BookingTable = () => {
  return (
    <>
      <div className="man_event_right mt-3 mt-lg-5">
        <b>
          <h1>Event Details</h1>
        </b>
        <form className="div"  id="sub" >
          <table className="first_table">
            <input type="hidden" readonly="" />
            <tbody>
                <tr>
                  <td>Title :</td>
                  <td>
                  <input type="text" className="form-control"/>
                  </td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>
                    <textarea rows="4" cols="50" className="form-control"></textarea>
                  </td>
                </tr>
              </tbody>
          </table>
          <table className="second_table">
            <tbody>
                <tr>
                  <td>Choose Event Image:</td>
                  <td>
                    <input type="file" accept=".png, .jpg, .jpeg, .jfif" className="form-control"/>
                  </td>
                </tr>

                <tr>
                  <td>Price per Person:</td>
                  <td>
                  <input type="text" className="form-control"/>
                  </td>
                </tr>
             
              </tbody>
          </table>
          <div id="wrapper">
            <table className="third_table">
              <tbody>
                <tr>
                  <td>Event Location:</td>
                  <td>
                    <input type="text" className="form-control"/>
                  </td>
                </tr>
                <tr>
                  <td>Event Date From :</td>
                  <td>
                    <input type="date" className="form-control"/>
                  </td>
                </tr>
                <tr>
                  <td>Event Date to :</td>
                  <td>
                    <input type="date" className="form-control"/>
                  </td>
                </tr>
                <tr>
                  <td>Event Start Time:</td>
                  <td>
                    <input type="time" className="form-control"/>
                  </td>
                </tr>
                <tr>
                  <td>Event End Time:</td>
                  <td>
                    <input type="time" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>Event Organizer Name:</td>
                  <td>
                    <textarea rows="1" cols="50" className="form-control"></textarea>
                  </td>
                </tr>

                <tr>
                  <td>Image:</td>
                  <td>
                    <input type="file" accept=".png, .jpg, .jpeg, .jfif" className="form-control"/>
                  </td>
                </tr>

                <tr>
                  <td>Organizer's Designation:</td>
                  <td>
                    <textarea rows="1" cols="50" className="form-control"></textarea>
                  </td>
                </tr>
                <tr>
                  <td>Organizer's Description:</td>
                  <td>
                    <textarea rows="4" cols="50" className="form-control"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-5 d-flex">
            <NavLink to="#" id="addMore">
              Add More Form
            </NavLink>
          <button type="submit" id="btn" >
            submit
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingTable;
