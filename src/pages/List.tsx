import React, {useState} from "react";
import {
    IonContent,
    IonImg,
    IonPage,
    IonAvatar, IonBackButton,IonIcon, IonButton, IonInput,
    IonButtons
} from "@ionic/react";
import './ServiceList.scss';
import './List.scss'
import {arrowBackOutline, checkmark, chevronForward, ticketOutline} from "ionicons/icons";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";

const List: React.FC = () => {
    const [text, setText] = useState<string>();
    let history = useHistory();

    function handleClick() {
        history.push("/dailer");
    }
    function handleClick1() {
        history.push("/dailer");
    }

    function handleClick2() {
        history.push("/chat-box");
    }
    return (
        <div>
            <IonPage className="history-Content">
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
                            <div className="detail-cycle">
                               <IonImg src={require('../assets/images/invoice.png')}/>
                               <div className="detail-date-time">
                                   <h5>8,439</h5>
                                   <p>2021-03-12 <span>12:40 PM</span></p>
                               </div>
                            </div>
                           <div className="comments">
                               <IonInput  placeholder="Write a message"/>
                               <Link className="tick-icon" to="/chat-box">
                                       <IonIcon icon={checkmark}/>

                               </Link>

                           </div>
                            <IonButton className="cancel-queue" onClick={handleClick1}>Cancel</IonButton>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default List;