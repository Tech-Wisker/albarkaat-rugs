import { Heading } from '@chakra-ui/react';
import React from 'react';
import Collections from './Collections';
import { useTranslation } from 'react-i18next';

const CollectionHome = () => {
    const {t} = useTranslation();
    return (<>
        <Heading textAlign={"center"} mt="100px">{t("collections.heading")}</Heading>
        <Collections/>
           </>
    );
}

export default CollectionHome;
