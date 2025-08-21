import { SafeAreaView } from 'react-native-safe-area-context';
import Primeiro from './scr/components/Primeiro';
import { Button,Alert,Text,FlatList } from 'react-native';
import { useState } from 'react';
import ListaAlunos from './scr/components/ListaAlunos';

export default function App() {
  const [numero, setNumero]=useState(1)

  const teste = ()=>{
    Alert.alert("Atenção", "Sou um BOTÂO",[
      {text:"ME CLIQUE", onPress:()=>console.log("OK PRIMEIRO")},
      {text:"Sou o SEGUNDO ALERT", onPress:()=>console.log("OK SEGUNDO")}
    ],{cancelable:true})
  }

  return (
    <SafeAreaView>
      <Primeiro/>
      <Button title='Incrementar' onPress={()=>setNumero(numero+1)}/>
      <Button title='Decrementar' onPress={()=>setNumero(numero-1)}/>
      <Button title='Butão Alerte' onPress={()=>teste()}/>
      <Text>Numero:{numero}</Text>
      <FlatList
        data={ListaAlunos}
        renderItem={({item})=>{
          
          return(
          <SafeAreaView>
            <Text>{item.nome}</Text>
            <Text>{item.nFaltas}</Text>
          </SafeAreaView>
          )
          
        }}
      />
    </SafeAreaView>
  );
}


