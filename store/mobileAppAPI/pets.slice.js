import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_pet_list = createAsyncThunk(
  "pets/api_v1_pet_list",
  async payload => {
    const response = await apiService.api_v1_pet_list(payload)
    return response.data
  }
)
export const api_v1_pet_create = createAsyncThunk(
  "pets/api_v1_pet_create",
  async payload => {
    const response = await apiService.api_v1_pet_create(payload)
    return response.data
  }
)
export const api_v1_pet_read = createAsyncThunk(
  "pets/api_v1_pet_read",
  async payload => {
    const response = await apiService.api_v1_pet_read(payload)
    return response.data
  }
)
export const api_v1_pet_update = createAsyncThunk(
  "pets/api_v1_pet_update",
  async payload => {
    const response = await apiService.api_v1_pet_update(payload)
    return response.data
  }
)
export const api_v1_pet_partial_update = createAsyncThunk(
  "pets/api_v1_pet_partial_update",
  async payload => {
    const response = await apiService.api_v1_pet_partial_update(payload)
    return response.data
  }
)
export const api_v1_pet_delete = createAsyncThunk(
  "pets/api_v1_pet_delete",
  async payload => {
    const response = await apiService.api_v1_pet_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_pet_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_pet_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_pet_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_pet_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_pet_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_pet_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_pet_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_pet_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_pet_list,
  api_v1_pet_create,
  api_v1_pet_read,
  api_v1_pet_update,
  api_v1_pet_partial_update,
  api_v1_pet_delete,
  slice: petsSlice
}
