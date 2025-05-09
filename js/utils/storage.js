    export function saveDestination(campus) {
        localStorage.setItem('chosenDestination', JSON.stringify(campus));
    }

    export function getDestination() {
        const data = localStorage.getItem('chosenDestination');
        return data ? JSON.parse(data) : null;
    }

    export function clearDestination() {
        localStorage.removeItem('chosenDestination');
    }

