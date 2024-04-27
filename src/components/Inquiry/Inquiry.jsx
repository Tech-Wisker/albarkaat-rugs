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
} from "@chakra-ui/react";
import React from "react";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Inquiry({ productcode, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme='cyan' variant="outline" onClick={onOpen}>
        @enquiry
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ask about {title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Alert status="info">
              <AlertIcon />
              Ask about this product via these media!
            </Alert>
            <Flex justifyContent="space-evenly" py="50px">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ig.me/m/rugs_mart_/"
              >
                <AiFillInstagram className="hover_icon" size="40px" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={`mailto:mytraders.rugs@gmail.com?subject=Info%20About%20@${productcode}`}
              >
                <AiFillMail className="hover_icon" size="40px" />
              </a>
              <a  target="_blank" rel='noreferrer' href={`https://wa.link/6b8v5c?text=Info%20About%20@${productcode}`}>
                <IoLogoWhatsapp className="hover_icon" size="40px" />
              </a>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='cyan' variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Inquiry;
