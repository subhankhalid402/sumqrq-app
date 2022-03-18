import React from "react";
import {
    IonContent,
    IonImg,
    IonPage,
    IonAvatar, IonList, IonItem, IonLabel, IonIcon, IonButton,

} from "@ionic/react";
import './History.scss';
import {chevronForwardOutline, person, personOutline} from "ionicons/icons";
import {Link} from "react-router-dom";

const History: React.FC = () => {
    return (
        <div>
            <IonPage className="history-Content">
                <IonContent className="">
                    <div className="ion-Toolbar">
                        <div className="header">
                            <div className="media-body">
                                <IonAvatar style={{height: "80px", width: "80px"}}>
                                    <IonImg src={require("../assets/images/media.jpg")}/>
                                </IonAvatar>
                                <h3>Alison Denis</h3>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-inner">
                            <IonList>
                                <IonItem lines="none">
                                    <Link to="/list">
                                        <div className="services">
                                            <div className="person-icon">
                                                <IonIcon icon={person}/>
                                            </div>
                                            <p>Services</p>
                                        </div>
                                        <IonIcon icon={chevronForwardOutline}/>
                                    </Link>
                                </IonItem>
                                <IonItem lines="none">
                                    <Link to="/list">
                                        <div className="services">
                                            <div className="person-icon">
                                                <IonIcon icon={person}/>
                                            </div>
                                            <p>Services</p>
                                        </div>
                                        <IonIcon icon={chevronForwardOutline}/>
                                    </Link>
                                </IonItem>
                                <IonItem lines="none">
                                    <Link to="/list">
                                        <div className="services">
                                            <div className="person-icon">
                                                <IonIcon icon={person}/>
                                            </div>
                                            <p>Services</p>
                                        </div>
                                        <IonIcon icon={chevronForwardOutline}/>
                                    </Link>
                                </IonItem>
                                <IonItem lines="none">
                                    <Link to="/list">
                                        <div className="services">
                                            <div className="person-icon">
                                                <IonIcon icon={person}/>
                                            </div>
                                            <p>Services</p>
                                        </div>
                                        <IonIcon icon={chevronForwardOutline}/>
                                    </Link>
                                </IonItem>
                            </IonList>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default History;