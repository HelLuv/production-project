import { Callback } from 'shared/types';
import { DependencyList, useCallback, useRef } from 'react';

export const useDebouncedCallback = <F extends Callback>(callback: F, delay: number, deps: DependencyList) => {
    // eslint-disable-next-line no-undef
    const timeoutId = useRef<NodeJS.Timeout>();

    return useCallback(<A>(...args: A[]) => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }

        timeoutId.current = setTimeout(() => {
            callback(...args);
        }, delay);

        /* eslint-disable react-hooks/exhaustive-deps */
    }, [...deps, delay]);
};
