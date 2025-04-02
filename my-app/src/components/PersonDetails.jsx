const personData=[
    {name:'john doe', dob:'1990-01-15'},
    {name:'jane smith',dob:'1985-05-20'},
    {name:'Alice johnson',dob:'1995-09-10'},
]

const calculateAge=(data)=>{
    const birthDate=new Date(data);
    const today=new Date();
    let age= today.getFullYear()-birthDate.getFullYear();
    let monthDiff= today.getMonth()-birthDate.getMonth()
    
    if (monthDiff<0 || (monthDiff==0 && today.getDate())<birthDate.getDate())
    {
        age --
    }
    return age;
}

const PersonDetails=()=>{
    return(
        <div>
            <h2>Person Details</h2>
            <ul>
                {personData.map((person,index)=>(
                    <li key={index}>
                        <strong>Name</strong>{person.name}<br/>
                        <strong>DOB</strong>{person.dob}<br/>
                        <strong>Age</strong>{calculateAge(person.dob)}<br/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PersonDetails;