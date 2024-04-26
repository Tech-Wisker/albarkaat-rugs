import Category from '@/components/Categories/Category';
import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const TypesHome = () => {
    const {t} = useTranslation();
    return (<>
        <Heading textAlign={"center"} mt="100px">{t("categories.heading")}</Heading>
        <Category/>
           </>
    );
}

export default TypesHome;
