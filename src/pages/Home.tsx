import React from "react";
import {
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonToolbar,
    IonAvatar,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow, IonCol
} from "@ionic/react";
import './Home.scss'
import {listOutline, scanOutline} from "ionicons/icons";

const Home: React.FC = () => {
    return (
        <div>
            <IonPage className="home-Content">
                <IonContent className="">
                    <div className="ion-Toolbar">
                        <div className="header">
                            <div className="media-body">
                                <IonAvatar>
                                    <IonImg src={require("../assets/images/media.jpg")}
                                            style={{height: "50px", width: "50px"}}/>
                                </IonAvatar>
                                <div className="media-text">
                                    <h3>Jerevon</h3>
                                    <p>Designers who love life</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="wrapper-inner">
                            <div className="states">
                                <div className="stat-1">
                                    <h5>435</h5>
                                    <p>Fans</p>
                                </div>
                                <div className="stat-1">
                                    <h5>56</h5>
                                    <p>Follow</p>
                                </div>
                                <div className="stat-1">
                                    <h5>6</h5>
                                    <p>Review</p>
                                </div>
                            </div>
                            {/*<div className="wrapper-buttons">*/}
                            {/*
                            {/*</div>*/}
                            <IonGrid className="wrapper-buttons">
                                <IonRow>
                                    <IonCol size="4">
                                        <IonButton>
                                            <div>
                                                <IonIcon icon={listOutline}/>
                                                <p>List</p>
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                    <IonCol size="4">
                                        <IonButton>
                                            <div>
                                                <IonIcon icon={scanOutline}/>
                                                <p>Scan</p>
                                            </div>
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default Home;