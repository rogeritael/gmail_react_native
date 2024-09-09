import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function DrawerLayout(){
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: '75%'
                }
            }}
            defaultStatus='open'
        >
            <Drawer.Screen name="(tabs)" />
        </Drawer>
    )
}