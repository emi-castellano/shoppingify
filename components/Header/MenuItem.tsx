import { Stack, Box, Tooltip } from "@chakra-ui/react"
import { FaListUl, FaHistory, FaChartLine } from 'react-icons/fa'

type MenuItemProps = {
  isActive: boolean,
  itemName: string
}

const ICON_MAP: any = {
  items: <FaListUl fontSize='18px' />,
  history: <FaHistory fontSize='18px' />,
  statistics: <FaChartLine fontSize='18px' />
}

const MenuItem = (props: MenuItemProps) => {
  const icon = ICON_MAP[props.itemName]
  
  return <Stack flexDirection='row' justifyContent='center' alignItems='center' h='45px' position='relative' cursor='pointer'>
    <Box w='6px' h='100%' bg={props.isActive ? 'orange' : 'white'} position='absolute' left='0' borderTopRightRadius='4' borderBottomRightRadius='4' />
    <Tooltip label={props.itemName} placement='right-end'>
      {icon}
    </Tooltip>
  </Stack>
}

export default MenuItem