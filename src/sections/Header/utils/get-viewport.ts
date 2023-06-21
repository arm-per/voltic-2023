const getViewport = (): 'mobile' | 'tablet' | 'desktop' => {

    const viewports = {
        '960': 'desktop',
        '720': 'tablet',
    }

    const currentSize = window.innerWidth;


    return (
        currentSize <= 480 ? 'mobile' :
            currentSize <= 720 ? 'tablet' : 'desktop'
    );
}

export {
    getViewport
}
