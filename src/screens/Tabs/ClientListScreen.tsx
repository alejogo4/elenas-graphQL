import  React,{useEffect} from "react";
import { StyleSheet, View, ScrollView, Image,FlatList,ActivityIndicator } from "react-native";
import { ListItem,Divider, Button,Icon} from "@ui-kitten/components";
import { useQuery } from "@apollo/client";
import {LIST} from '../../graphQL/client/Client.graph';
import { Ionicons } from "@expo/vector-icons";

export default function TabTwoScreen() {
  const { loading, error, data } = useQuery(LIST);

  function renderIcon(props:any) {
    return <Ionicons size={20} style={{ marginBottom: -3 }} name="create-outline" />;
  }
  
  const renderItem = ({ item, index }:any) => (
    <ListItem
      title={item.firstName}
      description={item.firstName}
      accessoryRight={renderIcon}
    />
  );

  if (loading) return <ActivityIndicator size="small" color="#0000ff" />;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>

      
      {
        data &&  <FlatList
        style={{width:'100%', backgroundColor:'blue'}}
        data={data.clientsSearch.results}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        keyExtractor={(item:any) => item.id}
      />

      }

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content:{
    paddingHorizontal:10
  },
  container: {
    
  },
});
