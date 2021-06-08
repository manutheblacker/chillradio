import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chill Radio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <iframe src="https://coderadio.freecodecamp.org"  style={{'width':'100%','height':'100%'}} scrolling="yes" ></iframe>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
