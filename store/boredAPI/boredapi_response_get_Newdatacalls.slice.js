import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const boredapi_get__read = createAsyncThunk(
  "boredapi_response_get_Newdatacalls/boredapi_get__read",
  async payload => {
    const response = await apiService.boredapi_get__read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const boredapi_response_get_NewdatacallsSlice = createSlice({
  name: "boredapi_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [boredapi_get__read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [boredapi_get__read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [boredapi_get__read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  boredapi_get__read,
  slice: boredapi_response_get_NewdatacallsSlice
}
