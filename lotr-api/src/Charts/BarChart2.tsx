import { useState, useEffect } from 'react';
import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const raceCount = {
    Human: 0,
    Elf: 0,
    Dwarf: 0,
    Hobbit: 0,
    Maiar: 0,
    Ent: 0,
    Other: 0,
}

const BarChart2 = () => {

    const [character, getCharacter] = useState([])
 
    useEffect(() => {
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer OAihKtSVc6_S53elSxiC'
      }

        const fetchData = async () => {
        const rawCharacters = await fetch('https://the-one-api.dev/v2/character', { headers: headers })
        const characters = await rawCharacters.json();
        raceCount.Human = 0
        raceCount.Elf = 0
        raceCount.Dwarf = 0
        raceCount.Hobbit = 0
        raceCount.Maiar = 0
        raceCount.Ent = 0
        raceCount.Other = 0
        for (var i = 0; i<characters.docs.length; i++) {
            if (characters.docs[i].race === 'Human')
                raceCount.Human++
            else if (characters.docs[i].race === 'Elf')
            raceCount.Elf++
            else if (characters.docs[i].race === 'Dwarf')
            raceCount.Dwarf++
            else if (characters.docs[i].race === 'Hobbit')
            raceCount.Hobbit++
            else if (characters.docs[i].race === 'Maiar')
            raceCount.Maiar++
            else if (characters.docs[i].race === 'Ent')
            raceCount.Ent++
            else raceCount.Other++
        }

        getCharacter(characters.docs)
      };
      
        fetchData()
    }, [])

    var data = {
        labels:[
            'Human (' +raceCount.Human+ ')', 
            'Elf (' +raceCount.Elf+ ')', 
            'Dwarf (' +raceCount.Dwarf+ ')', 
            'Hobbit (' +raceCount.Hobbit+ ')', 
            'Maiar (' +raceCount.Maiar+ ')', 
            'Ent (' +raceCount.Ent+ ')', 
            'Unknown (' +raceCount.Other+ ')'
        ],
        datasets: [{
            label: '# of Votes',
            data: [
                raceCount.Human,
                raceCount.Elf,
                raceCount.Dwarf,
                raceCount.Hobbit,
                raceCount.Maiar,
                raceCount.Ent,
                raceCount.Other
            ],
            //data: character.map(x => x['gender']),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(124, 255, 100, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(124, 255, 100, 1)'
            ],
            borderWidth: 1
        }]
    }
    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }

  return (
    <div>
        <Bar
            data={data}
            height={400}
            options={options}
        />
    </div>
  )
}

export default BarChart2