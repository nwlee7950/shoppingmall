import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginView = () => {
    return (
        <div>
            로그인
            <button onClick={() => {history.push('/')}}>
                버어튼
            </button>
        </div>
    );
}
export default LoginView;