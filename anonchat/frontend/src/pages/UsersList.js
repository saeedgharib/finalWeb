import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
// import UserTableRow from "./UserTableRow";
// import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../features/userSlice';
// import { useUsersListQuery } from "../services/appApi";
import { addUser, getUsers } from "../Api";
import { removeUser } from "../Api";
import SideBar from "./sidebar";
import { Link } from "react-router-dom";
// import { useUsersListMutation } from "../services/appApi";
const UsersList = () => {
// const {users:AllUsers} = useUsersListQuery();
// const [UsersList, { isLoading, error }] = useUsersListMutation
const [users,setUsers]=useState();
const [u,setU]=useState();
let navigate = useNavigate();
// const users = useSelector(state => state.users)
//   const dispatch = useDispatch()
const getData=async()=>{
	
	const result=getUsers();
	result.then(({ data }) => {
			setUsers(data&&data);
		
	})
	.catch((error) => {
		console.log(error);
	});
	console.log(users)
}

const removeData=async(id)=>{

	try {
		console.log(id)
		await removeUser(id).then(
			alert("Deleted Successfully")
		
			)
			// getData()
		getData()

	} catch (error) {
	}	

}

useEffect(() => {
	// axios
	// .get("http://localhost:3200/UsersList")
	// .then(({ data }) => {
	// 	setUsers(data);
	// })
	// .catch((error) => {
	// 	console.log(error);
	// });

	for (let index = 0; index < 5; index++) {
		getData();
		
	}
    
},[u]);

// const getUsers = async () => {
// 	const response = await axios.get('http://localhost:3200/UsersList', 
// 	{
// 		// headers: {
// 		// 	Authorization: `token123`
// 		// }
// 	}
// 	);
	// setUsers(response.data);
	// console.log(users);
// }

	
	 
	// setUsers((await result).data);
	// 	console.log(users)

// const DataTable = () => {
// 	return users.map((res, i) => {
// 	return <UserTableRow obj={res} key={i} />;
// 	});


return (
	<>
	<div className="col-md-6">
	<SideBar/>

	</div>
	<div className="table-wrapper" style={{maxWidth:"1215px",marginLeft:"320px"}}>
	
		<div style={{display:"flex",justifyContent:"center"}}>
		<button className="bg-primary" onClick={getData} style={{padding:"10px",borderRadius:"7px",color:"white" ,fontWeight:"bolder",marginTop:"20px",marginLeft:"26px"}}>GetUsers</button>
		<Link to="/Create">
		<button className="bg-success"style={{padding:"10px",borderRadius:"7px",color:"white" ,fontWeight:"bolder",marginTop:"20px",marginLeft:"26px"}}>AddUser</button>

		</Link>
		{/* <button className="bg-warning" onClick={7} style={{padding:"10px",borderRadius:"7px",color:"white" ,fontWeight:"bolder",marginTop:"20px",marginLeft:"26px"}}>UpdateUser</button> */}
		{/* <button className="bg-primary" onClick={4} style={{padding:"10px",borderRadius:"7px",color:"white" ,fontWeight:"bolder",marginTop:"20px",marginLeft:"26px"}}>GetStudents</button> */}

		</div>
		<br/><br/>
	{/* <Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Password</th>
			<th>dfs</th>
            
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table> */}


	<Table striped bordered hover style={{border:"2px solid black"}} >
        <thead style={{textAlign:"center"}}>
          <tr >
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
			<th>Update Details</th>
			<th>Delete</th>
          </tr>
        </thead>

        {


users && users.map((data)=>(

<tbody style={{textAlign:"center"}}>
    

<tr key={data._id}>

	<td> {data._id} </td>
  <td>{data.name}</td>
  <td>{data.email}</td>
  <td>{data.status}</td>
  <td><Link to={`/edit/${data._id}`}>
  <button className="bg-warning" style={{padding:"7px",borderRadius:"10px",color:"white",justifyContent:"center"}}><b>Update User</b></button>
  </Link>
  </td>
  <td><button className="bg-danger" style={{padding:"7px",borderRadius:"10px",color:"white"}} onClick={() =>removeData(data._id)}><b>Delete</b></button></td>
</tr>

</tbody>

))

        }
     

    
      </Table>
	</div>
	</>
);
}

export default UsersList;
