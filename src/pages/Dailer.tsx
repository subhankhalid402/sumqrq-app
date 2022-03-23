import React, {useState} from "react";
import {
    IonContent,
    IonPage, IonInput,
} from "@ionic/react";
import {arrowBackOutline, checkmark, chevronForward, ticketOutline} from "ionicons/icons";

const Dailer: React.FC = () => {
    return (
        <div>
            <IonPage className="Dialer">
                <IonContent className="">
                    <IonInput placeholder="Enter Number" autofocus={true} inputMode="tel"/>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default Dailer;