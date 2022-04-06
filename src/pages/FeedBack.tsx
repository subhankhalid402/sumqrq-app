import React, {useState} from "react";
import {
    IonContent,
    IonImg,
    IonPage,
    IonAvatar, IonBackButton, IonIcon, IonButton, IonInput,
    IonButtons, IonList, IonItem, IonLabel, IonToast
} from "@ionic/react";
import "./ChatBox.scss";
import './FeedBack.scss'
import {arrowBackOutline, checkmark, chevronForward, informationCircle, sendSharp, ticketOutline} from "ionicons/icons";
import {useHistory} from "react-router";

const FeedBack: React.FC = () => {
    const [showToast1, setShowToast1] = useState(false);
    const [showToast2, setShowToast2] = useState(false);
    const [text, setText] = useState<string>();
    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }

    return (
        <div>
            <IonPage className="feedback">
                <div className="ion-Toolbar">
                    <div className="header">
                        <div className="media-body">
                            <IonButton slot="start" onClick={handleClick}>
                                <IonIcon icon={arrowBackOutline}/>
                            </IonButton>
                            <h3>Feedback</h3>
                            <IonAvatar style={{height: "40px", width: "40px"}}>
                                <IonImg src={require("../assets/images/media.jpg")}/>
                            </IonAvatar>
                        </div>
                    </div>
                </div>
                <IonContent className="feedback-content">
                    <div className="wrapper">
                        <div className="wrapper-inner">
                            <IonImg src={require('../assets/images/feedback.png')}/>
                            <div className="heading">
                                <h3>How was your experience</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolore </p>
                            </div>
                            <div className="user-feedback">
                               <div className="emojies">
                                   <IonButton onClick={() => setShowToast1(true)}>
                                       <IonImg src={require("../assets/images/sad (1).png")}/>
                                   </IonButton>
                                   <IonButton onClick={() => setShowToast1(true)}>
                                       <IonImg src={require("../assets/images/sad.png")}/>
                                   </IonButton>
                                   <IonButton onClick={() => setShowToast1(true)}>
                                       <IonImg src={require("../assets/images/happy (1).png")}/>
                                   </IonButton>
                                   <IonButton onClick={() => setShowToast1(true)}>
                                       <IonImg src={require("../assets/images/happy (2).png")}/>
                                   </IonButton>
                                   <IonButton onClick={() => setShowToast1(true)}>
                                       <IonImg src={require("../assets/images/in-love.png")}/>
                                   </IonButton>
                               </div>
                                <IonToast
                                    isOpen={showToast1}
                                    onDidDismiss={() => setShowToast1(false)}
                                    message="Thanks for your Feedback."
                                    duration={800}
                                />
                            </div>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default FeedBack;