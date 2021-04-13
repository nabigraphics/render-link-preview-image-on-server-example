export interface PostData {
  id: string;
  title: string;
  username: string;
  profile_name: string;
  profile_image_url: string;
}

const mock: Record<string, PostData> = {
  "post-1": {
    id: "1",
    title: "Hello world!",
    username: "nabigraphics",
    profile_name: "나비",
    profile_image_url: "https://avatars.githubusercontent.com/u/16166356?v=4",
  },
  "post-2": {
    id: "2",
    title: "Goodbye, Clean Code",
    username: "dan_abramov",
    profile_name: "Dan",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg",
  },
};

export default mock;
