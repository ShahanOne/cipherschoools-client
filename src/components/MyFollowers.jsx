import followers from './followers.json';

function MyFollowers() {
  return (
    <div className="grid grid-cols-4">
      {followers.map((follower) => (
        <div>
          <img src="" alt="" />
          <br />
          <p>{follower.name}</p>
          <p>Online</p>
        </div>
      ))}
    </div>
  );
}

export default MyFollowers;
