import { connect, Connect } from "react-redux";
import Dashboard from "../components/Dashboard";

const mapStateToProps = (state) => {
    return{
        positions: state.positions 
    }
}

export default connect(mapStateToProps)(Dashboard); 