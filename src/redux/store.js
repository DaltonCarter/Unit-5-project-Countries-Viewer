import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice"
import displayedCountryReducer from "../redux/slices/displayCountrySlice"
import loadingSliceReducer from "../redux/slices/LoadingSlice"

export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
        loading: loadingSliceReducer
    },
})