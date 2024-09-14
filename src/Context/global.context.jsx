import { createContext, useEffect, useReducer, useState } from "react";

const initialFavs = JSON.parse(localStorage.getItem("favs_dentist")) || [];

    export const initialState = {
    theme: "",
    data: [],
    favs: initialFavs,
    stateCard: "home",
    };
    const reducer = (state, action) => {
    switch (action.type) {
        case "dark":
        return { ...state, theme: "dark" };
        case "light":
        return { ...state, theme: "" };
        case "GET_DATA_DENTISTS":
        return { ...state, data: action.payload };
        case "SET_FAVS":
        return { ...state, favs: [...state.favs, action.payload] };
        case "MODIFY_FAVS":
        return { ...state, favs: action.payload };
        case "STATE_CARD":
        return { ...state, stateCard: action.payload };
        default:
        throw new Error("Error in style dark or light");
    }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        localStorage.setItem("favs_dentist", JSON.stringify(state.favs));
    }, [state.favs]);

    useEffect(() => {
        setTimeout(() => {
        getData();
        }, 2000);
    }, []);

    const getData = () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((info) => {
            dispatch({ type: "GET_DATA_DENTISTS", payload: info });
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <ContextGlobal.Provider value={{ loading, state, dispatch }}>
        {children}
        </ContextGlobal.Provider>
    );
};
