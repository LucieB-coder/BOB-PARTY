import { Match } from "../../core/match";
import IDataManagerConversation from "../IDataManagerConversation";
import IDataManagerMatch from "../IDataManagerMatch";

export default class DataManagerMatchStub implements IDataManagerMatch{

    
    getMatchById(id: string): Match | null {
        throw new Error("Method not implemented.");
    }
    createMatch(m: Match): void {
        throw new Error("Method not implemented.");
    }
    updateMatch(m: Match): void {
        throw new Error("Method not implemented.");
    }
    deleteMatch(m: Match): void {
        throw new Error("Method not implemented.");
    }

}