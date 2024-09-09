import { Input } from '@/components/input'
import { FlatList, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { MenuButton } from '@/components/menu-button'
import { Avatar } from '@/components/avatar'
import { Email } from '@/components/email'
import { EMAILS } from '@/utils/emails'
import { FloatButton } from '@/components/float-button'

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
            <FlatList
                data={EMAILS}
                keyExtractor={email => email.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Email data={item} />}
                contentContainerClassName="gap-6"
                ListHeaderComponent={() => <Text className='uppercase text-gray-400 text-sm font-subtitle mt-6'>Entrada</Text>} //Componente que aparece no topo
            />

            <FloatButton icon='edit' />
        </View>
    )
}