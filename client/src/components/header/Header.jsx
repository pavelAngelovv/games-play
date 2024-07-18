export default function Header() {
    return (
        <header>
        <h1><a className="home" href="/">GamesPlay</a></h1>
        <nav>
            <a href="/games">All games</a>
            <div id="user">
                <a href="/games/create">Create Game</a>
                <a href="#">Logout</a>
            </div>
            <div id="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </nav>
    </header>
    );
}