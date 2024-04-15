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
                    <div className="search-container">
                        <form action="/search" method="get">
                            <div className="circular-btn">
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
                                className="search-input"
                                placeholder="Search your today analysis"
                            />
                        </form>
                    </div>
                </header>
            </main>
        </div>
    );
}

export default App;
