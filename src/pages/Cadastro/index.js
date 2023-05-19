import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import firebase from "../../firebaseConnection";
import Listagem from "./Listagem";

export default function Cadastro() {

    const navigation = useNavigation();

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {

            // Criar um nó
            // await firebase.database().ref('tipo').set('Cliente');

            // Remover um nó
            // await firebase.database().ref('tipo').remove();

            // Adicionar item
            // await firebase.database().ref('usuarios').child(3).set({
            //     nome: 'Gustavo',
            //     cargo: 'Gerente de projetos',
            // })

            // Atualizar informação
            // await firebase.database().ref('usuarios').child(3).update({
            //     cargo: 'Gerente',
            // })

            await firebase.database().ref("usuarios").on('value', (snapshot) => {

                setUsuarios([]);

                snapshot.forEach((childIten) => {
                    let data = {
                        key: childIten.key,
                        nome: childIten.val().nome,
                        cargo: childIten.val().cargo,
                    };

                    setUsuarios(oldArray => [...oldArray, data].reverse());
                })

                setLoading(false);
            })

        })();
    }, [])

    async function cadastrar() {
        if (nome !== '' & cargo !== '') {
            let usuarios = await firebase.database().ref('usuarios');
            // variável para criar chave dinamica
            let chave = usuarios.push().key;
            usuarios.child(chave).set({
                nome: nome,
                cargo: cargo,
            });
            alert("Cadastrado com sucesso!");
            setNome("")
            setCargo("");

        } else {
            alert("Preencha os campos!")
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Nome</Text>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid={'transparent'}
                value={nome}
                onChangeText={(text) => setNome(text)}
            />

            <Text style={styles.text}>Cargo</Text>
            <TextInput
                style={styles.textInput}
                underlineColorAndroid={'transparent'}
                value={cargo}
                onChangeText={(text) => setCargo(text)}
            />

            <Button
                title="Novo funcionário"
                onPress={cadastrar}
            />

            {loading ?
                (<ActivityIndicator color={"#121212"} size={45} />)
                :
                (<FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.lista}
                    keyExtractor={item => item.key}
                    data={usuarios}
                    renderItem={({ item }) => (<Listagem data={item} />)}
                />)
            }

            <Button
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
    lista: {
        marginVertical: 20,
    },
})