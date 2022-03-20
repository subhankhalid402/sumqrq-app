import {IonContent, IonPage, IonImg, IonButton,IonIcon} from '@ionic/react';
import './Welcome.scss';
import {chevronForward, chevronForwardSharp, push} from "ionicons/icons";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";

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
                            <Link to="/home">Let's Start <IonIcon icon={chevronForwardSharp}/></Link>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Welcome;
