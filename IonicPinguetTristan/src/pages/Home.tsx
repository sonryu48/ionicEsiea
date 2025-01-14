import { IonAvatar, IonCheckbox, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar, IonIcon, useIonAlert, useIonLoading, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Pokemons, useApi } from '../api/useApiTyradex';
import { useEffect, useState } from 'react';
import { reader } from 'ionicons/icons'

const Home: React.FC = () => {

  const { searchType } = useApi()

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
      const result: any = await searchType(searchTerm)
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
        <IonToolbar>
          <IonTitle>Tyradex</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar value={searchTerm} onIonChange={(e) => setSearchTerm(e.detail.value!)}/>
        <IonList>
          {results.map((item: Pokemons) => (
            <IonItem key={item.pokedexId}>
              <IonAvatar slot='start'><IonImg src={item.sprites.regular}></IonImg></IonAvatar>
              <IonLabel>{item.name.fr}</IonLabel>
              <IonIcon icon={reader}/>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
