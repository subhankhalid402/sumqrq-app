import React, {useState} from "react";
import {
    IonContent,
    IonImg,
    IonPage,
    IonAvatar, IonBackButton, IonIcon, IonButton, IonInput,
    IonButtons, IonList, IonItem, IonLabel
} from "@ionic/react";
import "./ChatBox.scss"
import {arrowBackOutline, checkmark, chevronForward, ticketOutline} from "ionicons/icons";
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
                <IonContent className="">
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
                    <div className="wrapper">
                        <div className="wrapper-inner">
                           <div className="chat-box">
                               <ul>
                                   <li><span>I am Jason, here to help you fond new friends</span></li>
                               </ul>
                           </div>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default ChatBox;