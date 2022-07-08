import { FormControl } from "@angular/forms"
const toDays=(milliseconds:any):number=> milliseconds/1000/60/60/24/30/12

export const employeeAge=(control: FormControl) =>{
    let today = new Date();
    let birthDate = new Date(control.value);
    let Difference_In_Time = today.getTime() - birthDate.getTime();
    if (toDays(Difference_In_Time)<18) {
        return { ageError: true }
    }
    return null
}