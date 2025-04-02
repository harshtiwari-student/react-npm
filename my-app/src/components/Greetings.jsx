const Greetings=()=>{
    const currentHour=new Date().getHours;
    let msg;
    if (currentHour<12){
        msg="Good Morning";
    }
    else if (currentHour<17)
    {
        msg="Good Afternoon"
    }
    else if(currentHour<20)
    {
        msg="Good Evening!";
    }
    else{
        msg = "Good Nights!"
    }
    return (
        <div>
            <h2>{msg}</h2>
        </div>
    )
}

export default Greeetings