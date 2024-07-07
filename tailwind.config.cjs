/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./src/**/*.{vue,js,ts}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: { themes: ["light"] },
};
