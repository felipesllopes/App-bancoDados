import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Autenticacao from '../pages/Autenticacao';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UsuarioLogado from '../pages/Login/UsuarioLogado';

export default function Routes() {

    const Stack = createNativeStackNavigator();


    return (
        <Stack.Navigator>

            <Stack.Screen name='Home' component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen name='Cadastro' component={Cadastro}
                options={{ headerShown: false }}
            />

            <Stack.Screen name='Autenticacao' component={Autenticacao}
                options={{ headerShown: false }}
            />

            <Stack.Screen name='Login' component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen name='UsuarioLogado' component={UsuarioLogado}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

    )
}