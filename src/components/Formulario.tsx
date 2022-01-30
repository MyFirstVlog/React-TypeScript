import { useForm } from '../hooks/useForm';

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {

  const {formulario, handleChange} = useForm<FormData>({
    email:'alejandro@udea.edu.co',
    nombre: 'Alejandro',
    edad: 24,
  });

  // const [formulario, setFormulario] = useState({
  //   email:'',
  //   nombre: ''
  // });

  const {email, nombre, edad} = formulario;

  // const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = target;
  //   setFormulario({
  //     ...formulario,
  //     [name]: value
  //   })
  // }

  return (
      <form autoComplete="off">
          <div className="mb-3">
              <label className="form-label">Email:</label>
              <input 
                type="email" 
                className="form-control"
                name="email"
                onChange={handleChange}
                value={email}
              />
          </div>

          <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input 
                type="text" 
                className="form-control"
                name="nombre"
                onChange={handleChange}
                value={nombre}
              />
          </div>

          <div className="mb-3">
              <label className="form-label">Edad:</label>
              <input 
                type="number" 
                className="form-control"
                name="edad"
                onChange={handleChange}
                value={edad}
              />
          </div>
          <br />
          <pre>{JSON.stringify(formulario)}</pre>
      </form>
  )
};
