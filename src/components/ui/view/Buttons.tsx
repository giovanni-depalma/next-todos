import { w } from 'windstitch';
export const Button = w.button(`p-1 ml-2 border-2 rounded shrink-0`, {
    variants: {
        variant: {
            "danger": `text-red-500 border-red-500 hover:text-white hover:bg-red-500`,
            "primary": `text-green-500 border-green-500 hover:text-white hover:bg-green-500`,
            "secondary": `text-gray-500 border-gray-500 hover:text-white hover:bg-gray-500`,
        }
    }
})