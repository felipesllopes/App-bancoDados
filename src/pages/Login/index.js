import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import firebase from "../../firebaseConnection";

export default function Login() {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");

    async function logar() {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((value) => {
                alert("Bem vindo(a): " + value.user.email);
                setUser(value.user.email)
                setEmail("");
                setPassword("");
                Keyboard.dismiss();
            })
            .catch((error) => {
                alert("Usuário ou senha inválido!");
                return;
            })
    }

    async function logout() {
        firebase.auth().signOut();
        alert("Usuário deslogado")
        setUser("");
        setEmail("");
        setPassword("");
        Keyboard.dismiss();
    }


    return (
        <View style={styles.container}>

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
                title="Logar"
                onPress={logar}
            />

            <View style={{ marginBottom: 30 }} />

            <Text style={styles.usuario}>{user}</Text>



            {user ?
                (
                    <View style={{ marginVertical: 30 }}>
                        <Button
                            title="Deslogar"
                            onPress={logout}
                        />
                    </View>
                )
                :
                <Text style={styles.message}>Nenhum usuário está logado</Text>
            }

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
    usuario: {
        fontSize: 19,
        textAlign: 'center',
        marginVertical: 10,
    },
    message: {
        textAlign: 'center',
        fontSize: 18,
        color: '#777'
    },
})