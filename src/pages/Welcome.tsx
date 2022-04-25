import {IonContent, IonPage, IonImg, IonButton, IonIcon, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Welcome.scss';
import {chevronForward, chevronForwardSharp, push} from "ionicons/icons";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import React from "react";

const Welcome: React.FC = () => {
    let history= useHistory();
    function handleClick() {
        history.push("/home");
    }
    return (
        <IonPage>
            <IonContent fullscreen className="welcome-content">
                <div className="main-wrapper">
                    <div className="banner">
                        <IonImg src={require('../assets/images/banner.png')} alt="Hello"/>
                    </div>
                    <div className="content">
                        <div className="content-inner">
                            <h1>Let's connect<br/>with each other</h1>
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet
                           </p>
                            <IonGrid className="wrapper-buttons">
                                <IonRow>
                                    <IonCol size="6" className="history-list">
                                        <IonButton>
                                            <div>
                                                <IonImg src={require("../assets/images/scan.png")}/>
                                                <p>Scan</p>
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                    <IonCol size="6" className="history-list">
                                        <IonButton>
                                            <div>
                                                <IonImg src={require("../assets/images/login.png")}/>
                                                <p>Login</p>
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Welcome;
