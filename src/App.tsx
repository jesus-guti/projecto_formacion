function App() {
    return (
        <div className="flex">
            <nav className="w-16 navbar">
                <img src="logo.png" className="logo" alt="" />
                <div className="group top-group">
                    <div className="circular-btn">h</div>
                    <div className="circular-btn--active">f</div>
                    <div className="circular-btn">h</div>
                </div>
                <div className="group mid-group">
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                </div>
                <div className="group bottom-group">
                    <div className="circular-btn">h</div>
                    <div className="circular-btn">h</div>
                </div>
            </nav>
            <main className="main w-full">
                <header className="main-header">
                    <form
                        action="/search"
                        method="get"
                        className="rounded-full-container-outlined"
                    >
                        <div className="circular-btn bg-light-gray">
                            <img
                                src="https://cdn.hugeicons.com/icons/search-01-stroke-rounded.svg"
                                alt="search-01"
                                width="20"
                                height="20"
                            />
                        </div>
                        <input
                            type="search"
                            name="q"
                            className="search-input text-sm"
                            placeholder="Search your today analysis"
                        />
                    </form>
                    <button className="rounded-full-container-outlined text-darker-gray text-sm ml-auto mr-0">
                        <div className="circular-btn bg-light-gray">
                            <img
                                src="https://cdn.hugeicons.com/icons/search-01-stroke-rounded.svg"
                                alt="search-01"
                                width="20"
                                height="20"
                            />
                        </div>
                        <span>Notifications</span>
                        <div className="medium-badge">
                            <span>5</span>
                        </div>
                    </button>
                    <div className="avatar">JG</div>
                </header>
                <section className="hero">
                    <h1 className="hero-title">
                        Your Sales <br />
                        Analysis
                    </h1>
                    <button className="rounded-full-container bg-light-gray text-sm ml-auto mr-0">
                        <div className="circular-btn bg-gray">
                            <img
                                src="https://cdn.hugeicons.com/icons/search-01-stroke-rounded.svg"
                                alt="search-01"
                                width="20"
                                height="20"
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-xs text-darker-gray">Date</p>
                            <p className="text-sm text-black whitespace-nowrap">
                                28 Jan - 29 Jan 2023
                            </p>
                        </div>
                        <button
                            type="button"
                            className="circular-small-btn bg-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-chevron-down"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </button>
                    <button
                        type="button"
                        className="rounded-full-container text-sm bg-light-gray"
                    >
                        <div className="circular-btn bg-gray">
                            <img
                                src="https://cdn.hugeicons.com/icons/search-01-stroke-rounded.svg"
                                alt="search-01"
                                width="20"
                                height="20"
                            />
                        </div>
                        <span>Funnel</span>
                        <button
                            type="button"
                            className="circular-small-btn bg-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-chevron-down"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </button>
                    <button className="rounded-full-container text-white bg-black text-sm">
                        <span className="ml-4">Export as CSV</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-move-up-right"
                        >
                            <path d="M13 5H19V11" />
                            <path d="M19 5L5 19" />
                        </svg>
                    </button>
                </section>
                <section className="flex flex-col gap-2 px-5 w-full">
                    <div className="flex gap-2">
                        <div className="flex flex-col h-52 p-6 rounded-[40px] flex-1 bg-black text-white">
                            <header className="flex justify-between items-center">
                                <p>Available to payout</p>
                                <button
                                    type="button"
                                    className="circular-small-btn bg-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-move-up-right"
                                    >
                                        <path d="M13 5H19V11" />
                                        <path d="M19 5L5 19" />
                                    </svg>
                                </button>
                            </header>
                            <div className="mt-auto mb-0">
                                <p className="text-2xl tracking-[-3px] leading-[80px]">
                                    $16.4K
                                </p>
                            </div>
                            <footer className="text-sm">
                                <p className="text-white">
                                    <b className="font-bold">
                                        Payout &middot;{" "}
                                    </b>
                                    $6.1K will available soon
                                </p>
                            </footer>
                        </div>
                        <div className="flex flex-col h-52 p-6 rounded-[40px] flex-1 bg-light-gray">
                            <div className="flex justify-between items-center">
                                <p>Today revenue</p>
                                <button
                                    type="button"
                                    className="circular-small-btn bg-gray"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-move-up-right"
                                    >
                                        <path d="M13 5H19V11" />
                                        <path d="M19 5L5 19" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-auto mb-0">
                                <p className="text-2xl tracking-[-3px] leading-[80px]">
                                    $16.4K
                                </p>
                            </div>
                            <footer className="text-sm">
                                <p className="text-dark-gray">
                                    <b className="font-bold text-black">
                                        Payout &middot;{" "}
                                    </b>
                                    $6.1K will available soon
                                </p>
                            </footer>
                        </div>
                        <div className="flex flex-col h-52 p-6 rounded-[40px] flex-1 bg-light-gray">
                            <div className="flex justify-between items-center">
                                <p>Today sessions</p>
                                <button
                                    type="button"
                                    className="circular-small-btn bg-gray"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-move-up-right"
                                    >
                                        <path d="M13 5H19V11" />
                                        <path d="M19 5L5 19" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-auto mb-0">
                                <p className="text-2xl tracking-[-3px] leading-[80px]">
                                    $16.4K
                                </p>
                            </div>
                            <footer className="text-sm">
                                <p className="text-dark-gray">
                                    <b className="font-bold text-black">
                                        Payout &middot;{" "}
                                    </b>
                                    $6.1K will available soon
                                </p>
                            </footer>
                        </div>
                    </div>
                    <div className="grid-cols-2">
                        <div className="flex flex-col h-52 p-5 rounded-[40px] flex-1 bg-light-gray">
                            <header className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg">Sales Funnel</p>
                                    <p className="text-sm leading-7">
                                        Total view per month
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="circular-small-btn bg-white px-4 text-sm"
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        type="button"
                                        className="circular-small-btn bg-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-move-up-right"
                                        >
                                            <path d="M13 5H19V11" />
                                            <path d="M19 5L5 19" />
                                        </svg>
                                    </button>
                                </div>
                            </header>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
