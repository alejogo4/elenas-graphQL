import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ListItem, Divider, Button, Icon } from "@ui-kitten/components";
import { useLazyQuery  } from "@apollo/client";
import { LIST } from "../../graphQL/client/Client.graph";
import { Ionicons } from "@expo/vector-icons";

export default function ClientListScreen(props: any) {
  const [loadClients, { called, loading, data }] = useLazyQuery(LIST,{
    fetchPolicy: "network-only"
  });

  useFocusEffect(
    useCallback(() => {
      loadClients();
    },[])
  );

  const onClickItem = (item: any) => {
    props.navigation.navigate("ClientEdit", {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      cedula: item.cedula,
      email: item.email,
      cellphone: item.cellphone,
      address: {
        city:item.city,
        streetAddress: item.address
      },
    });
  };

  function renderIcon(props: any) {
    return (
      <Ionicons size={20} style={{ marginBottom: -3 }} name="create-outline" />
    );
  }

  const renderItem = ({ item, index }: any) => (
    <ListItem
      title={item.firstName}
      description={item.firstName}
      accessoryRight={renderIcon}
      key={index}
      onPress={() => {
        onClickItem(item);
      }}
    />
  );


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        {data && (
          <FlatList
            style={styles.list}
            data={data.clientsSearch.results}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id.toString()}
          />
        )}

        {
          loading && <ActivityIndicator size="small" color="#0000ff" />
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
    marginTop: 40,
  },
  list: { width: "100%" },
  container: {},
});
