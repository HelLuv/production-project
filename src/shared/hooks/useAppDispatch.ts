import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';

type DispatchFunc = () => AppDispatch;

export const useAppDispatch : DispatchFunc = useDispatch;
