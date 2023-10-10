import { TOGGLE } from "./actionType";

const initState = {
    theme: JSON.parse(localStorage.getItem("portfolioTheme")) || "dark"
}

export const reducer = (state = initState, { type }) => {
    switch (type) {
        case TOGGLE: {
            const val = state.theme === "dark" ? "light" : "dark"
            localStorage.setItem("portfolioTheme", JSON.stringify(val))
            return { ...state, theme: val }
        }
        default: {
            return state;
        }
    }
} 