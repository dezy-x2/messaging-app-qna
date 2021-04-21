import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Secure Messaging Q&A</h1>
        <h3 className="how-secure question">How secure is Secure Messaging?</h3>
        <p className="how-secure answer">In all honesty it is not that secure. It uses a simple encryption that I built
        please do not put any sensative information on it</p>
        <h3 className="what-features question">What cool features are there?</h3>
        <p className="what-features answer">If you type "@all" into the recipient bar it will send a message to every
        existing account. (plz don't abuse this feature it took me a while to make I don't want to have to disable it)</p>
        <h3 className="who-you question">Who are you?</h3>
        <p className="who-you answer">My name is Daniel! If you want to know more here is my 
        <a href="https://github.com/dezy-x2" target="_blank" rel="noreferrer" > GitHub</a></p>
        <h3 className="found-bug question">I found a bug/hack!</h3>
        <p className="found-bug answer">Awesome! Please reach out to me at df.dezmond9@gmail.com and tell me about it!</p>
        <h3 className="reach-out question">I found this website very intriguing and would like to reach out to you!</h3>
        <p className="reach-out answer">Awesome! I love questions please email me at df.dezmond9@gmail.com and we can talk!</p> 
      </header>
    </div>
  );
}

export default App;
