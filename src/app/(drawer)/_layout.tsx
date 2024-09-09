import { DrawerContent } from '@/components/drawer-content'
import { CustomOptions } from '@/types/navigation'
import { Drawer } from 'expo-router/drawer'
import Feedback from './feedback'

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
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{ title: 'Todas as caixas de entrada',
                iconName: 'all-inbox', notifications: 5 } as CustomOptions}
            />
            <Drawer.Screen
                name="all-emails"
                options={{ title: 'Todos os emails',
                iconName: 'inbox', notifications: 3 } as CustomOptions}
            />
            <Drawer.Screen
                name="config"
                options={{ title: 'Configurações',
                iconName: 'settings', notifications: 1 } as CustomOptions}
            />
            <Drawer.Screen
                name="exit-box"
                options={{ title: 'Caixa de saída',
                iconName: 'outbox', divider: true, notifications: 0 } as CustomOptions}
            />
             <Drawer.Screen
                name="feedback"
                options={{
                    sectionTitle: "Feedback",
                    title: 'Feedback',
                iconName: 'feedback', divider: true, notifications: 12 } as CustomOptions}
            />
        </Drawer>
    )
}