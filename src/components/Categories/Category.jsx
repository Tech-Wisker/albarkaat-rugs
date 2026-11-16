import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from '../Cards/CategoryCard';
import { Box, Grid, GridItem, Skeleton, Text } from '@chakra-ui/react';
import Translate from '../Common/Translate';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const Category = () => {
    const url = process.env.REACT_APP_MYT_BASE_URL
    const {i18n} = useTranslation();
    const [categories , setCategories] = useState([])
    const [loading , setLoading] = useState(false)


    useEffect(() => {
      setLoading(true)
      axios.get(url+"/types").then(async (res)=>{
          const translatedData = await Translate([...res.data],i18n.language);
          const modifiedData = [];
          for(let i in res.data){
              modifiedData.push({...translatedData[i],img : res.data[i].img})
          }
          setCategories([...modifiedData])
          setLoading(false)
      }) 
      
    }, [])
    if(categories.length === 0 && loading){
        return (
            <Grid
              p={{lg:'50px',md:'20px',sm:'10px',base:'10px'}}
              h='700px' w='100%'
              templateRows='repeat(4, 1fr)'
              templateColumns='repeat(5, 1fr)'
              gap={{lg:'50px',md:'20px',sm:'10px',base:'10px'}}
            >
                <GridItem rowSpan={4} colSpan={2}><Skeleton w='100%' h='100%' borderRadius='20px'/></GridItem>
                <GridItem rowSpan={2} colSpan={3}><Skeleton w='100%' h='100%' borderRadius='20px'/></GridItem>
                <GridItem rowSpan={2} colSpan={3}><Skeleton w='100%' h='100%' borderRadius='20px'/></GridItem>
            </Grid>
        )
    }
    return (<>
        <Grid
          p = {{lg : "50px" , md : "20px" , sm : "10px" , base : "10px"}}
          h={`${Math.ceil(categories.length / 3)*700}px`}
          w={"100%"}
          templateRows={`repeat(${Math.ceil(categories.length / 3)*4}, 1fr)`}
          templateColumns='repeat(5, 1fr)'
          gap={{lg : "50px" , md : "20px" , sm : "10px" , base : "10px"}}
          >
                    {
                        categories.map((e,i)=>{
                            if(i===0 || i===4 || i==6 || i===10 || i===12 || i===16 || i === 18){
                                console.log("dcndv")
                                return <GridItem key={e.id+i} rowSpan={4} colSpan={2}><CategoryCard key={"catee"+e.id+i}  {...e} /></GridItem>
                            }else{
                                console.log("dscccsss222cndv")
                                return <GridItem key={"cdc"+e.id+i} rowSpan={2} colSpan={3}><CategoryCard key={"cat"+e.id+i}  {...e} /></GridItem>
                            }
                        })
                    }
         </Grid>
        </>
    );
}

export default Category;
