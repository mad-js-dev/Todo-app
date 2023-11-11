import { sineOut } from 'svelte/easing';

export function scaleY(node, { duration }) {
    return {
        duration,
        css: (t) => {
            const eased = sineOut(t);
            return `
                opacity: ${eased};
                transform: scaleY(${eased});
                transition: all 1s;
            `;
        }
    };
}