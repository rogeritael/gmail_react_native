import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, PressableProps, Text, View } from 'react-native'
import clsx from 'clsx'

export type IconNameProps = keyof typeof MaterialIcons.glyphMap

type DrawerButtonProps = PressableProps & {
    title: string
    isFocused?: boolean
    divider?: boolean
    iconName: IconNameProps
    notifications?: number
}

export function DrawerButton({ title, isFocused, divider, notifications, iconName, ...rest }: DrawerButtonProps){

    return (
        <Pressable {...rest} className={clsx('py-2 w-full', {
            "border-b ml-10 border-gray-500": divider,
        })}>
            <View className={clsx('flex-row items-center w-full gap-4 h-14 px-6 -ml-2', {
                "-ml-11": divider,
                "bg-orange-800 rounded-r-full": isFocused
            })}>
                <MaterialIcons name={iconName} size={20} color={isFocused ? colors.orange[300] : colors.white} />
                <Text className={clsx('text-white font-subtitle text-base flex-1', {
                    "text-orange-300 ": isFocused
                })}>
                    {title}
                </Text>
                <Text className={clsx('text-gray-400 text-sm font-body', {
                    "text-orange-300": isFocused
                })}>
                    {notifications}
                </Text>
            </View>
        </Pressable>
    )
}