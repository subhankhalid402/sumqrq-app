import {
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, IonAvatar, IonImg, IonGrid, IonRow, IonCol
} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import "./Home.scss"
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
const QrScanner: React.FC = () => {

        return (
            <div>
                <IonPage className="home-Content">
                    <IonContent className="">
                        
                    </IonContent>
                </IonPage>
            </div>
        );
    };
export default QrScanner;