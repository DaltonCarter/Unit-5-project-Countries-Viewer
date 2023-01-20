import { createSlice } from "@reduxjs/toolkit";
import initialCountry from "../../assets/initialCountry"

export const displayCountriesSlice = createSlice({
    name: "displayCountry",
    initialState: {
        value: initialCountry,
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value = action.payload
        },
        deleteDisplayCountry: (state) => {
            state.value = null
        }
    }
})

export const {setDisplayCountry, deleteDisplayCountry} = displayCountriesSlice.actions

export const selectDisplay = (state) => state.displayedCountry.value

export default displayCountriesSlice.reducer