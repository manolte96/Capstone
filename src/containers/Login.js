import { connect, Connect } from "react-redux";
import Login from "../components/Login";

const mapStateToProps = (state) => {
    return{
        positions: state.positions,
        username: state.username,
        email: state.email
    }
}

export default connect(mapStateToProps)(Login); 