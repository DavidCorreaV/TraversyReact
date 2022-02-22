import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com";

export const GithubProvider = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: [],
    };
    const setLoading = () => dispatch({ type: "SET_LOADING" });
    const [state, dispatch] = useReducer(githubReducer, initialState);

    const searchUsers = async(text) => {
        setLoading();
        const params = new URLSearchParams({ q: text });

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`);

        const { items } = await response.json();

        dispatch({ type: "GET_USERS", payload: items });
    };
    const getUser = async(login) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${login}`);

        if (response.status === 404) {
            window.location = "/notfound";
        } else {
            const data = await response.json();

            dispatch({ type: "GET_USER", payload: data });
        }
    };
    const getRepos = async(user) => {
        setLoading();

        const params = new URLSearchParams({ sort: 'created', per_page: 3 });
        const response = await fetch(`${GITHUB_URL}/users/${user}/repos?${params}`);


        const repos = await response.json();

        dispatch({ type: "GET_REPOS", payload: repos });
    };

    const clearUsers = async() => {
        dispatch({ type: "CLEAR_USERS" });
    };
    return ( <GithubContext.Provider value = {
            {
                user: state.user,
                users: state.users,
                loading: state.loading,
                getUser,
                getRepos,
                searchUsers,
                clearUsers,
                repos: state.repos,
            }
        } >
        { children }  
        </GithubContext.Provider>
    );
};

export default GithubContext;