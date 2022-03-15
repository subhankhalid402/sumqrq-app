import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className="main-wrapper">
              <div className="banner">
                  <div className="banner-inner">
                      <IonImg src={require('../assets/images/banner.png')} alt="Hello"/>
                  </div>
              </div>
              <div className="content">
                  <div className="content-inner">

                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
