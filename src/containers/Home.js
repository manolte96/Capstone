import { connect, Connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state) => {
    return{
        positions: state.positions,
        username: state.username,
        email: state.email
    }
}

export default connect(mapStateToProps)(Home); 