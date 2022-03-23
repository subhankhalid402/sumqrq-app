import React from "react";
import {
    IonContent,
    IonImg,
    IonPage,
    IonAvatar, IonList, IonItem, IonLabel, IonIcon, IonButton,

} from "@ionic/react";
import './History.scss'

const History: React.FC = () => {
    return (
        <div>
            <IonPage className="history-Content">
                <IonContent className="">
                    <div className="ion-Toolbar">
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
                            <IonList>
                                <div className="history-list">
                                    <h1>January 2022</h1>
                                    <IonItem>
                                        <div className="list">
                                            <div className="inner-ticket">
                                                <div className="date">
                                                    <p>Jan</p>
                                                    <h5>13</h5>
                                                </div>
                                                <IonImg src={require("../assets/images/invoice.png")}/>
                                                <div className="ticket-details">
                                                    <h4>Status</h4>
                                                    <p>Ticket Id</p>
                                                </div>
                                            </div>
                                            <span>Served</span>
                                        </div>
                                    </IonItem>
                                    <IonItem>
                                        <div className="list">
                                            <div className="inner-ticket">
                                                <div className="date">
                                                    <p>Jan</p>
                                                    <h5>13</h5>
                                                </div>
                                                <IonImg src={require("../assets/images/invoice.png")}/>
                                                <div className="ticket-details">
                                                    <h4>Status</h4>
                                                    <p>Ticket Id</p>
                                                </div>
                                            </div>
                                            <span>Served</span>
                                        </div>
                                    </IonItem>
                                    <IonItem>
                                        <div className="list">
                                            <div className="inner-ticket">
                                                <div className="date">
                                                    <p>Jan</p>
                                                    <h5>13</h5>
                                                </div>
                                                <IonImg src={require("../assets/images/invoice.png")}/>
                                                <div className="ticket-details">
                                                    <h4>Status</h4>
                                                    <p>Ticket Id</p>
                                                </div>
                                            </div>
                                            <span>Served</span>
                                        </div>
                                    </IonItem>
                                    <IonItem>
                                        <div className="list">
                                            <div className="inner-ticket">
                                                <div className="date">
                                                    <p>Jan</p>
                                                    <h5>01</h5>
                                                </div>
                                                <IonImg src={require("../assets/images/invoice.png")}/>
                                                <div className="ticket-details">
                                                    <h4>Status</h4>
                                                    <p>Ticket Id</p>
                                                </div>
                                            </div>
                                            <span>Served</span>
                                        </div>
                                    </IonItem>
                                </div>
                            </IonList>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default History;