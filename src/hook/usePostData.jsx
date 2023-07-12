import { useState } from "react";
import { useMutation } from "react-query";


const usePostData = (API_URL) => {


   
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const createUserMutation = useMutation(async () => {

        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const json = res.json();
        return json;


    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        console.log(formData)
    };

    const handleCreateUser = (e) => {
        setError(false)
        setSuccess(false)
        e.preventDefault()
        createUserMutation.mutate(formData, {
            onSuccess: (json) => {
                if (json.error == "Not Found" || json.statusCode == 401) {
                    setError(true);
                    setSuccess(false)
                } else if (json.statusCode != 401) {
                    setError(false);
                    setSuccess(true);
                }


            }
        });

    };
    return {error, success, createUserMutation,  handleCreateUser, handleInputChange}
}

export default usePostData;