import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {
    const router = useIonRouter();
    const doLogin = (event:any) => {
        event.preventDefault();
        router.push('/home', 'root');
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Connexion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput label="email" labelPlacement='floating' type='email' fill='outline'></IonInput>
                            <IonInput label="mot de passe" labelPlacement='floating' type='password' fill='outline' className="ion-margin-top"></IonInput>
                            <IonButton type='submit' expand='block' className="ion-margin-top"> Connexion</IonButton>
                            <IonButton routerLink='/register' type='button' expand='block' fill='clear' className="ion-margin-top">
                                Pas de compte ?
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;