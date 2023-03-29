import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "../assets/social-media-icons/facebook.png";
import Email from "../assets/social-media-icons/email.png";
import Twitter from "../assets/social-media-icons/twitter.png";

const Navbar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  const connectAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  };
  return (
    <Flex justify='space-between' align='center' padding='30px '>
      <Flex justify='space-around' width='40%' padding='0 75px'>
        <Link href='https://www.facebook.com'>
          <Image src={Facebook} boxSize='42px' margin='0px 15px' />
        </Link>
        <Link href='https://www.twitter.com'>
          <Image src={Twitter} boxSize='42px' margin='0px 15px' />
        </Link>
        <Link href='https://www.gmail.com'>
          <Image src={Email} boxSize='42px' margin='0px 15px' />
        </Link>
      </Flex>

      <Flex
        justify='space-around'
        align='center'
        width='40%'
        padding='30px 30px 30px 30px'>
        <Box margin='0 15px'>About</Box>
        <Spacer />
        <Box margin='0 15px'>Mint</Box>
        <Spacer />
        <Box margin='0 15px'>Team</Box>
        <Spacer />

        {isConnected ? (
          <Box margin='0 15px'>Connected</Box>
        ) : (
          <Button
           backgroundColor="#D6517D"
           borderRadius="5px"
           boxShadow="0px 2px 2px 1px #0F0F0F"
           color="white"
           cursor="pointer"
           fontFamily="inherit"
           padding="15px"
           margin="0 15px"
           onClick={connectAccount}>Connect</Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
