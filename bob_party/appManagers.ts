import { FakeSaverConversation } from "./src/services/conversationService/fakeSaverConversation";
import { LoaderConversationApi } from "./src/services/conversationService/loaderConversationApi";
import ManagerConversation from "./src/services/conversationService/managerConversation";
import LoaderGameApi from "./src/services/gameService/loaderGameApi";
import ManagerGame from "./src/services/gameService/managerGame";
import LoaderMatchApi from "./src/services/matchServices/loaderMatchApi";
import ManagerMatch from "./src/services/matchServices/managerMatch";
import SaverMatchApi from "./src/services/matchServices/saverMatchApi";
import FakeSaverUser from "./src/services/userServices/fakeSaverUser";
import LoaderUserApi from "./src/services/userServices/loaderUserApi";
import ManagerUser from "./src/services/userServices/managerUser";

export const MANAGER_USER = new ManagerUser(new LoaderUserApi, new FakeSaverUser);
export const MANAGER_CONVERSATION = new ManagerConversation(new LoaderConversationApi, new FakeSaverConversation);
export const MANAGER_MATCH = new ManagerMatch(new LoaderMatchApi, new SaverMatchApi);
export const MANAGER_GAME = new ManagerGame(new LoaderGameApi);
