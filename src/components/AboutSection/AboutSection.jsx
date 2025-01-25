import React from "react";
import Button from "../Button/Button";
import aboutSectionImage from '../../assets/images/aboutSectionImage.jpeg'
import "./AboutSection.css";

const AboutSection = (props) => {
    const value = 'About Us'
    return (
        <div className="about-section">
            <div className="about-section-content">

                <h1>{props.obj.title ? props.obj.title : value}</h1>
                <p>{props.obj.description}</p>
                {props.obj.buttonTitle && <Button buttonTitle={props.obj.buttonTitle} />}
            </div>
            <div className="about-section-image">
                <img src={props.obj?.imgSrc ? props.obj.imgSrc : aboutSectionImage}
                    alt="aboutSectionImage" />
            </div>
        </div>
    );
};

export default AboutSection;