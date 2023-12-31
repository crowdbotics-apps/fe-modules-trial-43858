import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_blackbaud_event_create_event_participant_option_create = createAsyncThunk(
  "createEventParticipantOptions/modules_blackbaud_event_create_event_participant_option_create",
  async payload => {
    const response = await apiService.modules_blackbaud_event_create_event_participant_option_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const createEventParticipantOptionsSlice = createSlice({
  name: "createEventParticipantOptions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_blackbaud_event_create_event_participant_option_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_blackbaud_event_create_event_participant_option_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_blackbaud_event_create_event_participant_option_create.rejected,
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
  modules_blackbaud_event_create_event_participant_option_create,
  slice: createEventParticipantOptionsSlice
}
