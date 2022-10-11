import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const statistics =useLoaderData()
    const data=statistics.data
    console.log(data);
    return (
        <div>
            <h1>Statistics section </h1>
            <LineChart  width={500}
          height={300} data={data} ><Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          
          </LineChart>
            
        </div>
    );
};

export default Statistics;