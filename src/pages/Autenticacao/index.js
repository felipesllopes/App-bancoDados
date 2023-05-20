import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Keyboard } from "react-native";
import firebase from "../../firebaseConnection";

export default function Autenticacao() {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value) => {
                alert("Usuário criado: " + value.user.email);
                Keyboard.dismiss();

            }).catch((error) => {
                if (error.code === "auth/weak-password") {
                    alert("Sua senha deve ter pelo menos 6 caracteres");
                    return;
                }
                if (error.code === "auth/invalid-email") {
                    alert("Email inválido");
                    return;
                }
                else {
                    alert("Algo deu errado!");
                    return;
                }
            })

        setEmail("");
        setPassword("");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.tittle}>Autenticar usuário</Text>

            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid={'transparent'}
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />

            <Text style={styles.text}>Senha</Text>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid={'transparent'}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />

            <View style={{ marginBottom: 10 }} />

            <Button
                title="Cadastrar"
                onPress={cadastrar}
            />

            <View style={{ marginBottom: 30 }} />

            <Button
                color={"#555"}
                title="Voltar"
                onPress={() => navigation.goBack()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    tittle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'green',
        textAlignVertical: 'center',
        height: 50,
        width: '70%',
        alignSelf: 'center',
        borderRadius: 4,
        color: 'white',
        marginTop: 15,
        marginBottom: 25,
    },
    text: {
        fontSize: 18,
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 2,
        width: '80%',
        borderRadius: 4,
        padding: 6,
        fontSize: 17,
        marginBottom: 10,
    },
})