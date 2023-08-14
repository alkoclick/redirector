function base64ToBytes(base64) {
    const binString = atob(base64);
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
    const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join("");
    return btoa(binString);
}

if (window.location.search.length > 0) {
    console.log(`Your redirector link is http://localhost:8080?${bytesToBase64(
        new TextEncoder().encode(window.location.search.replace("?https://", "")))
    }`);

    console.log(`Using this link I would redirect you to https://${
        new TextDecoder().decode(base64ToBytes(window.location.search.replace("?","")))
    }`);
}
