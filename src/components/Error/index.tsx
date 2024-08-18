interface Props {
  code: number;
  title: string;
  message: string;
}

const Error = ({ code, title, message }: Props) => {
  return (
    <div>
      <h1>{code}</h1>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
