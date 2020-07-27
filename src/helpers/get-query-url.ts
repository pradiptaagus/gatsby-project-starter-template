export function getQueryUrlId(queryUrl: string) {
    const pattern = RegExp("id=([0-9]*)", "g");
    const result = pattern.exec(queryUrl);
    let id = "";
    if (result && result.length >= 2) {
        id = result[1];
    }
    return id;
}