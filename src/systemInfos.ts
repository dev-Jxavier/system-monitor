import os from 'os';

const parseRam = (bytes: number) => {
    const megaBytes = bytes / 1024 / 1024;
    return parseInt(megaBytes.toString());
};

const ramUsage = (freeRam: number, totalRam: number): number => {
    const parseFreeRam = parseRam(freeRam);
    const parseTotalRam = parseRam(totalRam);
    return parseTotalRam - parseFreeRam;
};

const getUptime = () => {
    const uptime = os.uptime();
    const days = Math.floor(uptime / (60 * 60 * 24));
    const hours = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((uptime % (60 * 60)) / 60);
    const seconds = Math.floor(uptime % 60);

    return { days, hours, minutes, seconds };
};

interface Systems {
    Linux: string;
    Darwin: string;
    Windows_NT: string;
}

const getOS = (): string => {
    // returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.
    const systems: Systems = {
        Linux: 'Linux',
        Darwin: 'MacOS',
        Windows_NT: 'Windows',
    };
    return systems[os.type() as keyof Systems];
};

const stats = () => ({
    OS: getOS(),
    hostname: os.hostname(),
    uptime: getUptime(),
    freemem: parseRam(os.freemem()),
    totalmem: parseRam(os.totalmem()),
    usaged: ramUsage(os.freemem(), os.totalmem()),
});

export default stats;
