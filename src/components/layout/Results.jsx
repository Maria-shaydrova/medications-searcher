import { Alert, List, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';

export const Results = ({results}) => {

  if (results === null) {
    return null;
  }

  return (
    
    <div className='results'>
      <List>
        {results.length > 0 ? 
            (results.map((result, index) => (
              <ListItemButton component="a" href={`/medication/${result.term}`} key={index} target='_blank'>
                <ListItemText primary={result.term} />
              </ListItemButton>
            )))
            :
            <Alert severity="info">Medications not found</Alert>
        }
        </List>
    </div>
  )
}
