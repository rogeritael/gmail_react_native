import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Image, ScrollView, Text, View } from 'react-native'
import { DrawerButton } from '@/components/drawer-button'
import { CustomOptions } from '@/types/navigation'

export function DrawerContent(drawerProps: DrawerContentComponentProps){
    return (
        <View className='flex-1 bg-gray-600 overflow-hidden'>
            <View className='mt-20 w-full border-b pb-6 border-gray-500'>
                <Image
                    source={require('@/assets/logo.png')}
                    className='w-28 ml-5'
                    resizeMode='contain'
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 42 }}>
                {drawerProps.state.routes.map((route, index) => {
                    const isFocused = drawerProps.state.index
                    const options = drawerProps.descriptors[route.key].options as CustomOptions

                    if(options.title === undefined){ //evita renderizar itens desnecessários
                        return //entende tudo como rotas da aplicação dentro da pasta app/drawer
                    }

                    return (
                        <View key={route.key} >
                            { options.sectionTitle && (
                                <Text className='text-gray-400 text-sm font-heading uppercase ml-4 mt-6 font-bold'>
                                    {options.sectionTitle}
                                </Text>
                            )}
                            <DrawerButton
                                title={options.title!}
                                iconName={options.iconName}
                                divider={options.divider}
                                notifications={options.notifications}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}