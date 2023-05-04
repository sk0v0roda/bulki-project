import React from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const YandexMap = () => {
    return (
        <YMaps>
            <Map defaultState={{center: [55.914873, 36.862140], zoom: 10}}>
                <Placemark geometry={[55.914873, 36.862140]}/>
            </Map>
        </YMaps>
    );
};

export default YandexMap;