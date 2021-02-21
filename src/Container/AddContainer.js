import { connect } from "react-redux";
import Add from "./Add";
import { setTitle, setDescription, postArticle } from "../redux/addReducer";

const mapStateToProps = (state) => {
    return {
        title: state.addReducer.title,
        description: state.addReducer.description,
        isLoading: state.addReducer.isLoading,
    };
};

export default connect(mapStateToProps, {
    setTitle,
    setDescription,
    postArticle,
})(Add);
