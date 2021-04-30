export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600) // 60 * 60)
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    // Percorrendo para que horas, minutos e segundos tenham dois digitos sempres
    const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

    return timeString;
}