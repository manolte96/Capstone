import { combineReducers } from "redux";

const user = (state = null) => state;

const positions = (state = []) => state;
const username = (state = "") => state;
const email = (state = "") => state;

export default combineReducers({ user, positions, username, email });