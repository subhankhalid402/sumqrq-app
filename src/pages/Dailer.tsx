import React, {useEffect, useRef, useState} from "react";
import {
    IonContent,
    IonPage, IonInput, IonItem, IonIcon, IonButton, IonAvatar, IonImg, IonLabel,
} from "@ionic/react";
import {arrowBackOutline, arrowForwardOutline, checkmark, chevronForward, ticketOutline} from "ionicons/icons";
import {useHistory} from "react-router";
import "./Dailer.scss";
const Dailer: React.FC = () => {
    const inputRef = useRef<any>(null);
    useEffect(() => {
        setTimeout(() => inputRef.current.setFocus(), 100);
    });
    let history = useHistory();

    function handleClick() {
        history.push("/details");
    }
    function handleClick2() {
        history.push("/list");
    }
    return (
        <div>
            <IonPage className="Details-Content">
                <IonContent className="">
                    <div className="ion-Toolbar">
                        <IonButton slot="start" onClick={handleClick}>
                            <IonIcon icon={arrowBackOutline}/>
                        </IonButton>
                        <div className="header">
                            <div className="media-body">
                                <IonAvatar style={{height: "50px", width: "50px"}}>
                                    <IonImg src={require("../assets/images/media.jpg")}/>
                                </IonAvatar>
                                <h3>Alison Denis</h3>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-inner">
                            <div className="main">
                                <IonLabel>Phone Number:</IonLabel>
                                <IonItem className="dailer" lines="none">
                                    <IonInput ref={(ref) => inputRef.current = ref} placeholder='Enter Your Number'
                                              inputMode="tel" autofocus={true}/>
                                </IonItem>
                                <IonButton className="generate-btn" onClick={handleClick2}>Generate</IonButton>
                            </div>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default Dailer;