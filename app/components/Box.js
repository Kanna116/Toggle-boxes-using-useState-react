export default function Box(props) {
  const bgColor = props.on ? "#0a100d" : "transparent";
  return (
    <div
      className="box w-36 h-36  rounded-xl  shrink-0 border-2 border-black"
      style={{ backgroundColor: `${bgColor}` }}
      onClick={() => props.toggle(props.id)}
    >
      <h1></h1>
    </div>
  );
}
