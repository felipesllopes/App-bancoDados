import { View, Text, StyleSheet } from "react-native";

export default function Listagem({ data }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome: {data.nome}</Text>
            <Text style={styles.text}>Cargo: {data.cargo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: 'green',
        borderWidth: 2,
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
        color: 'white',
        margin: 3,
        fontWeight: 'bold'
    }
})