import {
    IonContent,
    IonPage,
    IonImg,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    useIonAlert
} from '@ionic/react';
import {useHistory} from "react-router";
import './Login.scss';
import {useState} from "react";
import {lockClosedOutline, mail, mailOutline} from "ionicons/icons";
import {Link} from "react-router-dom";

const ForgetPassword: React.FC = () => {
    const [present] = useIonAlert();
    const [text, setText] = useState<string>();
    let history= useHistory();
    function handleClick() {
        history.push("/home");
    }
    return (
        <IonPage>
            <IonContent fullscreen className="login-content">
                <div className="login-wrapper">
                    <div className="login-banner">
                        <IonImg src={require('../assets/images/forgot.png')}/>
                        <h1>Forgot Password</h1>
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="email">
                                <IonInput value={text} placeholder="Enter Password" type="password">
                                    <IonIcon icon={lockClosedOutline}/>
                                    <IonLabel>Forgot Password</IonLabel>
                                </IonInput>
                            </div>
                            <Link to='/login'>Back to Login</Link>
                            <IonButton>
                                Forgot
                            </IonButton>
                        </form>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ForgetPassword;
