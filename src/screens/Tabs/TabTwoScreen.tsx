import  React,{useEffect} from "react";
import { StyleSheet, View, ScrollView, Image,FlatList,ActivityIndicator } from "react-native";
import { ListItem,Divider, Button,Icon} from "@ui-kitten/components";
import { useQuery } from "@apollo/client";
import {LIST} from '../../graphQL/client/Client.graph';


export default function TabTwoScreen() {
  const { loading, error, data } = useQuery(LIST);

  const renderItem = ({ item, index }:any) => (
    <ListItem
      title={item.firstName}
      description={item.firstName}
    />
  );

  if (loading) return <ActivityIndicator size="small" color="#0000ff" />;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
        data &&  <FlatList
        style={{width:'100%', backgroundColor:'blue'}}
        data={data.clientsSearch.results}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        keyExtractor={(item:any) => item.id}
      />

      }

    <Button appearance='outline' status='primary'>
      Agregar
    </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
