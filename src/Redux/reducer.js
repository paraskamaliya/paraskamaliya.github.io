const initState = {
    theme: JSON.parse(localStorage.getItem("portfolioTheme")) || "dark"
}

export const reducer = (state = initState, { type }) => {
    switch (type) {
        case toggleTheme: {
            return { ...state, theme: "light" }
        }
        default: {
            return state;
        }
    }
} 