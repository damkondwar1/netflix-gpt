
export const checkValidData = (email,password)=>{
    const isemailvalid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)
    const isPasswordvalid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

   // const isnamevalid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name)

    if(!isemailvalid) return "Email id is not valid"

    if(!isPasswordvalid) return "Password is not valid"

    //if(!isnamevalid) return "Name is not valid"

    return null
      
}