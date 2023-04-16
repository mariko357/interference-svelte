export function drawCircle(cRef, radius, x, y) {
    cRef.beginPath();
    cRef.moveTo(x + radius, y);
    cRef.arc(x, y, radius, 0, 2 * Math.PI);
    cRef.stroke();
}
