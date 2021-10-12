import { Stack } from "@chakra-ui/layout"
import classnames from 'classnames'
import { FaListUl, FaHistory, FaChartLine } from 'react-icons/fa'
import styles from './header.module.scss'

type MenuItemProps = {
  isActive: boolean,
  itemName: string,
  children?: JSX.Element
}

const ICON_MAP: any = {
  items: <FaListUl fontSize='18px' />,
  history: <FaHistory fontSize='18px' />,
  statistics: <FaChartLine fontSize='18px' />
}

const MenuItem = (props: MenuItemProps) => {
  const className = classnames(styles['bar'], { [styles.active]: props.isActive })
  const icon = ICON_MAP[props.itemName]
  
  return <Stack className={styles['menu-item']} flexDirection='row' justifyContent='center' alignItems='center' >
    <div className={className} />
    {icon}
  </Stack>
}

export default MenuItem