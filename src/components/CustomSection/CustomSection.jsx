import React from "react";
import customSectionImage from '../../assets/images/customSectionImage.jpeg'
import "./CustomSection.css";
import CustomButton from "../Button/Button"

const CustomSection = () => {
    return (
        <div>
            <div className="custom-container">
                <div className="custom">
                    <div className="custom-left">
                        <img src={customSectionImage} alt="customSolution" />
                    </div>
                    <div className="custom-right">
                        <h1>Custom IT Solutions for your Business.</h1>
                        <p>Refers to tailored technology services designed specifically to meet the unique needs of a business. These solutions can include software development, system integration, cloud services, and IT consulting, all customized to enhance productivity, streamline operations, and support business growth. By focusing on a business's specific goals and challenges, custom IT solutions provide more flexibility, scalability, and efficiency with technology built around their exact needs.</p>
                        <CustomButton buttonTitle='learn more' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CustomSection;