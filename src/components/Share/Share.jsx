import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillFacebook, AiFillMail, AiOutlineShareAlt } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { BsLink } from "react-icons/bs";

function Share({ productcode, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [url,setUrl] = useState("")

  useEffect(()=>{
    setUrl(window.location.href);
  },[])
  function copyToClipBoard(copyText) {
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    toast({
      title: 'Link Copied!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  
  return (
    <>
      <Button colorScheme='cyan' variant="outline" onClick={onOpen}>
        <AiOutlineShareAlt/> Share
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share this {`"${title}"`} product with others.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Alert status="info">
              <AlertIcon />
              You can share this product via these media!
            </Alert>
            <Flex justifyContent="space-evenly" py="50px">
              <a
                target="_blank"
                rel="noreferrer"
                href={`mailto:?subject=Product%20Name:%20${title}&body=${url}`}
              >
                <AiFillMail className="hover_icon" size="40px" />
              </a>
              <a  target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?text=${url}`}>
                <IoLogoWhatsapp className="hover_icon" size="40px" />
              </a>
              <a target="_blank" rel="noreferrer" href={`https://t.me/share/url?url=${url}&text=Check%20out%20this%20product%20"${title}"%20on%20www.myt-rugs.com`}>
                <FaTelegramPlane className="hover_icon" size="40px" />
              </a>
              <a target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${url}&text=Check%20out%20this%20product%20"${title}"%20on%20www.myt-rugs.com`}>
                <AiFillFacebook className="hover_icon" size="40px" />
              </a>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>{copyToClipBoard(url)}} colorScheme='cyan' variant={"ghost"} className="hover_icon">
              GET  <BsLink size="30px"/>
            </Button>
            <Button colorScheme='cyan' variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Share;
