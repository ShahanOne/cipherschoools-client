import followers from './followers.json';

function MyFollowers() {
  return (
    <div className="grid grid-cols-4 gap-2 text-center px-8">
      {followers.map((follower) => (
        <div className="bg-slate-400 px-2 py-4 rounded-lg shadow-lg">
          <center>
            <img src="/accounts.png" className="w-20 h-20" alt="" />
          </center>

          <br />
          <p>{follower.name}</p>
          <p>Online</p>
        </div>
      ))}
    </div>
  );
}

export default MyFollowers;
