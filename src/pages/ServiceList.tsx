import React, {useEffect, useState} from "react";
import {
    IonContent,
    IonImg,
    IonPage,
    IonAvatar, IonList, IonItem, IonLabel, IonIcon, IonButton, useIonViewWillEnter,

} from "@ionic/react";
import './ServiceList.scss';
import {arrowBackOutline, chevronForwardOutline, person, personOutline} from "ionicons/icons";
import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

const ServiceList: React.FC = () => {

    const [text, setText] = useState<string>();
    const [raheel, setRaheel] = useState({
        value: '',
        name: ''
    });
    const  handleChange = (e: any) => {
        const { value, name } = e.target;
        setRaheel(e.target);
    };


    useIonViewWillEnter(()=>{
        const dataToScan = async () => {
            try{

                if (window.navigator.platform.match("android")) {
                    // You are on a device, cordova plugins are accessible
                    const data = await BarcodeScanner.scan();
                    alert(JSON.stringify(data));
                 
                    //this.setState({ stringEncoded: data.text })
                  } else {
                    // Cordova not accessible, add mock data if necessary
                    console.log('data')
                  }
            }catch(err){
                console.log(err);
            }
        };
        dataToScan();
    },[]);
    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }
    return (
        <div>
            <IonPage className="Details-Content">
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
                            <IonList>
                                <IonItem lines="none">
                                    <Link to="/dailer">
                                        <div className="services">
                                            <div className="person-icon">
                                                <IonIcon icon={person}/>
                                            </div>
                                            <p>Services</p>
                                        </div>
                                        <IonIcon icon={chevronForwardOutline}/>
                                    </Link>
                                </IonItem>
                                <IonItem lines="none">
                                    <Link to="/list">
                                        <div className="services">
                                            <div className="person-icon">
                                                <IonIcon icon={person}/>
                                            </div>
                                            <p>Services</p>
                                        </div>
                                        <IonIcon icon={chevronForwardOutline}/>
                                    </Link>
                                </IonItem>
                                <IonItem lines="none">
                                    <Link to="/list">
                                        <div className="services">
                                            <div className="person-icon">
                                                <IonIcon icon={person}/>
                                            </div>
                                            <p>Services</p>
                                        </div>
                                        <IonIcon icon={chevronForwardOutline}/>
                                    </Link>
                                </IonItem>
                                <IonItem lines="none">
                                    <Link to="/list">
                                        <div className="services">
                                            <div className="person-icon">
                                                <IonIcon icon={person}/>
                                            </div>
                                            <p>Services</p>
                                        </div>
                                        <IonIcon icon={chevronForwardOutline}/>
                                    </Link>
                                </IonItem>
                            </IonList>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
};
export default ServiceList;