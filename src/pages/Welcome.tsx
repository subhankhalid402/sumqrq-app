import {IonContent, IonPage, IonImg, IonButton,IonIcon} from '@ionic/react';
import './Welcome.scss';
import {chevronForward, push} from "ionicons/icons";
import {useHistory} from "react-router";

const Welcome: React.FC = () => {
    let history= useHistory();
    function handleClick() {
        history.push("/home");
    }
    return (
        <IonPage>
            <IonContent fullscreen className="welcome-content">
                <div className="main-wrapper">
                    <div className="banner">
                        <IonImg src={require('../assets/images/banner.png')} alt="Hello"/>
                    </div>
                    <div className="content">
                        <div className="content-inner">
                            <h1>Let's connect<br/>with each other</h1>
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet
                           </p>
                            <IonButton onClick={handleClick}>Let's Start <IonIcon icon={chevronForward}/></IonButton>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Welcome;
