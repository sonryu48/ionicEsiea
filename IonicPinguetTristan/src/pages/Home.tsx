import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Haptics } from '@capacitor/haptics';

const Home: React.FC = () => {

    //fonction qui permet de faire vibrer l'appareil
    const hapticsNotif = async () => {
        await Haptics.vibrate();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Bienvenue</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonItem lines='none'>
                    <IonLabel>Dans cette application, vous pourrez en apprendre plus sur les pokemons grâce à l'API Tyradex</IonLabel>
                </IonItem>
                <IonItem lines='none'>
                    {/*appel de la fonction de vibration pour donner un retour a l'utilisateur au changement de page*/}
                    <IonButton routerLink='/pokemon' onClick={(e:any) => hapticsNotif()}>
                        <IonLabel>Commencer les recherches </IonLabel>
                    </IonButton>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Home;