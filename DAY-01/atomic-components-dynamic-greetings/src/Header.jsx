function Header() {

    const hour = new Date().getHours();

    const minutes = new Date().getMinutes();

    let greeting = "";

    if(hour >= 5 && hour <= 11){

        greeting = "Good Morning";

    }
    else if(hour >= 12 && hour <= 17){

        greeting = "Good Afternoon";

    }
    else{

        greeting = "Good Evening";

    }

    return(

        <div className="sb-header">

            <h1>
                {greeting}, {import.meta.env.VITE_INTERN_NAME}
            </h1>

            <h2 className="sb-time">
                Current Time : {hour}:{minutes < 10 ? `0${minutes}` : minutes}
            </h2>

        </div>
    )
}

export default Header;