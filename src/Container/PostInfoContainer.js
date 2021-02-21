import { connect } from "react-redux";
import PostInfo from "./PostInfo";
import { getOneArticle } from "../redux/homeReducer";

const mapStateToProps = (state) => {
    return {
        isLoading: state.homeReducer.isLoading,
        article: state.homeReducer.article,
    };
};

export default connect(mapStateToProps, {
    getOneArticle,
})(PostInfo);
