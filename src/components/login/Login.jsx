import usePostData from "../../hook/usePostData";

function Login() {
    const API_URL = 'https://api.escuelajs.co/api/v1/auth/login';
    const {error, success, createUserMutation,handleCreateUser,handleInputChange}= usePostData(API_URL);

    return (
        <>
            <div className="d-flex justify-content-center mt-5">

                <form onSubmit={(e) => { handleCreateUser(e) }} className="w-25 rounded border p-2">
                    <div className="justify-content-center d-flex "><h1>Ingresar</h1></div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" name="email" onChange={handleInputChange} className="form-control" aria-describedby="emailHelp" placeholder="Ingrese su email" />

                    </div>
                    <div className="form-group">
                        <label >Contraseña</label>
                        <input type="password" name="password" onChange={handleInputChange} className="form-control" placeholder="Ingrese su contraseña" />
                    </div>
                    <div className="mt-3 d-flex justify-content-around">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                        <button type="button" className="btn btn-dark">Crear cuenta</button>
                    </div>
                    <div>



                    </div>
                    {createUserMutation.isLoading && <span>Creando usuario...</span>}
                    {error && (
                        <span>Error al crear el usuario</span>
                    )}
                    {success && (
                        <span>Usuario creado exitosamente</span>
                    )}
                </form>

            </div>

        </>
    )
}

export default Login;