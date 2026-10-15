// Keep one public host while preserving each article's path and language.
// Missing assets return a real 404 rather than the homepage's HTML.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.bobochang.cn") {
      url.protocol = "https:";
      url.hostname = "bobochang.cn";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
