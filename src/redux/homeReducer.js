import { UserAPI } from "../axiosInstance";

const SET_ARTICLES = "SET_ARTICLES";
const TOGLE_LOADER = "TOGLE_LOADER";
const GET_ARTICLE = "GET_ARTICLE";

const initialState = {
    articles: [],
    isLoading: false,
    article: [],
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
            };
        case TOGLE_LOADER:
            return {
                ...state,
                isLoading: action.payload,
            };
        case GET_ARTICLE:
            return {
                ...state,
                article: [action.payload],
            };
        default:
            return state;
    }
};

export default homeReducer;

export const setUsers = (payload) => ({
    type: SET_ARTICLES,
    payload,
});
export const setLoader = (payload) => ({
    type: TOGLE_LOADER,
    payload,
});
export const setOneArticle = (payload) => ({
    type: GET_ARTICLE,
    payload,
});

//Thunks

export const getArticles = () => (dispatch) => {
    dispatch(setLoader(false));
    UserAPI.getArticles().then((response) => {
        if (response.data) {
            const articles = Object.keys(response.data).map((el) => {
                return {
                    ...response.data[el],
                    id: el,
                };
            });
            dispatch(setUsers(articles));
            dispatch(setLoader(true));
        }
    });
};

export const getOneArticle = (id) => (dispatch) => {
    dispatch(setLoader(false));
    UserAPI.getAnArticle(id).then((response) => {
        if (response.data) {
            dispatch(setOneArticle(response.data));
            dispatch(setLoader(true));
        }
    });
};

export const deleteArticle = (id) => (dispatch) => {
    dispatch(setLoader(false));
    return UserAPI.deleteAnArticle(id).then(() => {
        dispatch(setLoader(true));
    });
};
