import { AxiosError } from 'axios';

export const asyncDelay = (time = 1000) => {
    new Promise((resolve) => {
        setTimeout(resolve, time);
    });
};

type DefaultExport<Module> = {default: Module};

export const makeModuleDefault = <Module>(mod: Module): DefaultExport<Module> => ({
    default: mod,
});

export const isAxiosError = (error: unknown): error is AxiosError => {
    if (error instanceof Error) {
        return (error as AxiosError).isAxiosError;
    }

    return false;
};

export const isFunction = (f: unknown): f is Function => typeof f === 'function';
