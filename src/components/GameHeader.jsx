export const GameHeader = ({ score, moves, reset }) => {
  return (
    <div className="mb-8 w-full max-w-md mx-auto text-center">
      <h1 className="text-4xl font-black mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase tracking-wider">
        Memory Match
      </h1>

      <div className="flex justify-between items-center bg-slate-700/50 p-4 rounded-2xl border border-slate-600 backdrop-blur-sm mb-6">
        <div className="flex flex-col">
          <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Score</span>
          <span className="text-2xl font-mono text-emerald-400">{score}</span>
        </div>
        
        <button 
          onClick={reset}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all rounded-lg font-bold text-sm shadow-lg shadow-blue-900/20"
        >
          RESET
        </button>

        <div className="flex flex-col text-right">
          <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Moves</span>
          <span className="text-2xl font-mono text-blue-400">{moves}</span>
        </div>
      </div>
    </div>
  );
};