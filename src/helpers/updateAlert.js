import Swal from "sweetalert2";
import {updateProductApi} from "../apiRequest/api.js";
export function updateProductDataAlert (id,data) {
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
        inputValue:data,
    }).then((result) => {
        if (result.isConfirmed) {
            return updateProductApi(id,result.value).then((deleteResult)=>{
                return deleteResult
            })
        }
    });
}