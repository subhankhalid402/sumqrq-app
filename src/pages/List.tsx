import React, {useState} from "react";
import {
    IonContent,
    IonImg,
    IonPage,
    IonAvatar, IonList, IonItem, IonLabel, IonIcon, IonButton, IonInput,

} from "@ionic/react";
import './History.scss';
import './List.scss'
import {checkmark, chevronForward, ticketOutline} from "ionicons/icons";

const List: React.FC = () => {
    const [text, setText] = useState<string>();
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
                            <div className="detail-cycle">
                                <IonIcon icon={ticketOutline}/>
                               <div className="detail-date-time">
                                   <h5>8,439</h5>
                                   <p>2021-03-12 <span>12:40 PM</span></p>
                               </div>
                            </div>
                           <div className="comments">
                               <IonInput  placeholder="Write a message"/>
                               <div className="tick-icon">
                                   <IonIcon icon={checkmark}/>
                               </div>
                           </div>
                            <IonButton className="cancel-queue">Cancel</IonButton>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default List;