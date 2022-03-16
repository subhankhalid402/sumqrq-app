import {IonContent, IonPage, IonImg, IonButton,IonIcon} from '@ionic/react';
import './Welcome.scss';
import {chevronForward} from "ionicons/icons";

const Welcome: React.FC = () => {
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
                            <IonButton>Let's Start <IonIcon icon={chevronForward}/></IonButton>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Welcome;
