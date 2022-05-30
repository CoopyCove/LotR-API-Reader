import { useState, useEffect } from 'react';
import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const genderCount = {
    Male: 0,
    Female: 0,
    Other: 0
}

const BarChart = () => {

    const [character, getCharacter] = useState([])
 
    useEffect(() => {
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer OAihKtSVc6_S53elSxiC'
      }

        const fetchData = async () => {
            const rawCharacters = await fetch('https://the-one-api.dev/v2/character', { headers: headers })
            const characters = await rawCharacters.json();
            console.log(characters.docs)
            genderCount.Male = 0
            genderCount.Female = 0
            genderCount.Other = 0
            for (var i = 0; i<characters.docs.length; i++) {
                if (characters.docs[i].gender === 'Male')
                    genderCount.Male++
                else if (characters.docs[i].gender === 'Female')
                genderCount.Female++
                else genderCount.Other++
            }

            getCharacter(characters.docs)
        };
      
        fetchData()
    }, [])

    var data = {
        labels:['Male (' +genderCount.Male+ ')', 
        'Female (' +genderCount.Female+ ')', 
        'Unkown (' +genderCount.Other+ ')'
        ],
        datasets: [{
            label: '# of Votes',
            data: [
                genderCount.Male, 
                genderCount.Female, 
                genderCount.Other
            ],
            //data: character.map(x => x['gender']),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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

export default BarChart