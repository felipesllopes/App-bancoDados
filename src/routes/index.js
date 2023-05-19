import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Autenticacao from '../pages/Autenticacao';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';

export default function Routes() {

    const Stack = createNativeStackNavigator();


    return (
        <Stack.Navigator>

            <Stack.Screen name='Home' component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen name='Cadastro' component={Cadastro} />

            <Stack.Screen name='Autenticacao' component={Autenticacao} />

        </Stack.Navigator>

    )
}