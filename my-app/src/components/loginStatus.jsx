const LoginStatus=()=>{
    const [isLogin,setLogin]=useState(false);
    return(
        <div>
            <h1>Login Status</h1>
            {isLogin && <p>you are logged in </p>}
            {!isLogin && <p>you are logged out </p>}
            <button onClick={()=>setLogin(!isLogin)}>
                {isLogin?"Logout":"Login"}
            </button>
        </div>
    )
}

export default LoginStatus;