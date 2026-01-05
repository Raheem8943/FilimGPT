const CheckValidData = (email,password) => {
    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/.test(password);
    if(!isEmailvalid)
    return "Email id not Valid";
if(!isPasswordvalid)
    return "Password not Valid";
return null;
}
export default CheckValidData;