import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//  create action
export const createUser = createAsyncThunk("createUser", async (data,{rejectWithValue}) => {
    const responce = await fetch(import.meta.env.VITE_MOCK_API,{
        method:"POST" ,
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await responce.json()
        return result ;
    } catch (error) {
        // console.log(error.message)
        return rejectWithValue(error)
    }
})
//  UPDATE action
export const editUser = createAsyncThunk("editUser", async (data,{rejectWithValue}) => {
  // console.log("updated", data)
    const responce = await fetch(`${import.meta.env.VITE_MOCK_API}/${data.id}`,{
        method:"PUT" ,
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data)
       
    });
    console.log("responce",responce)
    try {
        const result = await responce.json()
        
        return result ;
    } catch (error) {
        // console.log(error.message)
        return rejectWithValue(error)
    }
})


//read action 
export const  showUser = createAsyncThunk('showuser',async(args,{rejectWithValue})=>{
  const responce = await fetch(import.meta.env.VITE_MOCK_API);
  try {
    const result = await responce.json();
    return result
  } catch (error) {
    // console.log(error.message)
    return rejectWithValue(error)
  }
}) 

// delete action
export const deleteUser = createAsyncThunk('deleteUser', async (userId, { rejectWithValue }) => {
  const response = await fetch(`${import.meta.env.VITE_MOCK_API}/${userId}`, {
      method: 'DELETE',
  });
  try {
      const result = await response.json();
      return result;
  } catch (error) {
      return rejectWithValue(error);
  }
});

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
      users: [],
      loading: false,
      error: null,
      searchdata:[],
    },
    reducers: {
      searchUser : (state ,action) => {
        state.searchdata = action.payload
      }
    }, // You can add any additional reducers here
  
    extraReducers: (builder) => {
      builder
        .addCase(createUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(createUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users.push(action.payload);
        })
        .addCase(createUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(editUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(editUser.fulfilled, (state, action) => {
          state.loading = false;
          // console.log(state.users)
          state.users = state.users.map((item) => (
            item.id === action.payload.id ? action.payload:item
          ))
        })
        
        .addCase(editUser.rejected, (state, action) => {
          state.loading = false;
          console.error("Edit user failed:", action.error);
          state.error = action.payload;
       })
       
        .addCase(showUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(showUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(showUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(deleteUser.pending, (state) => {
          state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        // Check if action.payload exists and has the expected properties
        if (action.payload && action.payload.id) {
            // Remove the deleted user from the state
            state.users = state.users.filter(user => user.id !== action.payload.id);
        }
    })
      .addCase(deleteUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
      });
    },
  });
  
  export default userDetail.reducer;

  export const {searchUser} = userDetail.actions
  