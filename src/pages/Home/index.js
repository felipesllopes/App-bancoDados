import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.tittle}>Página Home</Text>

            <Button
                style={styles.button}
                title="Cadastrar usuário"
                onPress={() => navigation.navigate('Cadastro')}
            />

            <Text />

            <Button
                style={styles.button}
                title="Autenticação de usuário"
                onPress={() => navigation.navigate('Autenticacao')}
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
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    button: {
        marginVertical: 10,
        paddingVertical: 10
    },
})