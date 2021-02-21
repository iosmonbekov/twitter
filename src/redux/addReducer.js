import axiosInstance from "../axiosInstance";

const SET_TITLE = "SET_TITLE";
const SET_DESCRIPTION = "SET_DESCRIPTION";
const CHANGE_LOADING = "CHANGE_LOADING";

let initialState = {
    article: [],
    title: "",
    description: "",
    isLoading: false,
};

const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.payload,
            };
        case SET_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            };

        case CHANGE_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default addReducer;

export const setTitle = (payload) => ({
    type: SET_TITLE,
    payload,
});

export const setDescription = (payload) => ({
    type: SET_DESCRIPTION,
    payload,
});

export const changeLoading = (payload) => ({
    type: CHANGE_LOADING,
    payload,
});

//Thunk

export const postArticle = (title, text) => async (dispatch) => {
    dispatch(changeLoading(true));
    const post = {
        title,
        text,
        time:
            new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getDate() +
            " " +
            new Date().getHours() +
            ":" +
            new Date().getMinutes() +
            ":" +
            new Date().getSeconds(),
    };
    await axiosInstance.post("posts.json", post);
    dispatch(setTitle(""));
    dispatch(setDescription(""));
    await dispatch(changeLoading(false));
};
