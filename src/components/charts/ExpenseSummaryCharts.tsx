import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const ExpenseSummaryCharts: React.FC = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  // Dummy data
  const data = [
    { name: 'Food', value: 300 },
    { name: 'Entertainment', value: 200 },
    { name: 'Travel', value: 400 },
  ];

  // Calculate total expenses
  const totalExpense = data.reduce((acc, cur) => acc + cur.value, 0);

  const dataWithPercentages = data.map(item =>
    ({ ...item, percentage: ((item.value / totalExpense) * 100).toFixed(2) })
  );

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={dataWithPercentages}
        cx="50%"
        cy="50%"
        outerRadius={90}
        fill="#8884d8"
        label={({ cx, cy, midAngle, innerRadius, outerRadius, percentage, index }) => {
          const RADIAN = Math.PI / 180;
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);
          return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              {`${dataWithPercentages[index].name} - ${percentage}%`}
            </text>
          );
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
        ))}

      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseSummaryCharts;
