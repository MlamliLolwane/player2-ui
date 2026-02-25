function ConvertToSeconds(time)
{
    const [, minute, second] = time.split(":");
    const timeInMinutes = `${minute}:${second}`;

    const parts = timeInMinutes.split(':');

    const minutes = +parts[0];
    const seconds = +parts[1];

    return (minutes * 60) + seconds;
}

export default ConvertToSeconds;