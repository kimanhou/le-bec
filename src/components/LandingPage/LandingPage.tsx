import React from "react";
import "./LandingPage.scss";
import backgroundImage from "../../images/LE-BEC_dessin-aquarelle-epicerie.jpg";

interface ILandingPageProps {
    className?: string;
}

export const LandingPage: React.FC<ILandingPageProps> = (props) => {
    return (
        <div id="landing-page" className={props.className}>
            <div className="landing-page-child landing-page-dark-green"></div>
            <div
                className="landing-page-child landing-page-pattern"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                LE BEC
            </div>
        </div>
    );
};
