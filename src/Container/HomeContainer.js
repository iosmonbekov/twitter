import { connect } from "react-redux";
import Home from "./Home";
import { getArticles } from "../redux/homeReducer";

const mapStateToProps = (state) => {
    return {
        articles: state.homeReducer.articles,
        isLoading: state.homeReducer.isLoading,
    };
};

export default connect(mapStateToProps, {
    getArticles,
})(Home);
