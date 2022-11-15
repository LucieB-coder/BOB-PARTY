import { Match } from "../core/match";

export default interface IDataManagerMatch{

    getMatchById(id:string): Match | null;

    createMatch(m:Match): void;

    updateMatch(m:Match): void;

    deleteMatch(m:Match): void;

}