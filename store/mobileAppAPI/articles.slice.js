import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_articles_article_list = createAsyncThunk(
  "articles/modules_articles_article_list",
  async payload => {
    const response = await apiService.modules_articles_article_list(payload)
    return response.data
  }
)
export const modules_articles_article_create = createAsyncThunk(
  "articles/modules_articles_article_create",
  async payload => {
    const response = await apiService.modules_articles_article_create(payload)
    return response.data
  }
)
export const modules_articles_article_read = createAsyncThunk(
  "articles/modules_articles_article_read",
  async payload => {
    const response = await apiService.modules_articles_article_read(payload)
    return response.data
  }
)
export const modules_articles_article_update = createAsyncThunk(
  "articles/modules_articles_article_update",
  async payload => {
    const response = await apiService.modules_articles_article_update(payload)
    return response.data
  }
)
export const modules_articles_article_partial_update = createAsyncThunk(
  "articles/modules_articles_article_partial_update",
  async payload => {
    const response = await apiService.modules_articles_article_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_articles_article_delete = createAsyncThunk(
  "articles/modules_articles_article_delete",
  async payload => {
    const response = await apiService.modules_articles_article_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_articles_article_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_articles_article_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_articles_article_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_articles_article_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_articles_article_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_articles_article_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_articles_article_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [modules_articles_article_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  modules_articles_article_list,
  modules_articles_article_create,
  modules_articles_article_read,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_delete,
  slice: articlesSlice
}
