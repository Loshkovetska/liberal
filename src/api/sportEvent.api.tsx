import mocks from "./mocks";
const sportEventApi = {
  async getsportsEvent(title: string) {
    return new Promise((resolve, reject) => {
      resolve(mocks.sportEvents.find((s) => (s.title = title)));
    });
  },
  async getSportEventByParams(params: any) {
    return new Promise((resolve, reject) => {
      resolve(mocks.sportEvents[0].list.find((s) => s.id === +params.id));
    });
  },
};

export default sportEventApi;
