export const calculateTableStartNumber = (current, perPage) => {
    return (current - 1) * perPage + 1;
};
