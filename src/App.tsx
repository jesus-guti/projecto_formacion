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
                        className="rounded-full-container"
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
                    <button className="rounded-full-container text-darker-gray text-sm ml-auto mr-0">
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
                    <button className="rounded-full-container text-darker-gray text-sm ml-auto mr-0">
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
                    <button className="rounded-full-container text-darker-gray text-sm">
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
                    <button className="rounded-full-container text-darker-gray text-sm">
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
                </section>
            </main>
        </div>
    );
}

export default App;
