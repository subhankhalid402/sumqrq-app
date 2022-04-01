import React, {useState} from "react";
import {
    IonContent,
    IonImg,
    IonPage,
    IonAvatar, IonBackButton, IonIcon, IonButton, IonInput,
    IonButtons, IonList, IonItem, IonLabel
} from "@ionic/react";
import "./ChatBox.scss"
import {arrowBackOutline, checkmark, chevronForward, sendSharp, ticketOutline} from "ionicons/icons";
import {useHistory} from "react-router";

const ChatBox: React.FC = () => {
    const [text, setText] = useState<string>();
    let history = useHistory();

    function handleClick() {
        history.push("/dailer");
    }
    function handleClick1() {
        history.push("/dailer");
    }
    return (
        <div>
            <IonPage className="chat-content">
                <div className="ion-Toolbar">
                    <div className="header">
                        <div className="media-body">
                            <IonButton slot="start" onClick={handleClick}>
                                <IonIcon icon={arrowBackOutline}/>
                            </IonButton>
                            <h3>Alison Denis</h3>
                            <IonAvatar style={{height: "40px", width: "40px"}}>
                                <IonImg src={require("../assets/images/media.jpg")}/>
                            </IonAvatar>
                        </div>
                    </div>
                </div>
                <IonContent className="">

                    <div className="wrapper">
                        <div className="wrapper-inner">
                            <div className="chat-body">
                                <>
                                    <div className="message receive">
                                        Hi Alan
                                    </div>
                                    <div className="message receive">
                                        I am Jason, here to help  you find new friends
                                    </div>
                                    <div className="message receive">
                                       Are you sure to find friends
                                    </div>
                                    <div className="message send">
                                        Photography
                                    </div>

                                </>
                            </div>
                            <div className="chat-footer">
                                <div className="input-group">
                                    <IonInput className="custom-input" type="text"
                                              placeholder="Type Message"> </IonInput>

                                    <IonButton onClick={() => {
                                        // handleSendMessage();
                                    }}>
                                        <IonIcon slot="icon-only" icon={sendSharp}/>
                                    </IonButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default ChatBox;