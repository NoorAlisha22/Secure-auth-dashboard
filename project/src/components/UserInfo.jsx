// import React, { useCallback, useEffect, useState } from "react";
// import Axios from "axios";
// // import { throttle } from "lodash";

// const UserInfo = () => {
//   const [data, SetData] = useState([]); 
//   const [error, SetError] = useState(null);
//   const [SearchData, SetSearchData] = useState(""); 
//   const [filteredData, SetFilteredData] = useState([]); 
//   const [departmentFilter, setDepartmentFilter] = useState(""); 
//   const [semesterFilter, setSemesterFilter] = useState("");
//   const [sortby, setSortby] = useState("Sno"); 
//   const [sortorder, setSortorder] = useState("ASC");


//   const fetchdata = async () => {
//     try {
//       const response = await Axios.post(
//         "http://127.0.0.1:8000/select",
//         null,
//         {
//           params: {
//             departmentFilter,
//             semesterFilter,
//           SearchData,
//             sortby,
//             sortorder
//           },
//         }
//       );
//       SetData(response.data.users);
//       SetFilteredData(response.data.users);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       SetError(error);
//     }
//   };


//   // const throttled = useCallback(
//   //   throttle((value) => {
//   //     fetchdata(); 
//   //   }, 700),
//   //   [departmentFilter, semesterFilter, SearchData,sortby,sortorder]
//   // );

//   useEffect(() => {
//     fetchdata();
//   },     [departmentFilter, semesterFilter, SearchData,sortby,sortorder]);

//   return (
//     <>
//     <div className="layered-wrapper">
//       <div className="layered-card">

      
//       <input
//         type="text"
//         placeholder="Search Username"
//         value={SearchData}
//         onChange={(e)=> SetSearchData(e.target.value)}
//       />

//       <select value={departmentFilter}  onChange={(e)=> setDepartmentFilter(e.target.value)}>
//         <option value="">All Departments</option>
//         <option value="CSE">CSE</option>
//         <option value="AIDS">AIDS</option>
//         <option value="MECH"> MECH</option>
//         <option value="AUTO"> AUTO</option>
//         <option value="BME">BME </option>
//       </select>
      
//       <select value={semesterFilter}  onChange={(e)=> setSemesterFilter(e.target.value)}>
//         <option value="">All Semesters</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//       </select>
//       <select value={sortby} onChange={(e)=> setSortby(e.target.value)}>
//         <option value="Sno">S_id</option>
//         <option value="Username">Username</option>
//         <option value="Password">Password</option>
//         <option value="Department">Department</option>
//         <option value="Semester">Semester</option>
//         <option value="CGPA">CGPA</option>
//       </select>
//       <select value={sortorder} onChange={(e)=> setSortorder(e.target.value)}>
//         <option value="ASC">ASC</option>
//         <option value="DESC">DESC</option>
//       </select>

//       <div className="App">
//         <h2>Users</h2>
//         <table border="2px">
//           <thead>
//             <tr>
//               <th>S_id</th>
//               <th>Username</th>
//               <th>Department</th>
//               <th>Semester</th>
//               <th>CGPA</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData && filteredData.length > 0 ? (
//               filteredData.map((user, index) => (
//                 <tr key={index}>
//                   <td>{user.Sno}</td>
//                   <td>{user.Username}</td>
//                   <td>{user.Department}</td>
//                   <td>{user.Semester}</td>
//                   <td>{user.CGPA}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6">No data available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default UserInfo;

import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./UserInfo.css"; // Add this file for custom styling

const UserInfo = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [semesterFilter, setSemesterFilter] = useState("");
  const [sortBy, setSortBy] = useState("Sno");
  const [sortOrder, setSortOrder] = useState("ASC");

  const fetchData = async () => {
    try {
      const response = await Axios.post("http://127.0.0.1:8000/select", null, {
        params: {
          departmentFilter,
          semesterFilter,
          SearchData: searchData,
          sortby: sortBy,
          sortorder: sortOrder,
        },
      });
      setData(response.data.users);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [departmentFilter, semesterFilter, searchData, sortBy, sortOrder]);

  return (
    <div className="userinfo-container">
      <h2>User Information</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search Username"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>
          <option value="">All Departments</option>
          <option value="CSE">CSE</option>
          <option value="AIDS">AIDS</option>
          <option value="MECH">MECH</option>
          <option value="AUTO">AUTO</option>
          <option value="BME">BME</option>
        </select>
        <select value={semesterFilter} onChange={(e) => setSemesterFilter(e.target.value)}>
          <option value="">All Semesters</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="Sno">S_id</option>
          <option value="Username">Username</option>
          <option value="Password">Password</option>
          <option value="Department">Department</option>
          <option value="Semester">Semester</option>
          <option value="CGPA">CGPA</option>
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S_id</th>
              <th>Username</th>
              <th>Department</th>
              <th>Semester</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((user, index) => (
                <tr key={index}>
                  <td>{user.Sno}</td>
                  <td>{user.Username}</td>
                  <td>{user.Department}</td>
                  <td>{user.Semester}</td>
                  <td>{user.CGPA}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;