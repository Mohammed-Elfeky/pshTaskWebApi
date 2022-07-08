import { FormControl } from "@angular/forms"

export const startWithNumber=(control: FormControl) =>{
    if (parseInt(control.value[0])) {
        return { startnumber: true }
    }
    return null
}