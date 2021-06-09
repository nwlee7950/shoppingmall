import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginView = () => {
    return (
        <div>
            로그인
            <button onClick={() => {window.location.href = '/'}}>
                버어튼
            </button>
        </div>
    );
}
export default LoginView;