import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter();
    const doRegister = (event:any) => {
        event.preventDefault();
        console.log('doRegister');
        router.goBack();
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Enregistrement</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput label="email" labelPlacement='floating' type='email' fill='outline'></IonInput>
                            <IonInput label="mot de passe" labelPlacement='floating' type='password' fill='outline' className="ion-margin-top"></IonInput>
                            <IonButton type='submit' expand='block' className="ion-margin-top"> Créer un compte </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Register;