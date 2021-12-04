placeSearch({
    key: 'KEY',
    container: document.querySelector('osmGeocoder'),
    useDeviceLocation: true,
    collection: [
        'poi',
        'airport',
        'address',
        'adminArea',
    ]
});