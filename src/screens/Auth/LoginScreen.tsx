import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "@ui-kitten/components";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./../../graphQL/Auth/Auth.graph";
import { storeData, getData } from "./../../utils/storage";

export default function LoginScreen(props:any) {
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useMutation(LOGIN, {
    variables: {
      cellphone: "+573057199995" || cellphone,
      password: "nueva123" || password,
    },
    onCompleted: async ({ login }) => {
      await storeData(login.token, "token");
      props.navigation.navigate("Root");
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const loginForm = () => {
    login();
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Celular"
        style={styles.spaces}
        value={cellphone}
        onChangeText={(nextValue) => {
          setCellphone(nextValue);
        }}
      />

      <Input
        placeholder="Contraseña"
        style={styles.spaces}
        value={password}
        onChangeText={(nextValue) => {
          setPassword(nextValue);
        }}
      />

      <Button style={styles.spaces} onPress={() => loginForm()}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  spaces: {
    marginTop: 10,
  },
});
