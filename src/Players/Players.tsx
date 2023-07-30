import { connector } from "../connector/connector";

export function Players() {
  const { data, error, isLoading } = useSWR(
    "/player-service/player?size=40&page=0",
    connector
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div>
      <h1>Players</h1>
      <ul>
        {data.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}
