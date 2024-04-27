import { Box, Button, Flex, Input, Textarea } from '@chakra-ui/react'
import { t } from 'i18next'
import React from 'react'

function ContactForm() {
  return (
    <Box  w={{lg:"50%",md:'100%' , sm:'100%',base:'100%'}}  p={15}>
    <form style={{width : "100%"}}  target='blank' action="https://formsubmit.co/84280edbda07b3dcb4a49213931ea275" method="POST">
      <Flex display={'flex'} w="100%" alignItems="center" flexDirection='column' gap='20px' justifyContent="space-evenly" >
        <Input name='name' placeholder={t("contactus.placehoder.name")} required />
        <Input name='email' type="email" placeholder={t("contactus.placehoder.email")} required />
        <Textarea name='body' placeholder={t("contactus.placehoder.msg")} required />
        <Button type='submit'  colorScheme="cyan" variant={"outline"} w="50%" >
          {t("contactus.submit")}
        </Button>
       </Flex>
      </form>
      </Box>
  )
}

export default ContactForm