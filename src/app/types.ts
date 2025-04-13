export type MatchDto = {
    id: string;
    metadata: MetadataDto;
    info: InfoDto;
    count: number;
};

export type MetadataDto = {
    dataVersion: string;
    matchId: string;
    participants: string[];
};

export type InfoDto = {
    endOfGameResult: string;
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: ParticipantDto[];
    platformId: string;
    queueId: number;
    teams: TeamDto[];
    tournamentCode: string;
};

export type ParticipantDto = {
    id: number;
    puuid: string;
    allInPings: number;
    assistMePings: number;
    assists: number;
    baronKills: number;
    bountyLevel: number;
    champExperience: number;
    champLevel: number;
    championId: number;
    championName: string;
    commandPings: number;
    championTransform: number;
    consumablesPurchased: number;
    challenges: ChallengesDto;
    damageDealtToBuildings: number;
    damageDealtToObjectives: number;
    damageDealtToTurrets: number;
    damageSelfMitigated: number;
    deaths: number;
    detectorWardsPlaced: number;
    doubleKills: number;
    dragonKills: number;
    eligibleForProgression: boolean;
    individualPosition: string;
    kills: number;
    goldEarned: number;
    goldSpent: number;
    lane: string;
    largestKillingSpree: number;
    totalDamageDealt: number;
    totalDamageTaken: number;
    win: boolean;
};

export type ChallengesDto = {
    id: number;
    legendaryCount: number;
    damagePerMinute: number;
    killParticipation: number;
    soloKills: number;
};

export type TeamDto = {
    id: number;
    bans: BanDto[];
    objectives: ObjectivesDto;
    teamId: number;
    win: boolean;
};

export type BanDto = {
    id: number;
    championId: number;
    pickTurn: number;
};

export type ObjectivesDto = {
    id: number;
    baron: ObjectiveDto;
    dragon: ObjectiveDto;
    tower: ObjectiveDto;
};

export type ObjectiveDto = {
    id: number;
    first: boolean;
    kills: number;
};

export interface PuuidObj {
    puuid: string;
    gameName: string;
    tagLine: string;
}