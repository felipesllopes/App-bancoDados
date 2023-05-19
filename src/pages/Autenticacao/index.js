import { View, Text, Button, StyleSheet } from "react-native";

export default function Autenticacao() {
    return (
        <View style={styles.container}>
            <Text>Página Autenticação</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
})