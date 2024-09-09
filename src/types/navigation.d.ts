import { DrawerNavigationOptions } from '@react-navigation/drawer'
import { IconNameProps } from '@/components/drawer-button'

interface CustomOptions extends DrawerNavigationOptions {
    iconName: IconNameProps
    divider?: boolean
    notifications?: number
    sectionTitle?: string
}