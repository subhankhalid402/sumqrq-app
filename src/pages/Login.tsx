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


const Login: React.FC = () => {
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
                        <IonImg src={require('../assets/images/logo.png')}/>
                        <h1>Welcome Back</h1>
                        <p>Sign in to continue</p>
                    </div>
                    <div className="login-form">
                        <form>
                                <div className="email">
                                    <IonInput value={text} placeholder="Enter Email">
                                        <IonIcon icon={mailOutline}/>
                                        <IonLabel>Email</IonLabel>
                                    </IonInput>
                                </div>
                            <div className="email">
                                <IonInput value={text} placeholder="Enter Password" type="password">
                                    <IonIcon icon={lockClosedOutline}/>
                                    <IonLabel>Password</IonLabel>
                                </IonInput>
                            </div>
                            <Link to="/forgot-password">Forgotten Password</Link>
                            < IonButton onClick={()=>handleClick()}>
                                Login
                            </IonButton >
                        </form>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
