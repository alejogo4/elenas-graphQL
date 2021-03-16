import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View, ToastAndroid } from "react-native";
import { Input, Button } from "@ui-kitten/components";
import { useMutation } from "@apollo/client";
import { CREATE, EDIT } from "../../graphQL/client/Client.graph";

const initialState = {
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
};

export default function ClientEditScreen(props: any) {
  const [edited, setEdited] = useState(false);
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (props.route?.params?.id) {
      let params: any = { ...props.route?.params };
      delete params["id"];
      setForm({ ...form, ...params });
      setEdited(true);
    }
  }, [props.route?.params]);

  useFocusEffect(
    useCallback(() => {
      return () => setForm(initialState);
    }, [props.route?.params])
  );

  const [create] = useMutation(CREATE, {
    variables: { createClientInput: form },
    onCompleted: async (data) => {
      ToastAndroid.show("Client Created Successfull!", ToastAndroid.SHORT);
    },
    onError: (e) => {
      ToastAndroid.show(`Error ${e}`, ToastAndroid.SHORT);
    },
  });

  const [edit] = useMutation(EDIT, {
    variables: {
      updateClientId: props.route?.params?.id,
      updateClientInput: form,
    },
    onCompleted: async (data) => {
      ToastAndroid.show("Client Edited Successfull!", ToastAndroid.SHORT);
    },
    onError: (e) => {
      ToastAndroid.show(`Error ${e}`, ToastAndroid.SHORT);
    },
  });

  const OnClientClient = () => {
    edited ? edit() : create();
    setForm(initialState);
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

      <Button style={styles.button} onPress={() => OnClientClient()}>
        {edited ? "Edit Client" : "Create Client"}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 25,
  },
});
