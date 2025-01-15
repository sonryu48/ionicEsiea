import { IonAvatar, IonCheckbox, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar, IonIcon, useIonAlert, useIonLoading, IonButton, IonModal, IonToggle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Pokemons, useApiPokemon } from '../api/useApiTyradex';
import { useEffect, useState } from 'react';
import { readerOutline, personOutline, clipboardOutline, exitOutline } from 'ionicons/icons'
import { Browser } from '@capacitor/browser';

const Home: React.FC = () => {

  const { searchString } = useApiPokemon(true)

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<Pokemons[]>([])

  const [presentAlert] = useIonAlert()
  const [loading, dismiss] = useIonLoading()


  useEffect(() => {
    if (searchTerm === '') {
      setResults([])
      return
    }

    const loadData = async() => {
      await loading()
      const result: any = await searchString(searchTerm)
      console.log('result: ', result)
      await dismiss()

      if (result?.message) {
        presentAlert(result.message)
      } else {
        setResults(result.pokemons)
      }
    }
    loadData()
  }, [searchTerm])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Recherche par type</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar value={searchTerm} placeholder='feu' onIonChange={(e) => setSearchTerm(e.detail.value!)}/>

        <IonList>
          {results.map((item: Pokemons) => (
            <IonItem key={item.name.fr}>
              <IonAvatar slot='start'><IonImg src={item.sprites.regular}></IonImg></IonAvatar>
              <IonLabel>{item.name.fr}</IonLabel>
              <IonButton id={item.name.fr} fill='outline'>
                <IonIcon icon={readerOutline}/>
              </IonButton>

              <IonModal trigger={item.name.fr} initialBreakpoint={.25} breakpoints={[0, .25, .75]}>
                <IonContent className='ion-padding'>
                    <IonItem lines='none'>
                      <IonAvatar slot='start'><IonImg src={item.sprites.regular}></IonImg></IonAvatar>
                      <IonLabel>{item.name.fr}</IonLabel>
                      <IonLabel slot='end'>{item.id}</IonLabel>
                      <IonButton id={item.name.fr} fill='outline' onClick={(e:any) => Browser.open({ url: 'https://www.pokepedia.fr/' + item.name.fr})}>
                        <IonIcon icon={exitOutline}/>
                      </IonButton>
                    </IonItem>
                    <IonItem lines='none'>
                      <IonIcon icon={clipboardOutline} slot='start'/>
                      <IonLabel>{item.category}</IonLabel>
                    </IonItem>
                    <IonItem lines='none'>
                      <IonIcon icon={personOutline} slot='start'/>
                      <IonLabel>{item.height}</IonLabel>
                      <IonLabel>{item.weight}</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonList>
                        <IonItem lines='none'><IonLabel slot='start'>hp</IonLabel>{item.stats.hp}</IonItem>
                        <IonItem lines='none'><IonLabel slot='start'>atk</IonLabel>{item.stats.atk}</IonItem>
                        <IonItem lines='none'><IonLabel slot='start'>def</IonLabel>{item.stats.def}</IonItem>
                        <IonItem lines='none'><IonLabel slot='start'>vit</IonLabel>{item.stats.vit}</IonItem>
                        <IonItem lines='none'><IonLabel slot='start'>atk special </IonLabel>{item.stats.spe_atk}</IonItem>
                        <IonItem lines='none'><IonLabel slot='start'>def special </IonLabel>{item.stats.spe_def}</IonItem>
                      </IonList>
                    </IonItem>
                </IonContent>
              </IonModal>

            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
