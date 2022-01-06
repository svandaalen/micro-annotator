import {createContext, useContext} from 'react';
import {dummyProvider} from '../../util/dummyProvider';
import {baseReducer} from '../../util/baseReducer';
import {ContextType} from '../common/ContextType';

/**
 * Error message, or falsy when no error
 */
export type ErrorStateType = {
  message: string;
}

export const defaultErrorContext = {
  state: {
    message: ''
  },
  setState: dummyProvider
} as ContextType<ErrorStateType>;

export const ErrorContext = createContext(defaultErrorContext);
export const useErrorContext = () => useContext(ErrorContext);
export const errorReducer : (<T extends ErrorStateType>(s: T, a: T) => T) = baseReducer

