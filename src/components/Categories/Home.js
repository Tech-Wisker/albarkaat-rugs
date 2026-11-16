import Category from '@/components/Categories/Category';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../Heading';

const TypesHome = () => {
    const {t} = useTranslation();
    return (<>
        <Box mt="100px" />
        <Breadcrumbs crumbs={[{ label: t('categories.heading') }]} />
        <Category/>
    </>);
}

export default TypesHome;
