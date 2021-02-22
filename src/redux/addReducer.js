import axiosInstance from "../axiosInstance";

const SET_TITLE = "SET_TITLE";
const SET_DESCRIPTION = "SET_DESCRIPTION";
const CHANGE_LOADING = "CHANGE_LOADING";
const SET_ARTICLE = "SET_ARTICLE";
const EDIT_ARTICLE = "EDIT_ARTICLE";

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
        case SET_ARTICLE:
            return {
                ...state,
                article: [action.payload],
            };
        case EDIT_ARTICLE:
            return {
                ...state,
                article: state.article.map((el) => {
                    el.title = state.title;
                    el.text = state.description;
                    return el;
                }),
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

export const setArticle = (payload) => ({
    type: SET_ARTICLE,
    payload,
});

export const editArticle = () => ({
    type: EDIT_ARTICLE,
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

export const getArticle = (id) => (dispatch) => {
    dispatch(changeLoading(true));

    axiosInstance.get("posts/" + id + ".json").then((response) => {
        if (response.data) {
            dispatch(setArticle(response.data));
            dispatch(setTitle(response.data.title));
            dispatch(setDescription(response.data.text));
            dispatch(changeLoading(false));
        }
    });
};

export const putArticle = (id, post) => async (dispatch) => {
    dispatch(changeLoading(true));
    dispatch(editArticle());
    dispatch(setTitle(""));
    dispatch(setDescription(""));
    await axiosInstance.put("posts/" + id + ".json", post);
    await dispatch(changeLoading(false));
};
