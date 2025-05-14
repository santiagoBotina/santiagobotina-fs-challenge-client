export const isValidUrl = (inputUrl: string): boolean => {
    const urlPattern = new RegExp(
        "^(https?:\\/\\/)" + // required http or https
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])?)\\.)+([a-z]{2,}))" + // domain name + extension
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // optional port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // optional query string
        "(\\#[-a-z\\d_]*)?$",
        "i"
    );

    return urlPattern.test(inputUrl);
}
