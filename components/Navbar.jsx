import  Link  from 'next/link';
import { 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    IconButton, 
    Flex, 
    Box, 
    Spacer 
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcSearch, FcKey, FcCurrencyExchange} from 'react-icons/fc';
// import { BsSearch } from 'react-icons/bs';
// import { FcKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        <Box fontSize='3xl'color='blue.400'>
            <Link href='/' paddingLeft='2'>Space Finder</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant='outlined' color='red.400' />
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<FcSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem icon={<FcCurrencyExchange/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<FcKey/>}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;