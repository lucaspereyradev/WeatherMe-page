import { useState } from 'react';
import ImageLoader from './Home/ImageLoader';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

const Cards = ({ data, dates }) => {
    const [active, setActive] = useState(false);
    const [details, setDetails] = useState([]);

    return (
        <>
            <Splide
                hasTrack={false}
                options={{
                    perPage: 4,
                    rewind: false,
                    perMove: 1,
                    gap: '3rem',
                    padding: '1.5rem',
                    pagination: false,
                }}
            >
                <SplideTrack>
                    {dates.map((date, index) => {
                        const items = data[date].map((item) => item); // Guarda los items en un nuevo array
                        const itemsZero = items[0];
                        return (
                            <SplideSlide key={index}>
                                <div
                                    className="px-[1rem] h-[25rem] py-4 rounded-2xl bg-blue-500 shadow-md  text-white hover:bg-blue-700/90 transition-colors cursor-pointer"
                                    onClick={() => {
                                        setActive(true);
                                        setDetails(items);
                                    }}
                                >
                                    <div className="flex gap-1 flex-col text-center h-full w-full">
                                        <span>{date}</span>
                                        <ImageLoader
                                            data={itemsZero}
                                            divClassName="mt-6"
                                            imgClassName="w-full h-[11rem]"
                                        />
                                        <div className="flex flex-col mt-auto mx-auto">
                                            <span className="mb-6 text-5xl font-bold">
                                                {parseInt(itemsZero.main.temp)} °C
                                            </span>
                                            <div className="flex gap-x-4">
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="text-sm opacity-80">
                                                        Humidity
                                                    </span>
                                                    <span className="text-lg font-bold">
                                                        {itemsZero.main.humidity}{' '}
                                                        <span className="text-sm font-light">
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="text-sm opacity-80">
                                                        Feels like
                                                    </span>
                                                    <span className="text-lg font-bold">
                                                        {parseInt(itemsZero.main.feels_like)}{' '}
                                                        <span className="text-sm font-light">
                                                            °C
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="text-sm opacity-80">Wind</span>
                                                    <span className="text-lg font-bold">
                                                        {itemsZero.wind.speed}{' '}
                                                        <span className="text-sm font-light">
                                                            km/h
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </SplideTrack>
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 stroke-blue-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 stroke-blue-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </Splide>

            {active && (
                <div className="px-[5rem]">
                    <div className="w-full h-fit bg-black text-white">
                        {details.map((item) => (
                            <p>{item.main.temp}</p>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Cards;
