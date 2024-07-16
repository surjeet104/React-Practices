import React from "react";
import "./Listing.css";

function Listing() {
    const initialState = [
      { id: 1, name: 'Raj', lastName: 'Kumar', percentage: 33 },
      { id: 2, name: 'Mohit', lastName: 'Kumar', percentage: 78 },
      { id: 3, name: 'Rohit', lastName: 'Kumar', percentage: 44 },
      { id: 4, name: 'Gaurav', lastName: 'Patel', percentage: 56 },
      { id: 5, name: 'Ashutosh', lastName: 'Jha', percentage: 94 },
      { id: 6, name: 'Himanshu', lastName: 'Jha', percentage: 87 },
      { id: 7, name: 'Narendra', lastName: 'Kumar', percentage: 66 },
      { id: 8, name: 'Rahul', lastName: 'Sharma', percentage: 22 },
      { id: 9, name: 'Ankit', lastName: 'Dutta', percentage: 21 },
      { id: 10, name: 'Anand', lastName: 'Singh', percentage: 31 },
      { id: 11, name: 'Aman', lastName: 'Patel', percentage: 48 },
      { id: 12, name: 'Praveen', lastName: 'Shukla', percentage: 67 },
      { id: 13, name: 'Gaurav', lastName: 'Srivastava', percentage: 92 },
      { id: 14, name: 'Anand', lastName: 'Kumar', percentage: 85 },
      { id: 15, name: 'Mohit', lastName: 'Mishra', percentage: 75 }
    ];
  
    const getStatus = (percentage) => {
      if (percentage >= 91 && percentage <= 100) return 'Excellent';
      if (percentage >= 81 && percentage <= 90) return 'Very Good';
      if (percentage >= 70 && percentage <= 80) return 'Good';
      if (percentage < 40) return 'Failed';
      return 'Pass';
    };
  
    const getStyles = (percentage) => {
      if (percentage >= 91 && percentage <= 100) return { backgroundColor: 'orange', color: 'white' };
      if (percentage >= 81 && percentage <= 90) return { backgroundColor: 'green', color: 'white' };
      if (percentage >= 70 && percentage <= 80) return { backgroundColor: 'blue', color: 'white' };
      if (percentage < 40) return { backgroundColor: 'black', color: 'white' };
      return { backgroundColor: 'pink', color: 'red' };
    };
  
    return (
      <div className="report-container">
        {initialState.map(user => (
          <div key={user.id} className="report-card" style={getStyles(user.percentage)}>
            <span>{user.name} {user.lastName}</span>
            <span>{getStatus(user.percentage)}</span>
          </div>
        ))}
      </div>
    );
  }
  
  export default Listing;