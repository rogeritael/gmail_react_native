import { Input } from '@/components/input'
import { Text, View } from 'react-native'
import Constants from 'expo-constants'
import { MenuButton } from '@/components/menu-button'
import { Avatar } from '@/components/avatar'

const statusBarHeight = Constants.statusBarHeight

export default function Home(){
    return (
        <View
            style={{ paddingTop: statusBarHeight + 48}}
            className="flex-1 bg-gray-900 p-4"
        >
            <Input>
                <MenuButton />
                <Input.Field placeholder='pesquisar no e-mail...' />
                <Avatar
                    source={{ uri: "https://github.com/rogeritael.png" }}
                />
            </Input>
        </View>
    )
}