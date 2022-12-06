import { Match } from "../../core/Match/match";
import ILoaderMatch from "./ILoaderMatch";

export default class LoaderMatchApi implements ILoaderMatch{
    
    async loadAllMatch(): Promise<Match[]> {
        throw new Error("Method not implemented.");
    }
    async loadByID(id: string): Promise<Match | null> {
        throw new Error("Method not implemented.");
    }

}