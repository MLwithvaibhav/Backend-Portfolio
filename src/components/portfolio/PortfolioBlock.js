import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box 
            component={'img'} 
            src={image} 
            alt={'mockup'}
            sx={{
               width: '100%',
               maxWidth: '500px',
               height: '280px',
               objectFit: 'cover',
               borderRadius: '12px',
               boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
            }}
         />
         <h1 style={{fontSize: '1.8rem', marginTop: '1rem', textAlign: 'center'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'1.5rem'}>
            {/* Agar live link hoga tabhi Live Demo dikhega */}
            {live && (
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
               </Box>
            )}

            {/* Source Code button sabme dikhega */}
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;