import { useState, useEffect } from 'react';
import '../src/tabledata.css';
 
function TableData() {
    const [character, getCharacter] = useState([])
 
    useEffect(() => {
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer OAihKtSVc6_S53elSxiC'
      }

        const fetchData = async () => {
        const rawCharacters = await fetch('https://the-one-api.dev/v2/character', { headers: headers })
        const characters = await rawCharacters.json();
        getCharacter(characters.docs)
      };
      
        fetchData()
    }, [])
 
    return (
        <>
            <h1>Lord of the Rings Character Data</h1>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Race</th>
                    <th>WikiURL</th>
                </tr>
                {character.map((item, i) => 
                    <tr key={i}>
                        <td>{item['name']}</td>
                        <td>{item['gender']}</td>
                        <td>{item['race']}</td>
                        <td>{item['wikiUrl']}</td>
                </tr>
                )}
            </tbody>
 
        </>
    );
}
 
export default TableData;