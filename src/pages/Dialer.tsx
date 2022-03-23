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
import React from 'react';
// import "Home.scss"
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {useHistory} from "react-router";
class Scanner extends React.Component {
    state = {
        stringEncoded: '',
        encodeResponse: 'Hello World',
        dataEncode: ''
    };

    handleChange = (e: any) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value }
        );
        console.log(this.state);
    };

    render() {

        const dataToScan = async () => {
            const data = await BarcodeScanner.scan();
            alert(JSON.stringify(data));
            this.setState({ stringEncoded: data.text })
        };
        const createCode = () => {
            BarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, this.state.encodeResponse)
                .then(data => {
                    console.log(data);
                }, error => {
                    console.log("Error : " + error);
                });
        };

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
                                        <IonCol size="6">
                                            <IonButton  onClick={dataToScan}>
                                                <div>
                                                    <IonImg src={require("../assets/images/sanner.png")}/>
                                                    <p>Scan</p>
                                                </div>
                                            </IonButton>
                                        </IonCol>
                                        <IonCol size="6">
                                            <IonButton>
                                                <div>
                                                    <IonImg src={require("../assets/images/list.png")} style={{width:"54px", height:"54px" }}/>
                                                    <p>History</p>
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
        );
    }
};
export default Scanner;