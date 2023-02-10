function JoinScreen({start}){
    return(
        <div className="join-screen">
            <h2>Quiz </h2>
            <b>Quiz Instructions</b>
            <p>1. There are total of 5 questions.</p>
            <p>2. For each question you will get 30sec.</p>
            <p>3. The Timer is in the form progressbar, so it changes color according to the remaining time.  </p>
            <p>-once the timer reaches the 15sec it will turn yellow.</p>
            <p>-it will turns to red when it reaches the last 5sec.</p>
            <p>4. Finally, it will give the result in percentage.</p>
            <button onClick={start}>Start</button>
        </div>
    );
}
export default JoinScreen;