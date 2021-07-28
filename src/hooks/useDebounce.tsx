import {useRef} from "react";

export const useDebounce = (func: Function, delay: number) => {
    const ref = useRef<any>(null);
    return (...args: any) => {
        clearTimeout(ref.current);
        ref.current = setTimeout(() => func(...args), delay);
    };
}