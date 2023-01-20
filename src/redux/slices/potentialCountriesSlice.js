import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
    name: "potentialCountries",
    initialState: {
        value: [
            {
                name: {
                    common: "this is...SOMETHING...I think.",
                }
            }
        ]
    },
    reducers: {
        setpotentialCountries: (state, action) => {
            state.value = action.payload
        },
        deletePotentialCountries: (state) => {
            state.value = null
        }
    }
})

export const {setpotentialCountries, deletePotentialCountries} =
    potentialCountriesSlice.actions

export const selectPotentials = (state) => state.potentialCountries.value

export default potentialCountriesSlice.reducer