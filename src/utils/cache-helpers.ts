export function getCachedData(key: string) {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        if (!parsedData) {
            return null;
        }
        return parsedData;
    }
    return null;
}


export function setCachedData(key: string, data: unknown) {
    localStorage.setItem(key, JSON.stringify({ data }));
}