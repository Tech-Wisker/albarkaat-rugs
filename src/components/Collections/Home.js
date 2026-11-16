import { Box } from '@chakra-ui/react';
import React from 'react';
import Collections from './Collections';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../Heading';

const CollectionHome = () => {
    const {t} = useTranslation();
    return (<>
        <Box mt="100px" />
        <Breadcrumbs crumbs={[{ label: t('collections.heading') }]} />
        <Collections/>
    </>);
}

export default CollectionHome;
