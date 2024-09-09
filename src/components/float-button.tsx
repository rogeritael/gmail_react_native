import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, PressableProps, Text } from 'react-native'

type FloatButtonProps = PressableProps & {
    icon?: keyof typeof MaterialIcons.glyphMap //icone do tipo material icons
}

export function FloatButton({ icon, ...rest }: FloatButtonProps){
    return (
        <Pressable className='absolute px-4 py-4 bg-gray-600 rounded-full bottom-4 right-4 gap-1 flex-row items-center'>
            <MaterialIcons name={icon} size={22} color={colors.orange[500]}/>
            <Text className='font-subtitle text-orange-500'>Escrever</Text>
        </Pressable>
    )
}