export interface Brief {
    num?: number;
    title?: string;
    sector?: string;
    descrip?: string;
}

export interface ShipStatus {
    primaryModules: {
        lifeSupport: string;
        command: string;
        armor?: string;
    };

    secondaryModules: {
        jumpDrives?: string;
        computer?: string;
        medicalBay?: string;
        galley?: string;
        cryochamber?: string;
        livingQuarters?: string;
        barracks?: string;
        cargohold?: {
            status: string;
            contents: Array<string>
        };
        scienceLab?: string;

        thrusters: string;
        engine: string;
        fuel: string;
        frame: string;
    };
}

export interface CharacterStats {
    stress: number;
    resolve: number;
    max_Health: number;
    strength: number;
    speed: number;
    intellect: number;
    combat: number;
}

export interface CharacterSaves {
    sanity: string;
    fear: string;
    body: string;
    armor: string;
}
