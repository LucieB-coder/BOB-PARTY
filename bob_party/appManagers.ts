import { FakeSaverConversation } from "./src/services/conversationService/fakeSaverConversation";
import { LoaderConversationApi } from "./src/services/conversationService/loaderConversationApi";
import ManagerConversation from "./src/services/conversationService/managerConversation";
import { SaverConversationApi } from "./src/services/conversationService/saverConversationApi";
import LoaderGameApi from "./src/services/gameService/loaderGameApi";
import ManagerGame from "./src/services/gameService/managerGame";
import LoaderMatchApi from "./src/services/matchServices/loaderMatchApi";
import ManagerMatch from "./src/services/matchServices/managerMatch";
import SaverMatchApi from "./src/services/matchServices/saverMatchApi";
import LoaderSkinApi from "./src/services/skinService/loaderSkinApi";
import ManagerSkin from "./src/services/skinService/managerSkin";
import FakeSaverUser from "./src/services/userServices/fakeSaverUser";
import LoaderUserApi from "./src/services/userServices/loaderUserApi";
import ManagerUser from "./src/services/userServices/ManagerUser";
import SaverUserApi from "./src/services/userServices/saverUserApi";

export const MANAGER_USER = new ManagerUser(new LoaderUserApi, new SaverUserApi);
export const MANAGER_CONVERSATION = new ManagerConversation(new LoaderConversationApi, new SaverConversationApi);
export const MANAGER_MATCH = new ManagerMatch(new LoaderMatchApi, new SaverMatchApi);
export const MANAGER_GAME = new ManagerGame(new LoaderGameApi);
export const MANAGER_SKIN = new ManagerSkin(new LoaderSkinApi);
