import { Text, View } from 'react-native'
import { Avatar } from './avatar'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

export function Email(){
    return (
        <View className='w-full flex-row gap-4'>
            <Avatar
                source={{ uri: 'http://github.com/rogeritael.png' }}
            />
            <View className='flex-1'>
                <View className='flex-row items-center gap-1'>
                    <MaterialIcons name='label-important' size={16} color={colors.yellow[600]} />
                    <Text className='text-lg font-subtitle text-gray-400 flex-1'>
                        Roger Rosa
                    </Text>
                    <Text className='text-sm font-body text-gray-400'>
                        12 de fev.
                    </Text>
                </View>
                <Text className="text-base font-body text-gray-400" numberOfLines={1} lineBreakMode='tail'>
                    Sobre os arquivos que você pediu
                </Text>
                <View className="flex-row items-center gap-4">
                    <Text className="text-base font-body text-gray-400 flex-1" numberOfLines={1} lineBreakMode='tail'>
                        Boa tarde, tudo bem? Apenas passando pra enviar os arquivos de configuração que você pediu na semana passada
                    </Text>
                    <MaterialIcons name='star' size={22} color={colors.blue[600]}/>
                </View>
            </View>
        </View>
    )
}