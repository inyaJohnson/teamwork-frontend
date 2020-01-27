export const time = (createdOn) => {
    const readableTime = new Date(createdOn);
    return readableTime.toLocaleString();
}