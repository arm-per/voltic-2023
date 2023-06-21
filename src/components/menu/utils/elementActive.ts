const elementActive = (currentHash: string): Boolean => {
    return window.location.hash === currentHash;
}

export {
    elementActive
}
