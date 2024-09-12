import { createContext, useEffect, useReducer, useState } from "react";

export const initialState = { theme: "", data: [] };
const reducer = (state, action) => {
    switch (action.type) {
        case "dark":
            return { ...state, theme: "dark" };
        case "light":
            return { ...state, theme: "" };
        case "GET_DATA_DENTISTS":
            return { ...state, data: action.payload };
        default:
    throw new Error("Error in style dark or light");
    }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [state, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        getData();
        }, 0);
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
