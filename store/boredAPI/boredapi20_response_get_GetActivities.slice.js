import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const boredapi20_get_activity_read = createAsyncThunk(
  "boredapi20_response_get_GetActivities/boredapi20_get_activity_read",
  async payload => {
    const response = await apiService.boredapi20_get_activity_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const boredapi20_response_get_GetActivitiesSlice = createSlice({
  name: "boredapi20_response_get_GetActivities",
  initialState,
  reducers: {},
  extraReducers: {
    [boredapi20_get_activity_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [boredapi20_get_activity_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [boredapi20_get_activity_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  boredapi20_get_activity_read,
  slice: boredapi20_response_get_GetActivitiesSlice
}
