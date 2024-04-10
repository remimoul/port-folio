import React from 'react';
import TableProjet from './tableProjet';
import TableExPro from './tableExPro';


function Dashboard(){


    return (
        <div className=" w-auto mx-7 pt-28">
      <div className="flex items-center gap-2 w-fit">
        <h1 className="text-5xl font-bold font-mono text-white">🛠️​Paramètres</h1>
      </div>
      <TableProjet />
      <TableExPro />
      </div>
    
    );
} export default Dashboard;