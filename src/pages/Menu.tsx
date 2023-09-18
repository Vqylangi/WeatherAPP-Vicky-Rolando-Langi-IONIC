import { 
  IonBackButton, 
  IonButtons, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonPage, 
  IonRow, 
  IonTitle, 
  IonToggle, 
  IonToolbar,
  IonFooter, 
} from '@ionic/react';
import { useContext } from 'react';
import { AppConfig } from '../Settings';
import "./profil.css";

const Menu: React.FC = () => {
  const { setting, setSettings } = useContext(AppConfig);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle className='menu'>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol className="api_key_container">
              <IonInput
                label="API KEY by OpenWeatherMap"
                labelPlacement="stacked"
                fill="outline"
                className="ion-margin-bottom"
                onIonChange={(e) => {
                  setSettings({
                    ...setting,
                    'apiKey': e.target.value
                  });
                }}
                value={setting?.apiKey}
                required={true}
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonToggle
                  justify="space-between"
                  labelPlacement="start"
                  checked={setting?.user?.auto_refetch}
                  onIonChange={(e) => setSettings({
                    ...setting,
                    'user': {
                      'auto_refetch': e.target.checked
                    }
                  })}
                >Auto Refresh</IonToggle>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar className="VRL" color={'primary'}>VL-WEATHER APP
          </IonToolbar>
        </IonFooter>
    </IonPage>
  );
};

export default Menu;
