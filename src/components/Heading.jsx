import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

// crumbs: [{ label, href }]  — last item is current page (no href needed)
const Breadcrumbs = ({ crumbs = [] }) => {
    return (
        <Breadcrumb
            spacing="6px"
            separator={<FiChevronRight color="gray" size={12} />}
            px={{ base: "20px", md: "50px" }}
            py={3}
            fontSize="sm"
            color="gray.500"
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} href="/" _hover={{ color: "black" }}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            {crumbs.map((c, i) => (
                <BreadcrumbItem key={i} isCurrentPage={!c.href}>
                    {c.href
                        ? <BreadcrumbLink as={Link} href={c.href} _hover={{ color: "black" }}>{c.label}</BreadcrumbLink>
                        : <Text color="black" fontWeight="medium">{c.label}</Text>
                    }
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
