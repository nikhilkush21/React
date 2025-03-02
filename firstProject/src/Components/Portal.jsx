import React from 'react'

const Portal = () => {
    const[employee,setEmployee]=useState([]);
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const addEmployee=()=>{
        const newEmployee={
            name,age:age?age:'Not Provided',
        };
        setEmployee([...employee,newEmployee]);
        setName('');
        setAge('');
    }
  return (
    <div>
      
    </div>
  )
}

export default Portal
