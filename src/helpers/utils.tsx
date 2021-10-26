import {BackendError, ErrorInterface} from '../interfaces/error';
import {Form} from '../hooks/useForm';

export function handleErrors(e: BackendError, error: Form): Form{
  const newErrors: ErrorInterface = {} as ErrorInterface;

  if(e.errors) {
    e.errors.forEach((err) => {
      newErrors[err.property] = err.description;
    });
  }

  return {...error, ...newErrors};
}
