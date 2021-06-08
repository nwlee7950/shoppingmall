import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeView = () => {
    return (
        <div>
            홈
            <button onClick={() => {window.location.href = '/login'}}>
                버어튼
            </button>
        </div>
    );
}
export default HomeView;