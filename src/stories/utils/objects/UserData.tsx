import ClientData from "./ClientData";
import BusinessData from "./BusinessData";

type UserData = {
  logged: boolean,
  role?: 'client' | 'business';
  client?: ClientData;
  business?: BusinessData;
};

export { type UserData as default };
