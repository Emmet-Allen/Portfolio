import React from "react";
import {Link} from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";

function Thumbnail(props){
    return(
        <div className="Project">
            <Link to ={props.link}>
                <div className="project-image">
                    <img src={props.iamge} alt="Project Image" />
                </div>
                <div className = "project-title">{props.title}</div>
                <div className = "project-category">{props.category}</div>
            </Link>
        </div>
    );
}

export default Thumbnail; 