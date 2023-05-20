import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import firebase from "../../../firebaseConnection";

export default function UsuarioLogado(props) {

    const navigation = useNavigation();
    const [email, setEmail] = useState(props.route.params.dados);

    async function logout() {
        alert("Usuário deslogado")
        await firebase.auth().signOut();
        navigation.goBack();
        setEmail("");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.tittle}>Pagina do usuário</Text>

            <Text style={styles.data}>Email: {email}</Text>

            <View style={{ marginVertical: 10, }} />

            <Button
                title="Deslogar"
                onPress={logout}
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
    data: {
        fontSize: 16,
    }
})