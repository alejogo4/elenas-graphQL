import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "@ui-kitten/components";
import { useMutation } from "@apollo/client";
import { storeData, getData } from "../../utils/storage";
import { CREATE } from "../../graphQL/client/Client.graph";

export default function TabOneScreen() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    cedula: "",
    email: "",
    cellphone: "",
    address: {
      city: "",
      streetAddress: "",
      cityId: 1,
      stateId: 1,
    },
  });

  const [register] = useMutation(CREATE, {
    variables: { createClientInput: form },
    onCompleted: async (data) => {
      console.log("hola", data)
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const loginForm = () => {
    register();
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Document"
        value={form.cedula}
        onChangeText={(nextValue) => {
          setForm({ ...form, cedula: nextValue });
        }}
      />
      <Input
        placeholder="First Name"
        value={form.firstName}
        onChangeText={(nextValue) => {
          setForm({ ...form, firstName: nextValue });
        }}
      />
      <Input
        placeholder="Last Name"
        value={form.lastName}
        onChangeText={(nextValue) => {
          setForm({ ...form, lastName: nextValue });
        }}
      />
      <Input
        placeholder="Mail"
        value={form.email}
        onChangeText={(nextValue) => {
          setForm({ ...form, email: nextValue });
        }}
      />
      <Input
        placeholder="Cellphone"
        value={form.cellphone}
        onChangeText={(nextValue) => {
          setForm({ ...form, cellphone: nextValue });
        }}
      />
      <Input
        placeholder="City"
        value={form.address.city}
        onChangeText={(nextValue) => {
          setForm({ ...form, address: { ...form.address, city: nextValue } });
        }}
      />
      <Input
        placeholder="Street Address"
        value={form.address.streetAddress}
        onChangeText={(nextValue) => {
          setForm({
            ...form,
            address: { ...form.address, streetAddress: nextValue },
          });
        }}
      />

      <Button onPress={() => loginForm()}>Login</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
