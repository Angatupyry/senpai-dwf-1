export default function Joke({ setup, punchline }) {
  return (
    <>
      {setup && <h3>Setup: {setup}</h3>}
      <p>{punchline}</p>
      <hr />
    </>
  );
}
