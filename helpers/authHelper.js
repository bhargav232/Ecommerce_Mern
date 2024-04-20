import bcrpt from "bcrypt"

export const hashPassword = async (password)=>{ 
    try{
        const saltRound = 5;
        const hassPwd = await bcrpt.hash(password, saltRound)
        return hassPwd;
      }
    catch(error){
        console.log("Error while hashPassword", error.message)
    }
}

export const comparePassword = async (userPassword, hassPwd)=>{
    try{
        return await bcrpt.compare(userPassword, hassPwd)
    }
    catch(error){
        console.log("Error while comparePassword", error.message)
    }
}