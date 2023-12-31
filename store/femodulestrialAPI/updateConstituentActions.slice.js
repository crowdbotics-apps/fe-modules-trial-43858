import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_blackbaud_constituent_update_constituent_action_partial_update = createAsyncThunk(
  "updateConstituentActions/modules_blackbaud_constituent_update_constituent_action_partial_update",
  async payload => {
    const response = await apiService.modules_blackbaud_constituent_update_constituent_action_partial_update(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const updateConstituentActionsSlice = createSlice({
  name: "updateConstituentActions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_blackbaud_constituent_update_constituent_action_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_blackbaud_constituent_update_constituent_action_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_blackbaud_constituent_update_constituent_action_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_blackbaud_constituent_update_constituent_action_partial_update,
  slice: updateConstituentActionsSlice
}
