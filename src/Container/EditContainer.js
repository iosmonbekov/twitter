import { connect } from "react-redux";
import Edit from "./Edit";
import {
    getArticle,
    setDescription,
    setTitle,
    putArticle,
} from "../redux/addReducer";

const mapStateToProps = (state) => {
    return {
        title: state.addReducer.title,
        description: state.addReducer.description,
        article: state.addReducer.article,
    };
};

export default connect(mapStateToProps, {
    getArticle,
    setDescription,
    setTitle,
    putArticle,
})(Edit);
