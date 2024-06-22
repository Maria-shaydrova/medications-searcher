import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export const Medication = () => {

    const {medication} = useParams();
    const [products, setProducts] = useState([]);

    const url = 'https://api.fda.gov/drug/drugsfda.json?search=products.brand_name.exact:"' +decodeURIComponent(medication) +'"&limit=1';

    useEffect(() => {
        const fetchData = async () => {
   
            const response = await fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              },
            });
        
            const data = await response.json();
            if(data.results){
                const sortedProducts = data.results[0].products.sort((a, b) => {
                    return a.product_number.localeCompare(b.product_number);
                });
                setProducts(sortedProducts);
            }
        };
    
        fetchData();

    }, [medication]);

  return (
    <>
        <h2>{medication}</h2>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Product number</TableCell>
                    <TableCell align="center">Brand name</TableCell>
                    <TableCell align="center">Active ingredients</TableCell>
                    <TableCell align="center">Dosage form</TableCell>
                    <TableCell align="center">Route</TableCell>
                    <TableCell align="center">Reference drug</TableCell>
                    <TableCell align="center">Reference standard</TableCell>
                    <TableCell align="center">Marketing status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {products.map((row, index) => (
            <TableRow key={index}>
                <TableCell component="th" scope="row" >{row.product_number}</TableCell>
                <TableCell align="center">{row.brand_name}</TableCell>
                <TableCell align="center">
                    {row.active_ingredients.map((ing, index) => (
                        <span key={index}>
                            {ing.name} {ing.strength}
                            {index !== row.active_ingredients.length - 1 && ', '}
                        </span>
                    ))}
                </TableCell>
                <TableCell align="center">{row.dosage_form}</TableCell>
                <TableCell align="center">{row.route}</TableCell>
                <TableCell align="center">{row.reference_drug}</TableCell>
                <TableCell align="center">{row.reference_standard}</TableCell>
                <TableCell align="center">{row.marketing_status}</TableCell>
            </TableRow>
            ))}
            </TableBody>
        </Table>
    </>
  )
}





