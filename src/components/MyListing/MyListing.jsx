import React from "react";
import "./MyListing.css";

function MyListing(){
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

      const getStyles=(percentage)=>{
        if(percentage>=90) return {backgroundColor:"orange",color:"white"};
        else if(percentage>=80) return {backgroundColor:"green",color:"white"};
        else if(percentage>=70) return {backgroundColor:"blue",color:"white"};
        else if(percentage<33) return {backgroundColor:"black",color:"white"};
        else return {backgroundColor:"pink",color:"white"};
      }

      const getStatus=(percentage)=>{
        if(percentage>=90) return "Excellent";
        else if(percentage>=80) return "Very Good";
        else if(percentage>=70) return "Good";
        else if(percentage<33) return "Failed";
        else return "Pass";
      }
    return(
        <div className="report-container">
        {
            initialState.map((user)=>(
                <div key={user.id} className="report-card" style={getStyles(user.percentage)}>
                    <span>{user.name} {user.lastName}</span>
                    <span>{getStatus(user.percentage)}</span>
                </div>
            ))
        }    
        </div>
    )
}

export default MyListing;