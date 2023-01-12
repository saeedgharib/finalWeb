import axios from 'axios';

// const instance = axios.create({
//     baseURL: `http://localhost:3200`,
// });

// export default instance;

const url=`http://localhost:3200`;


// Signup and Login Apis

export const signupUser = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user);
        
    } catch (error) {
        console.log("Error in calling Signup Api")
    }
}

export const loginUser = async(user)=>{
    try {
        return await axios.post(`${url}/login`,user);
        
    } catch (error) {
        console.log("Error in Calling Login Api")
    }
}













//  ApiCalls from Admin Panel

export const getUsers=async()=>{
    try {
        return await axios.get(`${url}/UsersList`)
        
    } catch (error) {
        console.log("Error in Calling getUsers Api");
    }
    
 }

    // Get All Rooms 
 export const getAllRooms=async()=>{
    try {
        
        return await axios.get(`${url}/Rooms`)
    } catch (error) {
        console.log("Error in calling getAllRooms Api");
    }
}

    // Add Rooms

    export const addRoom = async (room) => {
        try {
            return await axios.post(`${url}/addRoom`, room);
            
        } catch (error) {
            console.log("Error in Calling AddRoom Api");
        }
    }


    export const removeRoom=async(id)=>{
        try {
            return await axios.delete(`${url}/Rooms`,id);
        } catch (error) {
            console.log("Error in calling removeUser Api");
        }
    }
    // get single User
export const getUser=async(id)=>{
    try {
        return await axios.get(`${url}/edit/${id}`);
        
    } catch (error) {
        console.log("error in calling api");
    }
    
 }

    // Edit User
 export const editUser = async (user, id) => {
    try {
        return await axios.put(`${url}/edit/${id}`,user)
    } catch (error) {
        console.log("error in calling api");
    }
  
}

    // Add User 
export const addUser = async (user) => {
    try {
        return await axios.post(`${url}/Create`, user);
        
    } catch (error) {
        console.log("Error in Calling AddUser Api");
    }
}


    // Delete User
export const removeUser=async(id)=>{
    try {
        return await axios.delete(`${url}/UsersList`,[{
            _id:id
        }]);
    } catch (error) {
        console.log("Error in calling removeUser Api");
    }
    
  
 }